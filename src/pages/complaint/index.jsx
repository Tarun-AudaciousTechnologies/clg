import React from "react";
import styles from "./styles.module.css";
import {
  Label,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import Divider from "../../components/divider";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useComplaint } from "../../hooks/Auth";
const SignInSchema = Yup.object().shape({
  area: Yup.string().required("Area is required"),
  city: Yup.string().required("City is required Field."),
  complaintType: Yup.string().required("complaintType is required"),
  status: Yup.string().required("status is required"),
  description: Yup.string().required("description is required"),
  panCard: Yup.string().required("panCard is required"),
  images: Yup.string().required("images is required"),
});
const Complaint = (values) => {
  const { mutateAsync: complaintMutation } = useComplaint();

  const submitHandler = async () => {
    try {
      const { data } = await complaintMutation({
        ComplaintType: values.complaintType,
        description: values.description,
        area: values.area,
        city: values.city,
        images: values.images,
        panCardimage: values.panCardimage,
        status: values.status,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    city: "",
    area: "",
    complaintType: "",
    status: "",
    description: "",
    panCard: "",
    images: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
        submitHandler(values);
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <>
            <Card className={styles.contactusHead} body>
              <CardTitle className="text-body mb-0" tag="h3">
                Add Complaint
              </CardTitle>
              <Breadcrumb>
                <BreadcrumbItem href="#" tag="a" className="text-danger">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="#" tag="a" active>
                  Complaint
                </BreadcrumbItem>
              </Breadcrumb>
            </Card>
            <Container>
              <Container className="px-4 mt-5 fw-bold">
                <CardTitle tag="h4" className={styles.messageHeading}>
                  Add Your Complaints here
                </CardTitle>
                <Divider />
                <Form>
                  <Row>
                    <Col md={12} className="my-2">
                      <Label className="text-secondary" htmlFor="complaintType">
                        Complaint Type
                      </Label>
                      <Field
                        type="text"
                        name="complaintType"
                        id="complaintType"
                        placeholder="Enter your complaint Type"
                        className={`${
                          errors.complaintType && touched.complaintType
                            ? "input-error"
                            : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="complaintType"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="my-2">
                      <Label htmlFor="area" className="text-secondary">
                        Area
                      </Label>
                      <Field
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter your area"
                        className={`${
                          errors.area && touched.area ? "input-error" : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="area"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                    <Col md={6} className="my-2">
                      <Label htmlFor="city" className="text-secondary">
                        City
                      </Label>
                      <Field
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter your city"
                        className={`${
                          errors.city && touched.city ? "input-error" : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="city"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="my-2">
                      <Label htmlFor="images" className="text-secondary">
                        Upload Images
                      </Label>
                      <Input
                        tag={Field}
                        type="file"
                        name="images"
                        id="images"
                        placeholder="upload images"
                        className={`${
                          errors.images && touched.images ? "input-error" : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="images"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="my-2">
                      <Label htmlFor="panCard image" className="text-secondary">
                        Pancard Image
                      </Label>
                      <Input
                        tag={Field}
                        type="file"
                        name="panCard"
                        id="panCard"
                        placeholder="Enter your panCard Image"
                        className={`${
                          errors.panCard && touched.panCard
                            ? "input-error"
                            : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="panCard"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="my-2">
                      <Label htmlFor="description" className="text-secondary">
                        Description
                      </Label>
                      <Field
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Add short description of your problem "
                        className={`${
                          errors.description && touched.description
                            ? "input-error"
                            : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="description"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="my-2">
                      <Label htmlFor="status" className="text-secondary">
                        Status
                      </Label>
                      <Field
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Enter status"
                        className={`${
                          errors.status && touched.status ? "input-error" : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="status"
                        component="span"
                        className="error text-danger"
                      />
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    className={`rounded-pill px-5 my-5 ${styles.submitbtn}`}
                  >
                    Submit
                  </Button>
                </Form>
              </Container>
            </Container>
          </>
        );
      }}
    </Formik>
  );
};
export default Complaint;
