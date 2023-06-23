import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#252525" }}>
      <div className="p-3" style={{borderBottom: '3px solid white'}}>
        <Row>
          <Col sm={12} lg={6}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                Subscribe to Aesop communications
              </p>
            </div>
            <div className="mt-4">
              <InputGroup>
                <Form.Control
                  style={{ backgroundColor: "#252525", color: "white" }}
                  placeholder="Email address"
                />
                <Button variant="outline-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Button>
              </InputGroup>
            </div>
            <div className="mt-3">
              <Form.Check
                style={{ color: "white" }}
                label={
                  "Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy."
                }
              />
            </div>
          </Col>
          <Col sm={4} lg={2}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                Orders and support
              </p>
            </div>
            <ul className="list-unstyled">
              <li className=" mt-3 text-light">
                <p>Contact Us</p>
                <p>
                  FAQs
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span>
                </p>
                <p>Shipping<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
                <p>Returns<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
                <p>Order history</p>
                <p>Terms and conditions</p>
              </li>
            </ul>
          </Col>
          <Col sm={4} lg={2}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                Services
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mt-3 text-light">
                <p>Live assistance</p>
                <p>Corporate gifts</p>
                <p>Facial Appointments</p>
                <p>Click and Collect</p>
                <p>Video consultation</p>
              </li>
            </ul>
          </Col>
          <Col sm={4} lg={2}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                Location preferences
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mt-3 text-light">
                <p>
                  <span style={{ fontWeight: "bold" }}>Shipping:</span>
                  <br />
                  Hong Kong SAR, China
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Language:</span>
                  <br />
                  English
                  <br />
                  Chinese
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={4} lg={6}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                Sustainability
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mt-3 text-light">
                <p>
                  All Aesop products are vegan, and we do not test our
                  formulations or ingredients on animals. We are Leaping Bunny
                  approved and a Certified B Corporation. Learn more
                </p>
              </li>
            </ul>
          </Col>
          <Col sm={4} lg={2}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                About
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mt-3 text-light">
                <p>Our story</p>
                <p>Foundation</p>
                <p>Careers</p>
                <p>Privacy policy</p>
                <p>Accessibility</p>
                <p>Cookie Policy</p>
              </li>
            </ul>
          </Col>
          <Col sm={4} lg={2}>
            <div className="pt-2" style={{ borderBottom: "1px solid white" }}>
              <p
                className="mt-2 text-light"
                style={{ fontSize: "medium", fontWeight: "bold" }}
              >
                About
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mt-3 text-light">
                <p>Instagram<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
                <p>Twitter<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
                <p>LinkedIn<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
                <p>WeChat</p>
                <p>Welbo<span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </span></p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
        <Container className="text-light">
            <div className="mt-3">
            <h5>Aesop</h5>
                </div>
               </Container>
    </Container>
  );
};

export default Footer;