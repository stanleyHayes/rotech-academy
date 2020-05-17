import React from "react";
import {Card, CardContent, Avatar, Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function TeamMember({name, position, major, school, image}) {

    const useStyles = makeStyles({
        avatar: {
            width: 75,
            height: 75
        },
        avatarContainer: {
            paddingTop: 16,
            paddingBottom: 16,
        },
        story: {
            fontFamily: "Quicksand"
        },
        major: {
            fontFamily: "Quicksand"
        },
        school: {
            fontFamily: "Quicksand"
        },
        position: {
            color: "#777777",
            fontFamily: "Quicksand"
        },
        name: {
            fontFamily: "Quicksand"
        },
        card: {
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid"
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Grid
                    className={classes.avatarContainer}
                    container={true}
                    justify="center"
                    alignItems="center">
                    <Grid item={true}>
                        <Avatar variant={"circle"} className={classes.avatar} src={image}/>
                    </Grid>
                </Grid>
                <Typography className={classes.name} gutterBottom={true} variant="h4" align="center">{name}</Typography>
                <Typography align="center" gutterBottom={true} className={classes.position}
                            variant="subtitle2">{position}</Typography>
                <Typography align="center" gutterBottom={true} className={classes.major}
                            variant="subtitle1">{major}</Typography>
                <Typography align="center" gutterBottom={true} className={classes.school}
                            variant="subtitle1">{school}</Typography>
            </CardContent>
        </Card>
    )
}

export default TeamMember;
