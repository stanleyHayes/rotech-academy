import React from "react";
import {Container, Grid, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import "../../App.css";

function DrawerContent() {

    const useStyles = makeStyles({
        container: {
            marginTop: "16px"
        },
        contact: {
            color: "#333",
            fontWeight: "bold",
            fontFamily: "Quicksand"
        },
        home: {
            color: "#333",
            fontWeight: "bold",
            fontFamily: "Quicksand"
        },
        icon: {
            color: "#333"
        },

        button: {
            textAlign: "center",
            fontFamily: "Quicksand"
        },
        link: {
            color: "#777777",
            textDecoration: "none"
        },
        avatar: {
            width: 150,
            height: 150,
            border: "1px solid #888888"
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            marginBottom: 32
        },
        gridContainer: {
            paddingTop: 32,
            paddingBottom: 32
        },
        root: {
            backgroundColor: "#f8f8f8",
            minHeight: "100vh"
        },
        content: {
            paddingLeft: 32,
            paddingRight: 32
        }
    });


    const classes = useStyles();

    return (
        <Container>
            <Grid
                container={true}
                direction="column"
                alignItems="center"
                justify="flex-start"
                spacing={4}
                className={classes.container}>

                <Grid item={true}>
                    <div className={classes.content}>
                        <p>
                            <Link to="/"
                                  className={`${classes.button}  ${classes.link} center-align font-weight-bold uppercase margin-vertical-small`}>
                                Home
                            </Link>
                        </p>
                        <Divider variant="fullWidth" />
                        <p>
                            <Link to="/contact"
                                  className={`${classes.button}  ${classes.link} center-align font-weight-bold uppercase margin-vertical-small`}>
                                Contact
                            </Link>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;
