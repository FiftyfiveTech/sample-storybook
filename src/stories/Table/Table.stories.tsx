import { ComponentMeta } from "@storybook/react";

import { data } from "./dataProvider";
import { Table } from "../../Component";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

export const MyTable = () => {
  const { columns, rows } = data;
  return <Table columns={columns} rows={rows} />;
};
