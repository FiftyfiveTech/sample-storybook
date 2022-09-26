import {
  SxProps,
  TableCellProps,
  TableContainerProps,
  TableProps,
} from "@mui/material";
import { MouseEventHandler, ReactElement } from "react";

export interface TableInterface {
  style?: TableStyle;
  tableContainerProps?: TableContainerProps;
  tableProps?: TableProps;
  rows: TableRows[];
  columns: TableColumns[];
}

export interface TableRows {
  data: {
    [key: string]: any;
    // any type is used here because data can be anything, totally dynamic type
  };
  component: (value: any) => ReactElement | undefined;
  // any type is used here because value can be anything, totally dynamic type
  onRowClick?: MouseEventHandler;
}

export interface TableColumns {
  otherCellProps: TableCellProps;
  component: ReactElement;
}

interface TableStyle {
  mainDivStyle: object;
  tableStyle: SxProps;
  tableHeadStyle: SxProps;
  tableBodyStyle: SxProps;
}
