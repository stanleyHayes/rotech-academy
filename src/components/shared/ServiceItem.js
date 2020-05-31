import React from "react";
import {Card, CardContent, Typography, Divider, CardActions, Button, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import "../../App.css";

function ServiceItem({title, line1, line2, line3, line4, line5, line6, disabled}) {

    const useStyles = makeStyles({
        item: {
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: "Quicksand",
            color: "rgba(255, 255, 255, 0.85)"
        },
        card: {
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.85)",
            borderStyle: "solid",
            fontFamily: "Quicksand",
            minHeight: 480,
            borderRadius: 16,
            backgroundColor: "#212121",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        button: {
            backgroundColor: "#272727",
            color: "rgba(255, 255, 255, 0.85)",
            fontFamily: "Quicksand"
        },
        title: {
            fontWeight: "bold",
            fontSize: 24,
            fontFamily: "Quicksand",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.85)",

        },
        divider: {
            backgroundColor: "rgba(255, 255, 255, 0.85)"
        },
        cardContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flex: 1
        },
        link: {
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            width: "70%",
            display: "inline-block",
            margin: "0 auto"
        }
    });

    const classes = useStyles();

    return (
        <Card variant="outlined" square={true} className={classes.card}>

            <CardHeader
                className={classes.title}
                title={title}/>

            <Divider className={classes.divider} variant="fullWidth"/>

            <CardContent className={classes.cardContent}>

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line1}</Typography>

                <Divider variant="fullWidth"/>

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line2}</Typography>

                <Divider variant="fullWidth"/>

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line3}</Typography>

                <Divider variant="fullWidth"/>

                {line4 ? (
                    <div>
                        <Typography className={classes.item} gutterBottom={true}
                                    variant="subtitle1">{line4}</Typography>
                        <Divider variant="fullWidth"/>
                    </div>
                ) : <div />}

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line5}</Typography>

            </CardContent>
            <Divider className={classes.divider} variant="fullWidth"/>

            <CardActions>
                <a className={classes.link} target="_blank" href={`https://forms.gle/Kpkvn7qzAwLhUvwR7`}>
                    <Button
                        disabled={disabled}
                        className={classes.button}
                        variant="contained"
                        fullWidth={true}>
                        {line6}
                    </Button>
                </a>
            </CardActions>
        </Card>
    )
}

export default ServiceItem;
