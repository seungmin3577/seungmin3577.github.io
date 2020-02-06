import React, { Fragment } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography, Grid } from "@material-ui/core";

interface Props {
  titleData: Array<HeadCell>;
  bodyData: Array<Array<string>>;
  headTitle?: string;
}

interface HeadCell {
  id: string;
  label: string;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#888",
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  })
)(TableRow);

const useStyles = makeStyles({
  tableContainer: {
    marginBottom: 50
  },
  table: {
    minWidth: 700
  },
  headTitle: {
    textAlign: "left"
  }
});

const CustomTable: React.SFC<Props> = ({ titleData, bodyData, headTitle }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {headTitle ? (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography className={classes.headTitle} variant="h6">
              {headTitle}
            </Typography>
          </Grid>
        </Grid>
      ) : null}

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {titleData.map((title, index) => {
                return (
                  <StyledTableCell key={index} align="center">
                    {title.label}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyData.map((row, index) => {
              return (
                <StyledTableRow key={index}>
                  {row.map((column, key) => {
                    return (
                      <StyledTableCell key={key} align="center">
                        {column}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default CustomTable;
