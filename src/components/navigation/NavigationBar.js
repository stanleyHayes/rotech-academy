import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {useMediaQuery} from "@material-ui/core";

import "../../App.css";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";

function NavigationBar() {

    const mobileScreen = useMediaQuery('(max-width: 800px)');

    return (
        <AppBar variant="outlined">
            {
                (mobileScreen) ?
                    (<MobileNavigationHeader/>) :
                    (<DesktopNavigationHeader/>)
            }
        </AppBar>
    )
}

export default NavigationBar;
