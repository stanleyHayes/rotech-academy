import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function Footer() {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "50vh",
            fontFamily: "Quicksand"
        },
        mainLinksContainer: {
            flexGrow: 1
        },
        contactContainer: {
            backgroundColor: "orange",
            paddingTop: 16,
            paddingBottom: 16,
        },
        contactTitle: {
            color: "black",
            fontFamily: "Quicksand"
        },
        title: {
            fontFamily: "Quicksand"
        }
    });

    const classes = useStyles();
    return (
        <div className="footer-section black-background">
            <div className={classes.container}>
                <div className={classes.mainLinksContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.title} align="center" variant="h6">Address</Typography>

                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.title} align="center" variant="h6">Social Media
                                    Links</Typography>
                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.title} align="center" variant="h6">Subscribe to our
                                    newsletter</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className={classes.contactContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.contactTitle} align="center"
                                            variant="subtitle1">+233270048319</Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.contactTitle} align="center"
                                            variant="subtitle1">hayfordstanley@gmail.com</Typography>

                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Typography className={classes.contactTitle} align="center"
                                            variant="subtitle1">+233555180048</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Footer;
