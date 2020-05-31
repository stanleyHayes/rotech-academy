import React from "react";
import {Container, Grid, Typography, Avatar} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function Footer() {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "20vh",
            fontFamily: "Quicksand",
            justifyContent: "space-between",
            flex: 1
        },
        mainLinksContainer: {},
        contactContainer: {
            backgroundColor: "black",
            paddingTop: 16,
            paddingBottom: 16,
        },
        contactTitle: {
            color: "orange",
            fontFamily: "Quicksand"
        },
        title: {
            fontFamily: "Quicksand",
            color: "black"
        },
        socialIconsContainer: {
            textAlign: "center",
            margin: 16
        },
        socialLink: {
            color: "black",
            fontSize: 14,
            textDecoration: "none",
            fontFamily: "Quicksand",
            fontWeight: 500
        },
        logoAvatar: {
            width: 140,
            height: 140
        },
        slogan: {
            color: "black",
            fontFamily: "Quicksand",
            fontWeight: 500,
            fontSize: 14,
            marginTop: 8
        },
        sloganContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        avatarContainer: {
            textAlign: "center",
            marginBottom: 8
        },
        locationItem: {
            marginTop: 8,
            marginBottom: 8,
            fontFamily: "Quicksand",
            color: "black"
        }
    });

    const classes = useStyles();
    return (
        <div className="footer-section orange-background">
            <div className={classes.container}>
                <div className={classes.mainLinksContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.title} align="center" variant="h6">Address</Typography>
                                <Typography
                                    gutterBottom={true}
                                    className={classes.locationItem}
                                    align="center"
                                    variant="subtitle2">
                                    Dome Old Station
                                </Typography>

                                <Typography
                                    gutterBottom={true}
                                    className={classes.locationItem}
                                    align="center"
                                    variant="subtitle2">
                                    Dome – Kwabenya Road
                                </Typography>

                                <Typography
                                    gutterBottom={true}
                                    className={classes.locationItem}
                                    align="center"
                                    variant="subtitle2">
                                    Dome – Accra Ghana
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    className={classes.locationItem}>
                                    (+233)266072626/(+233)207004782
                                </Typography>

                                <Typography
                                    gutterBottom={true}
                                    className={classes.locationItem}
                                    align="center"
                                    variant="subtitle2">
                                    P. O. Box 13226, Accra
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.title} align="center" variant="h6">
                                    Social Media Links
                                </Typography>
                                <div className={classes.socialIconsContainer}>
                                    <a href="" target="_blank" className={classes.socialLink}><i></i>Facebook</a>
                                </div>
                                <div className={classes.socialIconsContainer}>
                                    <a href="https://twitter.com/rotechacademy" target="_blank"
                                       className={classes.socialLink}><i></i>Twitter</a>
                                </div>
                                <div className={classes.socialIconsContainer}>
                                    <a href="#" target="_blank" className={classes.socialLink}><i></i>Instagram</a>
                                </div>
                                <div className={classes.socialIconsContainer}>
                                    <a href="mailto:rotechacademy@gmail.com" target="_blank"
                                       className={classes.socialLink}><i></i>Email Us</a>
                                </div>
                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <div className={classes.sloganContainer}>
                                    <div className={classes.avatarContainer}>
                                        <Avatar
                                            src={`${process.env.PUBLIC_URL}/images/Rotech-logo.jpg`}
                                            variant="circle"
                                            className={classes.logoAvatar}/>
                                    </div>
                                    <div>
                                        <Typography
                                            className={classes.slogan}
                                            align="center"
                                            variant="subtitle2">
                                            Developing Africa with Robotics
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className={classes.contactContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.copyright} align="center" variant="subtitle1">
                                    &copy; Copyright 2020 Rotech Academy
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Footer;
