import gql from "graphql-tag";

const EDI_TASK = gql`
  mutation editTask($id: Int, $text: String, $status: Boolean) {
    editTask(id: $id, text: $text, status: $status) {
      id
    }
  }
`;
export default EDI_TASK;
