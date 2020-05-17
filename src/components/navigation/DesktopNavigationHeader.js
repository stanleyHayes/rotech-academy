import React from "react";
import {Toolbar, Grid, Button, Typography, Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

function DesktopNavigationHeader(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            flex: 1
        },
        title: {
            color: "orange",
            fontWeight: "bold",
            fontSize: 24
        },
        navLinks: {
            flexGrow: 1
        },
        titleContainer: {},
        checkIcon: {
            color: "green",
            marginRight: 16
        },
        brandContainer: {
            display: "flex",
            alignItems: "center",
            paddingRight: 16
        }
    });

    const classes = useStyles();

    return (
        <Toolbar title="Heal the world" variant="regular">
            <div className={classes.container}>
                <div className={classes.brandContainer}>
                    <Typography className={classes.title} variant="h4">Rotech</Typography>
                </div>
                <div>
                    <Grid item={true} container={true} direction="row" justify="center">
                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/">Home</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <a style={{textDecoration: "none"}} href="#about">About Us</a>
                            </Button>
                        </Grid>


                        <Grid item={true}>
                            <Button variant="text">
                                <a style={{textDecoration: "none"}} href="#our-team">Our Team</a>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <a style={{textDecoration: "none"}} href="#mission-and-vision">Mission</a>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <a style={{textDecoration: "none"}} href="#services">Services</a>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/contact">Contact</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </Toolbar>
    )
}

export default DesktopNavigationHeader;
