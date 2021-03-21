import React, { useReducer, createContext } from 'react';
import Form from './Form';
import Table from './Table';

const initialState = {
  tableData: [],
  timePassed: 0,
  result: '',
};

const reducer = ({ state, action }) => {
  switch (action.type) {
    default:
      break;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Form />
      <div></div>
      <Table />
    </div>
  );
};

export default MineSearch;
