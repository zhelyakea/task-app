import Amplify, { API, graphqlOperation } from "aws-amplify";
import address from "constants/address";

Amplify.configure({
  API: {
    graphql_endpoint: address
  }
});

export { API, graphqlOperation };
