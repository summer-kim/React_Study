import React, { useReducer, createContext, useMemo } from 'react';
import reducer from './reducer';
import { TABLE_CODE } from './code';
import Form from './Form';
import Table from './Table';

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
  halted: false,
});

const initialState = {
  tableData: [],
  timePassed: 0,
  result: '',
  halted: false,
};

export const plantMine = ({ rows, cols, mines }) => {
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
