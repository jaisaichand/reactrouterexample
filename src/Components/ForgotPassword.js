import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import logo from '../jai_crown2.png';
import '../App.css';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeState: 0,
            name: 'jai'
        }
    }






    clickedNext = () => {
        this.setState({ activeState: this.state.activeState + 1 }, () => {
            if (this.state.activeState === 1) {
                //make api call
            }
            if (this.state.activeState === 2) {
                //ask for otp from mail
            }
            if (this.state.activeState === 3) {
                //set new password and confirm it and send api call
            }
        });


    }

    clickedPrev = () => {
        this.setState({ activeState: this.state.activeState - 1 }, () => {
            //alert('done')
        });


    }

    SignInSchema = Yup.object().shape({
        emailid: Yup.string().email('Email address entered is invalid').required("Email is required"),
        firstname: Yup.string().min(6, "firstname must be more than 6 Characters").max(10, "firstname must be less than 10 Characters").required("name is required"),
        otp: Yup.string().min(6, "username must be 6 Characters").max(6, "otp must be 6 Characters").required("Otp is required"),
        lastname: Yup.string().min(6, "lastname must be more than 6 Characters").max(10, "lastname must be less than 10 Characters").required("lastname is required"),
        password: Yup.string()
            .required("Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    });



    initialValues = {
        emailid: '',
        password: '',
        otp: '',
        lastname: '',
        confirmPassword: '',
        username: ''
    };


    render() {


        return (
            <div>
                <Formik
                    initialValues={this.initialValues}
                    validationSchema={this.SignInSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        if (values.password !== values.confirmPassword) {
                            alert('Passwords didn\'t match , check and try again');
                            return;
                        }
                    }}

                >
                    {(formik) => {
                        let { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = formik;
                        return (
                            <div className="fullwidthfullheight displayallcenter backgroundcommonall">
                                <Container component="main" boxshadow={3} maxWidth="xs">
                                    <Box boxShadow={3} className="mainBrick border-radius-ten logorelative">
                                        <div className="logoabsolute">
                                            <div>
                                                <img className="logoImage" src={logo} alt="" />
                                            </div>
                                        </div>
                                        <hr style={{ width: '20px' }} />
                                        <div className="mt-5">
                                            <h4>Forgot Password</h4>
                                            <p className="d-none"><span className="text-muted">Its quick and easy</span></p>
                                        </div>
                                        <hr />
                                        <Stepper className="border-radius-ten" activeStep={this.state.activeState} orientation="vertical">

                                            <Step>
                                                <StepLabel>Enter Your Email</StepLabel>
                                                <StepContent>
                                                    <TextField size="small" inputProps={{ style: { fontSize: 15, height: 15 } }}
                                                        variant="outlined" type="text" id="emailid" name="emailid"
                                                        label="Email id" value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
                                                    {errors.emailid && touched.emailid && (
                                                        <p className="errorText"><small className="errorText font-super-small">{errors.emailid}</small></p>
                                                    )}
                                                    <div>
                                                        {!errors.emailid && touched.emailid && (
                                                            <Button className="m-3" variant="contained" color="primary" onClick={this.clickedNext}>next</Button>
                                                        )}

                                                    </div>
                                                </StepContent>
                                            </Step>

                                            <Step>
                                                <StepLabel>Enter Otp code send to your Mail</StepLabel>
                                                <StepContent>
                                                    <TextField size="small" inputProps={{ style: { fontSize: 15, height: 15 } }}
                                                        variant="outlined" type="text" id="otp" name="otp"
                                                        label="Otp" value={values.otp} onBlur={handleBlur} onChange={handleChange} />
                                                    {errors.otp && touched.otp && (
                                                        <p className="errorText"><small className="errorText font-super-small">{errors.otp}</small></p>
                                                    )}
                                                    <div>
                                                        {!errors.otp && touched.otp && (
                                                            <div>
                                                                <Button className="m-3" variant="contained" color="primary" onClick={this.clickedNext}>next</Button>
                                                                <Button className="m-3" variant="contained" color="primary" onClick={this.clickedPrev}>prev</Button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </StepContent>
                                            </Step>

                                            <Step>
                                                <StepLabel>Set NewPassword</StepLabel>
                                                <StepContent>
                                                    <div className="mb-3">
                                                        <TextField size="small" value={values.password} variant="outlined" type="password" id="password" name="password"
                                                            label="Password" onBlur={handleBlur} onChange={handleChange} inputProps={{ style: { fontSize: 15, height: 15 } }} />
                                                        {errors.password && touched.password && (
                                                            <p className="errorText"><small className="errorText font-super-small">{errors.password}</small></p>
                                                        )}
                                                    </div>


                                                    <div className="mb-3">
                                                        <TextField size="small" value={values.confirmPassword} variant="outlined" type="password" id="confirmPassword" name="confirmPassword"
                                                            label="Confirm Password" onBlur={handleBlur} onChange={handleChange} inputProps={{ style: { fontSize: 15, height: 15 } }} />
                                                        {errors.confirmPassword && touched.confirmPassword && (
                                                            <p className="errorText"><small className="errorText font-super-small">{errors.confirmPassword}</small></p>
                                                        )}

                                                    </div>


                                                    <div>
                                                        {!errors.password && !errors.confirmPassword && touched.password && touched.confirmPassword && (

                                                            <Button className="m-3" variant="contained" color="primary" onClick={this.clickedNext}>Done</Button>
                                                        )}
                                                    </div>
                                                </StepContent>
                                            </Step>
                                        </Stepper>
                                    </Box>
                                </Container>
                            </div>
                        )
                    }}
                </Formik>
            </div>

        )
    }
}

export default ForgotPassword;