
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import '../App.css';
import logo from '../jai_crown2.png';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';





const SignUp = () => {
    const SignInSchema = Yup.object().shape({
        emailid: Yup.string().email('Email address entered is invalid').required("Email is required"),
        firstname: Yup.string().min(6, "firstname must be more than 6 Characters").max(10, "firstname must be less than 10 Characters").required("name is required"),
        username: Yup.string().min(10, "username must be more than 10 Characters").max(15, "username must be less than 15 Characters").required("username is required"),
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



    let initialValues = {
        emailid: '',
        password: '',
        firstname: '',
        lastname: '',
        confirmPassword: '',
        username: ''
    };





    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
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
                                <div className="mt-4">
                                    <h4>Create a new account</h4>
                                    <p><span className="text-muted">Its quick and easy</span></p>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    {/* Emailid */}
                                    <div className="mb-3">
                                        <TextField size="small" inputProps={{ style: { fontSize: 15, height: 15 } }}
                                            variant="outlined" type="text" id="emailid" name="emailid"
                                            label="Email id" value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
                                        {errors.emailid && touched.emailid && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.emailid}</small></p>
                                        )}
                                    </div>
                                    {/* username */}
                                    <div className="mb-3">
                                        <TextField value={values.username} size="small" variant="outlined"
                                            inputProps={{ style: { fontSize: 15, height: 15 } }}
                                            type="text" id="username" name="username" label="Username" onBlur={handleBlur} onChange={handleChange} />
                                        {errors.username && touched.username && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.username}</small></p>
                                        )}

                                    </div>
                                    {/* firstname */}
                                    <div className="mb-3">
                                        <TextField size="small" value={values.firstname} inputProps={{ style: { fontSize: 15, height: 15 } }}
                                            variant="outlined" type="text" id="firstname" name="firstname"
                                            label="Firstname" onBlur={handleBlur} onChange={handleChange} />
                                        {errors.firstname && touched.firstname && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.firstname}</small></p>
                                        )}
                                    </div>
                                    {/* lastname/surname */}
                                    <div className="mb-3">
                                        <TextField size="small" value={values.lastname} variant="outlined"
                                            type="text" id="lastname" name="lastname" inputProps={{ style: { fontSize: 15, height: 15 } }}
                                            label="Lastname/Surname" onBlur={handleBlur} onChange={handleChange} />
                                        {errors.lastname && touched.lastname && (
                                            <p className="errorText"><small className="errorText font-super-small">{errors.lastname}</small></p>
                                        )}
                                    </div>
                                    {/* password */}
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


                                    <Button className="mb-3" variant="contained" color="secondary" type="submit">Submit</Button>
                                </form>
                                <p className="pb-3"> Already have an account ? <Link to="/login" style={{ textDecoration: 'none' }}><span>Login</span></Link></p>
                            </Box>
                        </Container>
                    </div>
                );
            }

            }
        </Formik >


    )

}

export default SignUp;