
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../jai_crown2.png';
import * as Yup from 'yup';





const Login = () => {
    const SignInSchema = Yup.object().shape({
        emailid: Yup.string().email('Email address entered is invalid').required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    });


    let initialValues = {
        emailid: '',
        password: ''
    };





    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
                console.log(values);

            }}

        >

            {(formik) => {
                let { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = formik;

                return (
                    <div className="fullwidthfullheight displayallcenter backgroundcommonall">

                        <Container component="main" boxshadow={3} maxWidth="xs">
                            <Box boxShadow={3} className="mainLoginBrick border-radius-ten logorelative">
                                <div className="logoabsolute">
                                    <div>
                                        <img className="logoImage" src={logo} alt="" />
                                    </div>
                                </div>
                                <hr style={{ width: '20px' }} />
                                <div className="mt-4">
                                    <h4>Login to your account</h4>
                                    <p><span className="text-muted">Its quick and easy</span></p>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    {/* Emailid */}
                                    <div className="mb-3">
                                        <TextField size="small" inputProps={{ style: { fontSize: 15, height: 17 } }}
                                            variant="outlined" type="text" id="emailid" name="emailid"
                                            label="Email id" value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
                                        {errors.emailid && touched.emailid && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.emailid}</small></p>
                                        )}
                                    </div>

                                    {/* password */}
                                    <div className="mb-3">
                                        <TextField size="small" value={values.password} variant="outlined" type="password" id="password" name="password"
                                            label="Password" onBlur={handleBlur} onChange={handleChange} inputProps={{ style: { fontSize: 15, height: 17 } }} />
                                        {errors.password && touched.password && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.password}</small></p>
                                        )}
                                    </div>



                                    <Button className="mb-3" variant="contained" color="secondary" type="submit">Login</Button>
                                </form>
                                <p> <Link to="/forgotpassword" style={{ textDecoration: 'none' }}><span>Forgot Password?</span></Link></p>
                                <p className="pb-3"> Didn't have an account yet? <Link to="/signup" style={{ textDecoration: 'none' }}><span>Create one</span></Link></p>
                            </Box>
                        </Container>
                    </div>
                );
            }

            }
        </Formik >


    )

}

export default Login;