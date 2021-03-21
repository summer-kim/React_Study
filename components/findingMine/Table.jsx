import React, { useContext } from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody id='tableTbody'>
        {Array(tableData.length)
          .fill()
          .map((tr, index) => (
            <Tr rowIndex={index} key={index} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
