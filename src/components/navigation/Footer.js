import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function Footer() {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#212121",
            minHeight: "50vh"
        },
        mainLinksContainer: {
            flexGrow: 1
        },
        contactContainer: {
            backgroundColor: "#424242",
            paddingTop: 16,
            paddingBottom: 16,
            marginBottom: -50
        }

    });

    const classes = useStyles();
    return (
        <div className="section dark-background">
            <div className={classes.container}>
                <div className={classes.mainLinksContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="h6">Address</Typography>

                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="h6">Social Media Links</Typography>
                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="h6">Subscribe to our newsletter</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className={classes.contactContainer}>
                    <Container>
                        <Grid container={true} justify="center" spacing={5}>
                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="subtitle1">+233270048319</Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="subtitle1">hayfordstanley@gmail.com</Typography>

                            </Grid>

                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="subtitle1">+233555180048</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Footer;
