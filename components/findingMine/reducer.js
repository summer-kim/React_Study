import { plantMine } from './MineSearch';
import { TABLE_CODE, ACTION_TYPE } from './code';

const reducer = (state, action) => {
  const { row = '', col = '' } = action;
  let rowArray = [];
  switch (action.type) {
    case ACTION_TYPE.START_GAME:
      return {
        ...state,
        tableData: plantMine({
          rows: action.rows,
          cols: action.cols,
          mines: action.mines,
        }),
      };
    case ACTION_TYPE.OPEN_CELL:
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
    case ACTION_TYPE.BLOW_UP:
      return {
        ...state,
        halted: true,
      };
    case ACTION_TYPE.TO_QUESTION:
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
    case ACTION_TYPE.TO_FLAG:
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
    case ACTION_TYPE.TO_NORMAL:
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

export default reducer;
