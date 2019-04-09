import gql from "graphql-tag";

const ADD_TASK = gql`
  mutation addTask(
    $username: String
    $email: String
    $text: String
    $status: Int
  ) {
    addTask(username: $username, email: $email, text: $text, status: $status) {
      id
      username
      email
      text
      status
    }
  }
`;
export default ADD_TASK;
