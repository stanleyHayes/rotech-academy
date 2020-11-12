import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Typography, Grid, Card, CardContent, TextField, Button, LinearProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import * as Swal from "sweetalert2";
import "../../App.css";
import emailjs from "emailjs-com";
import ScrollAnimation from "react-animate-on-scroll";

function ContactPage() {

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const {firstName, lastName, company, role, email, phone, message, subject} = contact;

    function handleContactChange(event) {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!email) {
            setError({...error, email: "Field required"})
            return;
        } else {
            setError({...error, email: null})
        }
        if (!email) {
            setError({...error, subject: "Field required"})
            return;
        } else {
            setError({...error, subject: null});
        }

        setLoading(true);

        emailjs.send('default_service', 'contact_form', {...contact}, 'user_5CNXathy81NAg9ARsitgI')
            .then(function () {
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
                    message: "",
                    subject: ""
                });
                setLoading(false);
            }).catch(function (error) {
            console.log(error.message);
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
            color: "black",
            backgroundColor: "#ffa500",
            fontFamily: "Quicksand",
            transition: "all 500ms 100ms ease-out",
            '&:hover': {
                backgroundColor: "#ffb230",
            }
        },
        divContainer: {
            background: "#eeeeee",
            marginTop: 50
        },
        text: {
            fontFamily: "Quicksand"
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.divContainer}>
            <Layout>
                <div className="contact-section orange-background">
                    <Container>
                        <Typography className={classes.text} gutterBottom={true} align="center" variant="h3">Contact
                            Us</Typography>
                        <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1}>
                            <div>
                                <Typography gutterBottom={true} variant="h6" align="center">
                                    Our team is always ready to answer any question you have about our services
                                </Typography>
                                <Typography className={classes.text} gutterBottom={true} variant="h6" align="center">
                                    Send us a message and we will get back to you within 24 hours
                                </Typography>
                            </div>
                        </ScrollAnimation>
                    </Container>
                </div>

                <div className="light-background section">
                    {loading && <LinearProgress variant="query"/>}
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={8} lg={6}>
                                <ScrollAnimation animateOnce={true} animateIn="wobble" duration={1}>
                                    <Card variant="elevation" raised={true} elevation={2}>
                                        <CardContent>
                                            <Typography className={classes.text} gutterBottom={true} variant="h6"
                                                        align="center">
                                                Let's Talk
                                            </Typography>

                                            <Typography className={classes.text} variant="caption">First
                                                Name</Typography>
                                            <TextField
                                                name="firstName"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={firstName}
                                                helperText={error.firstName}
                                                onChange={handleContactChange}
                                            />


                                            <Typography className={classes.text} variant="caption">Last
                                                Name</Typography>
                                            <TextField
                                                name="lastName"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={lastName}
                                                helperText={error.lastName}
                                                onChange={handleContactChange}
                                            />


                                            <Typography className={classes.text} variant="caption">Email</Typography>
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

                                            <Typography className={classes.text} variant="caption">Subject</Typography>
                                            <TextField
                                                required={true}
                                                name="subject"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={subject}
                                                helperText={error.subject}
                                                onChange={handleContactChange}
                                            />

                                            <Typography className={classes.text} variant="caption">Company</Typography>
                                            <TextField
                                                name="company"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={company}
                                                helperText={error.company}
                                                onChange={handleContactChange}
                                            />

                                            <Typography className={classes.text} variant="caption">Role</Typography>
                                            <TextField
                                                name="role"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={role}
                                                helperText={error.role}
                                                onChange={handleContactChange}
                                            />

                                            <Typography className={classes.text} variant="caption">Phone</Typography>
                                            <TextField
                                                name="phone"
                                                fullWidth={true}
                                                variant="outlined"
                                                margin="dense"
                                                value={phone}
                                                helperText={error.phone}
                                                onChange={handleContactChange}
                                            />

                                            <Typography className={classes.text} variant="caption">Message</Typography>
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
                                                variant="outlined"
                                                size="large"
                                                fullWidth={true}
                                                onClick={handleSubmit}>
                                                Submit
                                            </Button>

                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage;
