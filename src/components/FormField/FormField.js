import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const FormField = ({ children, label, value, placeholder, id, onChange }) => (
  <TextField {...{ id, label, placeholder, value, onChange }} />
);

FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
};

export default FormField;
