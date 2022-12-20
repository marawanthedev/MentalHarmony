import React, { BaseSyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { TableColumnsInterface, TableRowInterface } from "constants/table";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "hidden",
    height: "62.5rem",
  },
  container: {
    maxHeight: "90%",
    width: "100%",
    overflowY: "auto",
    backgroundColor: "white",
    fontSize: "1.4rem",
  },
  row: {
    height: "10rem",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#B9D3EE",
    },
  },

  headerText: {
    color: "#9FA2B4",
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    fontWeight: 700,
    backgroundColor: "white",
  },
  blur: {
    filter: "blur(3px)",
  },
  cell: {
    color: "#252733",
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    fontWeight: 600,
    width: "20%",
  },
  pagination: {
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    color: "#4B506D",
  },
});

type StickyHeadTableProps = {
  // tableTitle: string;
  rows: Array<TableRowInterface>;
  cols: Array<TableColumnsInterface>;
  blur?: boolean;
  actionButtonCallback?: Function;
};

export default function StickyHeadTable({
  // tableTitle,
  rows,
  cols,
  blur,
  actionButtonCallback,
}: StickyHeadTableProps) {
  const classes: any = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: BaseSyntheticEvent) => {
    const value: any = event?.target?.value;
    setRowsPerPage(value ? +value : rowsPerPage);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          className={blur ? classes?.blur : null}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow className={classes?.head}>
              {cols.map((column: TableColumnsInterface) => (
                <TableCell
                  key={column?.id}
                  align={column?.align}
                  style={{ minWidth: column?.minWidth }}
                  className={classes.headerText}
                >
                  {column?.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => {
                return (
                  <TableRow
                    className={classes.row}
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    {cols.map((column: TableColumnsInterface) => {
                      const value = row[column.id];

                      return (
                        <TableCell
                          className={classes.cell}
                          key={column?.id}
                          align={column?.align}
                          onClick={() =>
                            actionButtonCallback
                              ? actionButtonCallback(row?._id)
                              : null
                          }
                        >
                          {column?.format && typeof value === "number"
                            ? column?.format(value)
                            : value !== null &&
                              value !== undefined &&
                              value !== ""
                            ? value
                            : "-"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className={classes.pagination}
      />
    </Paper>
  );
}
