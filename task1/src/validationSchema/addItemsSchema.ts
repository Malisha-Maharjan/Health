import * as Yup from "yup";

export const addItemsValidationSchema = Yup.object().shape({
  patientId: Yup.string().required("Required**"),
  testItem: Yup.string().required("Required**"),
  result: Yup.string().required("Required**"),
  visitId: Yup.string().required("Required**"),
  testGroup: Yup.string().required("Required**"),
});
