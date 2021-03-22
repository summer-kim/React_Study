import React, { useContext, useCallback } from 'react';
import {
  TableContext,
  TABLE_CODE,
  OPEN_CELL,
  TO_FLAG,
  TO_NORMAL,
  TO_QUESTION,
  BLOW_UP,
} from './MineSearch';
import '../../asset/findingMine.css';

const getTdText = (code) => {
  switch (code) {
    case TABLE_CODE.MINE:
      return 'X';
    case TABLE_CODE.NORMAL:
      return ' ';
    case TABLE_CODE.QUESTION_MINE:
    case TABLE_CODE.QUESTION:
      return '?';
    case TABLE_CODE.FLAG_MINE:
    case TABLE_CODE.FLAG:
      return '!';
    default:
      return code;
  }
};

const getTdStyle = (code) => {
  switch (code) {
    case TABLE_CODE.NORMAL:
    case TABLE_CODE.MINE:
      return;
    case TABLE_CODE.OPEND:
      return { background: 'teal' };
    case TABLE_CODE.QUESTION_MINE:
    case TABLE_CODE.QUESTION:
      return { background: 'gray' };
    case TABLE_CODE.FLAG_MINE:
    case TABLE_CODE.FLAG:
      return { background: 'rgb(255, 107, 156)' };
    default:
      return { background: 'teal' };
  }
};

const Td = ({ rowIndex, colIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);
  // const code = useMemo(() => {
  //   return tableData[rowIndex][colIndex]}, [
  //   tableData[rowIndex][colIndex],
  // ]);
  console.log('td');
  const onClickDigging = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][colIndex]) {
      case TABLE_CODE.MINE:
        dispatch({ type: BLOW_UP, row: rowIndex, col: colIndex });
        break;
      case TABLE_CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, col: colIndex });
        break;
      case TABLE_CODE.OPEND:
      default:
        break;
    }
  }, [halted, tableData[rowIndex][colIndex]]);

  const onClickRight = useCallback(
    (e) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][colIndex]) {
        case TABLE_CODE.MINE:
        case TABLE_CODE.NORMAL:
          dispatch({ type: TO_QUESTION, row: rowIndex, col: colIndex });
          break;
        case TABLE_CODE.QUESTION_MINE:
        case TABLE_CODE.QUESTION:
          dispatch({ type: TO_FLAG, row: rowIndex, col: colIndex });
          break;
        case TABLE_CODE.FLAG_MINE:
        case TABLE_CODE.FLAG:
          dispatch({ type: TO_NORMAL, row: rowIndex, col: colIndex });
          break;
        case TABLE_CODE.OPEND:
        default:
          break;
      }
    },
    [halted, tableData[rowIndex][colIndex]]
  );

  return (
    <td
      onClick={onClickDigging}
      style={getTdStyle(tableData[rowIndex][colIndex])}
      onContextMenu={onClickRight}
    >
      {getTdText(tableData[rowIndex][colIndex])}
    </td>
  );
};

export default Td;
