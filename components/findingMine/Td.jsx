import React, { useContext, useCallback } from 'react';
import { TableContext, TABLE_CODE, OPEN_CELL } from './MineSearch';
import '../../asset/findingMine.css';

const getTdText = (code) => {
  switch (code) {
    case TABLE_CODE.MINE:
      return 'X';
    case TABLE_CODE.NORMAL:
      return ' ';
    case TABLE_CODE.QUESTION:
    case TABLE_CODE.QUESTION_MINE:
      return '?';
    case TABLE_CODE.FLAG:
    case TABLE_CODE.FLAG_MINE:
      return '!';
    default:
      break;
  }
};

const getTdStyle = (code) => {
  switch (code) {
    case TABLE_CODE.OPEND:
      return { background: 'teal' };
    case TABLE_CODE.QUESTION_MINE:
    case TABLE_CODE.QUESTION:
      return { background: 'gray' };
    case TABLE_CODE.FLAG_MINE:
    case TABLE_CODE.FLAG:
      return { background: 'rgb(255, 107, 156)' };
    default:
      break;
  }
};

const Td = ({ rowIndex, colIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);
  const code = tableData[rowIndex][colIndex];

  const onClickDigging = useCallback(() => {
    switch (code) {
      case TABLE_CODE.MINE:
      case TABLE_CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, col: colIndex });
        break;
      case TABLE_CODE.OPEND:
      default:
        break;
    }
  }, []);
  return (
    <td onClick={onClickDigging} style={getTdStyle(code)}>
      {getTdText(code)}
    </td>
  );
};

export default Td;
