import md5 from "md5";
import formDataFields from "helpers/formDataFields";

function getQueryToEdit({ keys, data }) {
  const sortKeys = keys.sort();

  const editedQuery = encodeURI(
    sortKeys.map((key, index) => `${key}=${data[key]}`).join("&")
  );

  const encodedQuery = `${editedQuery}&token=beejee`;
  const hashedQuery = md5(encodedQuery);

  const editTaskFormData = formDataFields({ data, keys: sortKeys });

  editTaskFormData.set("token", "beejee");
  editTaskFormData.set("signature", hashedQuery);
  return editTaskFormData;
}
export default getQueryToEdit;
