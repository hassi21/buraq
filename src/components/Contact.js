import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
// import { Footer } from "../../layout/Footer";

import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container className="mb-5" style={{ marginTop: "100px" }}>
        <Row style={{ paddingTop: "58px" }}>
          <span className="fw-bold text-muted text-uppercase">Contact</span>
          <h1 className="fw-bold">Contact Us</h1>
        </Row>

        <Row>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.855683779449!2d73.06049841513583!3d33.63498374705055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951fe400e221%3A0x7a8552520802df52!2sSaidpur%20Rd%2C%20Block%20E%20Satellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669411933090!5m2!1sen!2s"
            width="450"
            height="300"
          ></iframe>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
