import gql from "graphql-tag";

const GET_TASKS = gql`
  {
    tasks {
      id
      username
      email
      text
      status
    }
  }
`;
export default GET_TASKS;
