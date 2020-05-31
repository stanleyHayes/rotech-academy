import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {useMediaQuery} from "@material-ui/core";

import "../../App.css";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";
import {makeStyles} from "@material-ui/styles";

function NavigationBar() {

    const mobileScreen = useMediaQuery('(max-width: 800px)');

    const useStyles = makeStyles({
        backgroundColor: "white"
    });

    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={classes.backgroundColor}
            variant="outlined">
            {
                (mobileScreen) ?
                    (<MobileNavigationHeader/>) :
                    (<DesktopNavigationHeader/>)
            }
        </AppBar>
    )
}

export default NavigationBar;
