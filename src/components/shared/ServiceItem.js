import React from "react";
import {Card, CardContent, Typography, Divider, CardActions, Button, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function ServiceItem({title, line1, line2, line3, line4, line5, line6, disabled}) {

    const useStyles = makeStyles({
        item: {
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: "Quicksand"
        },
        card: {
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid",
            fontFamily: "Quicksand"
        },
        button: {
            backgroundColor: "black",
            color: "white",
            fontFamily: "Quicksand"
        },title: {
            fontWeight: "bold",
            fontSize: 24,
            fontFamily: "Quicksand"
        },
        divider: {
            backgroundColor: "black"
        }
    });

    const classes = useStyles();

    return (
        <Card variant="outlined" square={true} className={classes.card}>

            <CardHeader
                className={classes.title}
                title={title} />

            <Divider className={classes.divider} variant="fullWidth" />

            <CardContent>

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line1}</Typography>

                <Divider variant="fullWidth" />

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line2}</Typography>

                <Divider variant="fullWidth" />

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line3}</Typography>

                <Divider variant="fullWidth" />

                {line4 ? (
                    <div>
                        <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line4}</Typography>

                        <Divider variant="fullWidth" />
                    </div>
                ) :  null}

                <Typography className={classes.item} gutterBottom={true} variant="subtitle1">{line5}</Typography>

            </CardContent>
            <Divider variant="fullWidth" />

            <CardActions>
                <Button
                    disabled={disabled}
                    className={classes.button}
                    variant="contained"
                    fullWidth={true}>
                    {line6}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ServiceItem;
