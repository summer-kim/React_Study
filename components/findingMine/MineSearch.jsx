import React, { useReducer, createContext, useMemo } from 'react';
import Form from './Form';
import Table from './Table';

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
  halted: false,
});

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const TO_FLAG = 'TO_FLAG';
export const TO_NORMAL = 'TO_NORMAL';
export const TO_QUESTION = 'TO_QUESTION';
export const BLOW_UP = 'BLOW_UP';

export const TABLE_CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  EXPLOSION: -6,
  OPEND: 0,
};

const initialState = {
  tableData: [],
  timePassed: 0,
  result: '',
  halted: false,
};

const reducer = (state, action) => {
  const { row = '', col = '' } = action;
  let rowArray = [];
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine({
          rows: action.rows,
          cols: action.cols,
          mines: action.mines,
        }),
      };
    case OPEN_CELL:
      const tableData = [...state.tableData];
      let aroundArea = [tableData[row][col - 1], tableData[row][col + 1]];
      if (tableData[row - 1]) {
        aroundArea = aroundArea.concat(
          tableData[row - 1][col - 1],
          tableData[row - 1][col],
          tableData[row - 1][col + 1]
        );
      }
      if (tableData[row + 1]) {
        aroundArea = aroundArea.concat(
          tableData[row + 1][col - 1],
          tableData[row + 1][col],
          tableData[row + 1][col + 1]
        );
      }
      const count = aroundArea.filter((code) =>
        [
          TABLE_CODE.MINE,
          TABLE_CODE.FLAG_MINE,
          TABLE_CODE.QUESTION_MINE,
        ].includes(code)
      ).length;
      tableData[row][col] = count;
      return {
        ...state,
        tableData,
      };
    case BLOW_UP:
      return {
        ...state,
        halted: true,
      };
    case TO_QUESTION:
      rowArray = [...state.tableData[row]];
      rowArray[col] === TABLE_CODE.MINE
        ? (rowArray[col] = TABLE_CODE.QUESTION_MINE)
        : (rowArray[col] = TABLE_CODE.QUESTION);
      return {
        ...state,
        tableData: state.tableData.map((original, i) =>
          i === row ? rowArray : original
        ),
      };
    case TO_FLAG:
      rowArray = [...state.tableData[row]];
      rowArray[col] === TABLE_CODE.QUESTION_MINE
        ? (rowArray[col] = TABLE_CODE.FLAG_MINE)
        : (rowArray[col] = TABLE_CODE.FLAG);
      return {
        ...state,
        tableData: state.tableData.map((original, i) =>
          i === row ? rowArray : original
        ),
      };
    case TO_NORMAL:
      rowArray = [...state.tableData[row]];
      rowArray[col] === TABLE_CODE.FLAG_MINE
        ? (rowArray[col] = TABLE_CODE.MINE)
        : (rowArray[col] = TABLE_CODE.NORMAL);
      return {
        ...state,
        tableData: state.tableData.map((original, i) =>
          i === row ? rowArray : original
        ),
      };
    default:
      break;
  }
};

const plantMine = ({ rows, cols, mines }) => {
  const data = [];
  const shuffle = [];
  const candidate = Array(rows * cols)
    .fill()
    .map((v, idx) => idx);
  while (shuffle.length < mines) {
    const randomNum = Math.floor(Math.random() * candidate.length);
    const mineLocation = candidate.splice(randomNum, 1)[0];
    shuffle.push(mineLocation);
  }
  for (let i = 0; i < rows; i++) {
    const rowArray = [];
    for (let j = 0; j < cols; j++) {
      rowArray.push(TABLE_CODE.NORMAL);
    }
    data.push(rowArray);
  }

  shuffle.forEach((location) => {
    const row = Math.floor(location / cols);
    const col = location % cols;
    data[row][col] = TABLE_CODE.MINE;
  });
  return data;
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, halted } = state;
  const contextValue = useMemo(() => ({ tableData, dispatch, halted }), [
    tableData,
    halted,
  ]);
  return (
    <TableContext.Provider value={contextValue}>
      <Form />
      <div>{state.timePassed}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;
