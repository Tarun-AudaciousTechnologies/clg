import { Formik, Form, Field, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardLink,
  Col,
  Card,
  FormGroup,
  FormText,
  Label,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import Toastify from "../../../components/Toastify";
import { useLogin } from "../../../hooks/Auth";
import styles from "./styles.module.css";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required Field.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(25, "Password is too long - should be 25 chars minimum."),
});

const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginMutation } = useLogin();
  const handleSubmit = async (values) => {
    try {
      const { data } = await loginMutation({
        email: values.email,
        password: values.password,
      });
      toast.success("Login successfully");
      Cookies.set("authToken", data.result.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const toNavigate = () => {
    navigate("/signup");
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <>
              <Card className={styles.contactusHead} body>
                <CardTitle className="text-body mb-0" tag="h3">
                  User Login
                </CardTitle>
                <Breadcrumb>
                  <BreadcrumbItem href="#" tag="a" className="text-danger">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="#" tag="a" active>
                    Contact Us
                  </BreadcrumbItem>
                </Breadcrumb>
              </Card>{" "}
              <Row className={styles.row}>
                <Col sm={5} lg={5} md={5} xl={5}>
                  <Card body className={`my-5 ${styles.card}`}>
                    <h5 className={styles.userLogin}>
                      Enter your login details here
                    </h5>
                    <Form>
                      <Row>
                        <Col md={12} className="my-2">
                          <FormGroup>
                            <Label htmlFor="email" className={styles.text}>
                              <FaRegEnvelope size={20} />
                            </Label>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                              className={`${
                                errors.email && touched.email
                                  ? "input-error"
                                  : null
                              } ${styles.form_input}`}
                            />
                            <ErrorMessage
                              name="email"
                              component="span"
                              className="error text-danger"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12} className="my-2">
                          <Label htmlFor="password" className={styles.text}>
                            <FiLock size={20} />
                          </Label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className={` ${
                              errors.password && touched.password
                                ? "input-error"
                                : null
                            } ${styles.form_input}`}
                          />
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="error text-danger"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={7}>
                          <FormGroup>
                            <CardLink
                              color="link"
                              className={styles.f_password}
                            >
                              Forgot Password
                            </CardLink>
                          </FormGroup>
                        </Col>
                        <Col md={5}>
                          <FormText>
                            <CardLink
                              color="link"
                              className={styles.signup_link}
                              onClick={toNavigate}
                            >
                              Click here to Sign Up
                            </CardLink>
                          </FormText>
                        </Col>
                      </Row>
                      <FormGroup className={styles.login_section}>
                        <Button
                          className={`mt-4 ${styles.login_btn}`}
                          type="submit"
                        >
                          Login
                        </Button>
                      </FormGroup>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </>
          );
        }}
      </Formik>
      <Toastify />
    </>
  );
};
export default Login;
