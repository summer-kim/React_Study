import React, { useReducer, createContext, useMemo } from 'react';
import Form from './Form';
import Table from './Table';

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const TO_FLAG = 'TO_FLAG';
export const TO_NORMAL = 'TO_NORMAL';
export const TO_QUESTION = 'TO_QUESTION';
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
      tableData[row][col] = TABLE_CODE.OPEND;
      return {
        ...state,
        tableData,
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
  const contextValue = useMemo(
    () => ({ tableData: state.tableData, dispatch }),
    [state.tableData]
  );
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
