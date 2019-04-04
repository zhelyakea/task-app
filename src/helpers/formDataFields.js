export default function formDataFields({ data, keys }) {
  const editTaskFormData = new FormData();
  keys.map(key => editTaskFormData.set(key, data[key]));
  return editTaskFormData;
}
