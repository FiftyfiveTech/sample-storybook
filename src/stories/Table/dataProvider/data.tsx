import { Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import LdChip from "../../../Component/Element/LdChip";
import {
  TableColumns,
  TableRows,
} from "../../../Component/Element/Table/types";

export const columns: TableColumns[] = [
  {
    component: <Typography>Name</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>No. of Questions</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>Status</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>Topic</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>Age Group</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>Review</Typography>,
    otherCellProps: { align: "center" },
  },
  {
    component: <Typography>Last Submission</Typography>,
    otherCellProps: { align: "center" },
  },
];

export const rows: TableRows[] = [
  {
    component: (data) => {
      if (typeof data === "string" || typeof data === "number") {
        return <Typography align="center">{data}</Typography>;
      }
      const { value, type } = data;
      if (type === "status") {
        return <LdChip label={value} color="primary" />;
      }
      if (type === "review") {
        return (
          <div style={{ textAlign: "center", display: "flex" }}>
            <Star style={{ fill: "yellow" }} />
            <Typography>{`${value.review}(${value.users})`}</Typography>
          </div>
        );
      }
    },
    data: {
      col1: "Unit 9: Assesment_Name",
      col2: 10,
      col3: { type: "status", value: "Saved" },
      col4: "This is me",
      col5: "3-4 years",
      col6: {
        type: "review",
        value: {
          review: 4.7,
          users: 63,
        },
      },
      col7: "Jul 05, 2022",
    },
  },
];
