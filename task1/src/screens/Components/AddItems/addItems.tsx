import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./style.module.css";

export type FormContent = {
  patientId: string;
  testItem: string;
  testGroup: string;
  result: string;
  visitId: string;
  date: number[];
  time: number[];
};

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddItems } from "../../../hooks/useAddApi";
import { addItemsValidationSchema } from "../../../validationSchema/addItemsSchema";
// import { useState } from "react";

export const AddItems = ({ open, toggleOpen }: any) => {
  console.log("Add Items");
  const { mutate: postItems } = useAddItems();
  const initialValues: FormContent = {
    patientId: "",
    testItem: "",
    testGroup: "",
    result: "",
    visitId: "",
    date: [],
    time: [],
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              minHeight: "550px", // Set your width here
            },
          },
        }}
        open={open}
        onClose={toggleOpen}
        fullWidth
      >
        <div className={styles.container}>
          <DialogTitle style={{ alignItems: "center" }}>
            Add Patient Result
          </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={initialValues}
              validationSchema={addItemsValidationSchema}
              onSubmit={(values, actions) => {
                const date = new Date();
                values.date = [
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate(),
                ];
                values.time = [date.getHours(), date.getMinutes()];
                postItems(values);
                toggleOpen();
                window.location.reload();
                // alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(false);
              }}
            >
              <Form className={styles.formContainer}>
                <div className={styles.singleForm}>
                  <Field
                    name="patientId"
                    placeholder="patientId"
                    className={styles.field}
                  />
                  <ErrorMessage
                    name="patientId"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div>
                  <Field
                    name="testItem"
                    placeholder="testItem"
                    className={styles.field}
                  />
                  <ErrorMessage
                    name="testItem"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div>
                  <Field
                    name="testGroup"
                    placeholder="testGroup"
                    className={styles.field}
                  />
                  <ErrorMessage
                    name="testGroup"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div>
                  <Field
                    name="result"
                    placeholder="result"
                    className={styles.field}
                  />
                  <ErrorMessage
                    name="result"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div>
                  <Field
                    name="visitId"
                    placeholder="visitId"
                    className={styles.field}
                  />
                  <ErrorMessage
                    name="visitId"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.actionButtons}>
                  <Button variant="contained" type="submit">
                    Add
                  </Button>
                  <Button variant="contained" onClick={toggleOpen}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Formik>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};
