import React, { useContext } from 'react';
import Td from './Td';
import { TableContext } from './MineSearch';

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {Array(tableData[0].length)
        .fill()
        .map((td, index) => (
          <Td
            rowIndex={rowIndex}
            colIndex={index}
            key={rowIndex + '' + index}
          />
        ))}
    </tr>
  );
};

export default Tr;
