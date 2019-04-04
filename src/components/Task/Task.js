import React, { useContext } from "react";
import PropTypes from "prop-types";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";

import FormField from "components/FormField";
import { AuthContext } from "components/App";

const Task = ({
  username,
  email,
  text,
  status,
  checked,
  checkTaskHandler,
  editTaskTextHandler,
  editTaskHandler,
  ...props
}) => {
  const { isAdmin } = useContext(AuthContext);
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          onChange={checkTaskHandler}
          disabled={!isAdmin}
        />
      </TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{email}</TableCell>
      {!isAdmin && <TableCell>{text}</TableCell>}
      {isAdmin && (
        <>
          <TableCell>
            <FormField
              id="task"
              label="Task"
              placeholder="Edit task text..."
              onChange={editTaskTextHandler}
            />
          </TableCell>
          <TableCell>
            <Tooltip title="Edit">
              <IconButton aria-label="Edit">
                <EditIcon onClick={editTaskHandler} />
              </IconButton>
            </Tooltip>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

Task.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.number,
  isAdmin: PropTypes.bool,
  editTaskHandler: PropTypes.func
};

export default Task;
