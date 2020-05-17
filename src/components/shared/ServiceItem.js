import React from "react";
import {Card, CardContent, Typography, Divider, CardActions, Button} from "@material-ui/core";

function ServiceItem({title, line1, line2, line3, line4, line5, line6, disabled}) {

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom={true} variant="h6">{title}</Typography>

                <Divider variant="fullWidth" />

                <Typography gutterBottom={true} variant="subtitle1">{line1}</Typography>

                <Divider variant="fullWidth" />

                <Typography gutterBottom={true} variant="subtitle1">{line2}</Typography>

                <Divider variant="fullWidth" />

                <Typography gutterBottom={true} variant="subtitle1">{line3}</Typography>

                <Divider variant="fullWidth" />

                <Typography gutterBottom={true} variant="subtitle1">{line4}</Typography>

                <Divider variant="fullWidth" />

                <Typography gutterBottom={true} variant="subtitle1">{line5}</Typography>

            </CardContent>
            <Divider variant="fullWidth" />

            <CardActions>
                <Button color="primary" variant="outlined" fullWidth={true} disabled={disabled}>{line6}</Button>
            </CardActions>
        </Card>
    )
}

export default ServiceItem;
