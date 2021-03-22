import React, { useContext, memo } from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const Table = () => {
  const { tableData, halted } = useContext(TableContext);
  return (
    <table>
      <tbody id='tableTbody'>
        {halted ? (
          <button className='btn'>Reset</button>
        ) : (
          Array(tableData.length)
            .fill()
            .map((tr, index) => <Tr rowIndex={index} key={index} />)
        )}
      </tbody>
    </table>
  );
};

export default memo(Table);
