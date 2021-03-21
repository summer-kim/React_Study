import React, { useState, useCallback, useContext } from 'react';
import { TableContext, START_GAME } from './MineSearch';

const Form = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [mines, setMines] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRows = useCallback((e) => {
    setRows(e.target.value);
  }, []);

  const onChangeCols = useCallback((e) => {
    setCols(e.target.value);
  }, []);

  const onChangeMines = useCallback((e) => {
    setMines(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    dispatch({ type: START_GAME, rows, cols, mines });
  }, [rows, cols, mines]);

  return (
    <div>
      <input
        type='number'
        value={rows}
        placeholder='rows'
        onChange={onChangeRows}
      />
      <input
        type='number'
        value={cols}
        placeholder='columns'
        onChange={onChangeCols}
      />
      <input
        type='number'
        value={mines}
        placeholder='number of mines'
        onChange={onChangeMines}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default Form;
