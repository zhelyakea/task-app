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
    total_task_count
  }
`;
export default GET_TASKS;
