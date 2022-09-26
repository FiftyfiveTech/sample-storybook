import {
  TableInterface,
  TableRows,
  TableColumns,
} from "../../interfaces/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableComponent = ({
  style,
  rows,
  columns,
  tableContainerProps,
  tableProps,
}: TableInterface) => (
  <div style={style?.mainDivStyle}>
    <TableContainer {...tableContainerProps}>
      <Table sx={style?.tableStyle} {...tableProps}>
        <TableHead sx={style?.tableHeadStyle}>
          <TableRow>
            {columns.map((item: TableColumns, index: number) => {
              const { component, otherCellProps } = item;
              return (
                <TableCell {...otherCellProps} key={index}>
                  {component}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={style?.tableBodyStyle}>
          {rows.map((rowItem: TableRows, index: number) => {
            const { data, component, onRowClick } = rowItem;
            return (
              <TableRow key={index} onClick={onRowClick}>
                {Object.keys(data).map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{component(data[key])}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

TableComponent.defaultProps = {
  style: {},
  tableContainerProps: {},
  tableProps: {},
};

export default TableComponent;
