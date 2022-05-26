import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "hidden",
    height: "62.5rem",
  },
  container: {
    maxHeight: "90%",
    overflowY: "auto",
    backgroundColor: "white",
    fontSize: "1.4rem",
  },
  row: {
    height: "10rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#B9D3EE",
    },
  },

  headerText: {
    color: "#9FA2B4",
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    fontWeight: "700",
    backgroundColor: "white",
  },
  blur: {
    filter: "blur(3px)",
  },
  cell: {
    color: "#252733",
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    fontWeight: "600",
  },
  pagination: {
    fontSize: "1.4rem",
    fontFamily: "Mulish",
    color: "#4B506D",
  },
});

export default function StickyHeadTable({
  tableTitle,
  rows,
  cols,
  blur,
  actionButtonCallback,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          className={blur ? classes.blur : null}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow className={classes.head}>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.headerText}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    className={classes.row}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {cols.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className={classes.cell}
                          key={column.id}
                          align={column.align}
                          onClick={() =>
                            actionButtonCallback
                              ? actionButtonCallback(row._id)
                              : null
                          }
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
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
