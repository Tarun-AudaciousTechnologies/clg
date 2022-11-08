import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImMap2 } from "react-icons/im";
import styles from "./styles.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardLink,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Form
} from "reactstrap";
import Divider from "../../components/divider";

const Contact = () => {
  return (
    <>
     <Card className={styles.contactusHead} body>
                <CardTitle className="text-body mb-0" tag="h3">
                  Contact Us
                </CardTitle>
                <Breadcrumb>
                  <BreadcrumbItem href="#" tag="a" className="text-danger">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="#" tag="a" active>
                    Contact Us
                  </BreadcrumbItem>
                </Breadcrumb>
              </Card>
              <Container>
                <Container>
                  <Card body className="border-0 my-4">
                    <Row>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <BsTelephone size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Phone
                              </CardTitle>
                              <CardLink
                                href="tel:0731-4949036"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                0731-111111
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <FiMail size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Mail
                              </CardTitle>
                              <CardLink
                                href="mailto:contact@grievancepg.in"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                contact@grievancepg.in
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <ImMap2 size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Location
                              </CardTitle>
                              <CardLink
                                href="https://goo.gl/maps"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                Indore India
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Container>
                <Container className="px-4 mt-5">
                  <CardTitle tag="h4" className="text-danger">
                    Send Messages
                  </CardTitle>
                      <Divider />
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className={` rounded-pill  ${styles.form_input}`}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="lastName"
                            id="lasstName"
                            placeholder="Last Name"
                            className={` rounded-pill  ${styles.form_input}`}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className={` rounded-pill  ${styles.form_input}`}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone No"
                            className={` rounded-pill  ${styles.form_input}`}

                         />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input
                          id="message"
                          name="message"
                          placeholder="Message"
                          className={` rounded-pill  ${styles.form_input}`}
                        />
                       
                      </Col>
                    </FormGroup>
                    <Button
                      type="submit"
                      className={`rounded-pill px-5 my-5 ${styles.submitbtn}`}
                    >
                      Submit Message
                    </Button>
                  </Form>
                </Container>
                </Container>
    </>
  )
}

export default Contact;