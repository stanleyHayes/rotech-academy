import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../navigation/Footer";
import {makeStyles} from "@material-ui/styles";

function Layout(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        },
        content: {
            flexGrow: 1
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <NavigationBar/>
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;
