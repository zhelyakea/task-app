import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import AddTask from "components/AddTask";
import Task from "components/Task";

import styles from "./styles";

const Tasks = ({
  isAdmin,
  tasks,
  addTask,
  editTask,
  rowsPerPage,
  currentPage,
  statusDirection,
  nameDirection,
  emailDirection,
  totalTasksCount,
  changePageHandler,
  sortByStatus,
  sortByName,
  sortByEmail
}) => {
  return (
    <>
      <AddTask {...{ addTask }} />
      <div style={styles.tableWrapper}>
        <Paper>
          <div style={styles.titleWrapper}>
            <Typography>Tasks</Typography>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <Tooltip title="Sort by Status">
                  <TableCell>
                    <TableSortLabel
                      active
                      direction={statusDirection}
                      onClick={sortByStatus}
                    >
                      Status
                    </TableSortLabel>
                  </TableCell>
                </Tooltip>

                <Tooltip title="Sort by User Name">
                  <TableCell>
                    <TableSortLabel
                      active
                      direction={nameDirection}
                      onClick={sortByName}
                    >
                      User Name
                    </TableSortLabel>
                  </TableCell>
                </Tooltip>
                <Tooltip title="Sort by Email">
                  <TableCell>
                    <TableSortLabel
                      active
                      direction={emailDirection}
                      onClick={sortByEmail}
                    >
                      Email
                    </TableSortLabel>
                  </TableCell>
                </Tooltip>
                <TableCell>
                  <TableSortLabel active={false} disabled>
                    Task Text
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  {isAdmin && (
                    <TableSortLabel active={false} disabled>
                      Edit
                    </TableSortLabel>
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map(({ id, ...otherProps }) => (
                <Task
                  key={id}
                  {...{ ...otherProps, id, currentPage, editTask }}
                />
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[rowsPerPage]}
            component="div"
            count={totalTasksCount}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={changePageHandler}
          />
        </Paper>
      </div>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string
    })
  ).isRequired
};

export default Tasks;
