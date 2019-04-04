import React from "react";
import iconLoading from "media/loadingIcon.svg";
import styles from "./styles";

const Loading = () => (
  <img
    alt="loading"
    style={styles.loading}
    src={iconLoading}
    width="100"
    height="100"
  />
);
export default Loading;
