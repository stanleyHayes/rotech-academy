import React from "react";
import {Container, Grid, ListItemAvatar, ListItem, ListItemText, List} from "@material-ui/core";
import {
    Home,
    Email,
} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


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
        link: {
            textDecoration: "none"
        },
        icon: {
            color: "#333"
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
                    <List>
                        <ListItem divider={true} button={true} id="home">
                            <ListItemAvatar>
                                <Home className={classes.home}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/">
                                <ListItemText className={classes.home} primary="Home"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true} id="list">
                            <ListItemAvatar>
                                <Email className={classes.contact}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/contact">
                                <ListItemText  className={classes.home} primary="Contact"/>
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;
