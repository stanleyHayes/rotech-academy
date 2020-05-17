import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Typography, Grid, Card, CardContent, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import * as Swal from "sweetalert2";
import "../../App.css";

function ContactPage() {

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const {firstName, lastName, company, role, email, phone, message} = contact;

    function handleContactChange(event) {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!email) {
            setError({...error, email: "Field required"})
            return;
        }

        setLoading(true);

        axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/contact`,
            data: contact
        }).then(function () {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Your message was sent successfully",
                timer: 3000
            });
            setContact({
                ...contact,
                firstName: "",
                lastName: "",
                company: "",
                role: "",
                email: "",
                phone: "",
                message: ""
            });
            setLoading(false);
        }).catch(function () {
            Swal.fire({
                icon: "error",
                title: "Failure",
                text: "Your message could not be sent. Try again !!!",
                timer: 3000
            });
            setLoading(false);
        }).finally(function () {
            setLoading(false);
        });
    }

    const useStyles = makeStyles({
        button: {
            marginTop: 18,
            marginBottom: 16,
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "#212121"
        },
        divContainer: {
            background: "#eeeeee",
            marginTop: 50
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.divContainer}>
            <Layout>
                <div className="contact-section dark-background">
                    <Container>
                        <Typography gutterBottom={true} align="center" variant="h3">Contact Us</Typography>
                        <div>
                            <Typography gutterBottom={true} variant="h6" align="center">
                                Our team is always ready to answer any question you have about our services
                            </Typography>
                            <Typography gutterBottom={true} variant="h6" align="center">
                                Send us a message and we will get back to you within 24 hours
                            </Typography>
                        </div>
                    </Container>
                </div>

                <div className="light-background section">
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={8} lg={6}>
                                <Card variant="elevation" raised={true} elevation={2}>
                                    <CardContent>
                                        <Typography gutterBottom={true} variant="h6" align="center">
                                            Let's Talk
                                        </Typography>

                                        <Typography variant="caption">First Name</Typography>
                                        <TextField
                                            name="firstName"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={firstName}
                                            helperText={error.firstName}
                                            onChange={handleContactChange}
                                        />


                                        <Typography variant="caption">Last Name</Typography>
                                        <TextField
                                            name="lastName"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={lastName}
                                            helperText={error.lastName}
                                            onChange={handleContactChange}
                                        />


                                        <Typography variant="caption">Email</Typography>
                                        <TextField
                                            required={true}
                                            name="email"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={email}
                                            helperText={error.email}
                                            onChange={handleContactChange}
                                        />


                                        <Typography variant="caption">Company</Typography>
                                        <TextField
                                            name="company"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={company}
                                            helperText={error.company}
                                            onChange={handleContactChange}
                                        />

                                        <Typography variant="caption">Role</Typography>
                                        <TextField
                                            name="role"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={role}
                                            helperText={error.role}
                                            onChange={handleContactChange}
                                        />

                                        <Typography variant="caption">Phone</Typography>
                                        <TextField
                                            name="phone"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={phone}
                                            helperText={error.phone}
                                            onChange={handleContactChange}
                                        />

                                        <Typography variant="caption">Message</Typography>
                                        <TextField
                                            name="message"
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="dense"
                                            value={message}
                                            rows={4}
                                            multiline={true}
                                            helperText={error.message}
                                            onChange={handleContactChange}
                                        />

                                        <Button
                                            className={classes.button}
                                            disabled={loading}
                                            variant="contained"
                                            size="large"
                                            fullWidth={true}
                                            onClick={handleSubmit}>
                                            Submit
                                        </Button>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage;
