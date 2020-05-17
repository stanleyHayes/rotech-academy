import React from "react";
import Layout from "../../components/layout/Layout";
import {
    Container,
    Typography,
    Grid,
    Table,
    TableBody,
    Button,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    Paper, useMediaQuery
} from "@material-ui/core";
import TeamMember from "../../components/shared/TeamMember";
import {makeStyles} from "@material-ui/styles";
import ServiceItem from "../../components/shared/ServiceItem";

function HomePage() {

    const smallScreen = useMediaQuery('(max-width: 900px)');

    const useStyles = makeStyles({
        header: {
            marginTop: 16,
            marginBottom: 16,
            paddingTop: 16,
            paddingBottom: 16
        },
        service: {
            fontSize: 20,
            lineHeight: 1.5,
            letterSpacing: 1.5,
            marginTop: 16,
            marginBottom: 16
        },
        title: {
            color: "rgba(255, 255, 255, 0.8)",
        },
        serviceHeader: {
            fontWeight: "bold",
            fontSize: 24
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div>
                <div className="section">
                    <div>
                        <img width="100%" src={`${process.env.PUBLIC_URL}/images/Rotech-logo.jpg`} alt="Rotech logo"/>
                    </div>
                </div>

                <div id="mission-and-vision" className="section light-background">
                    <Container>
                        <Typography className={classes.header} variant="h3">ABOUT US</Typography>
                        <Typography className={classes.header} variant="h4">mission and vision</Typography>
                        <Typography variant="body1" className={classes.service}>
                            Robotics and Technology Academy (ROTECH) seeks to equip
                            young Africans with the necessary Science Technology Engineering and Mathematics (STEM)
                            skills and tools. By instilling collaboration, problem solving and design thinking, we are
                            on a mission to build upon the talent and knowledge of these young individuals.
                        </Typography>

                        <Typography className={classes.header} variant="h4">what we do</Typography>

                        <Typography className={classes.service} gutterBottom={true} variant="body1">
                            We are a team of able robotics enthusiasts with over five years of experience in building
                            robots and programming for various competitions and coaching national and international
                            robotics teams.
                        </Typography>

                        <Typography className={classes.service} gutterBottom={true} variant="body1">
                            We provide services in the form of providing certified online robotics training, training
                            teams for national and international robotics competitions and equipping young individuals
                            with tools to develop commercial problem solving robots for industry.”
                        </Typography>
                    </Container>
                </div>

                <div id="our-team" className="section dark-background">
                    <Container>
                        <Typography className={classes.header} variant="h3">OUR TEAM</Typography>
                        <Grid container={true} justify="center" spacing={3}>
                            <Grid xs={12} md={4} item={true}>
                                <TeamMember
                                    name={"Benedict Amoako"}
                                    image={`${process.env.PUBLIC_URL}/logo512.png`}
                                    major={"Information Technology major"}
                                    position={"Founder / Lead Instructor"}
                                    school={"Academic City College"}
                                />
                            </Grid>

                            <Grid xs={12} md={4} item={true}>
                                <TeamMember
                                    name={"Dillys Annan"}
                                    image={`${process.env.PUBLIC_URL}/logo512.png`}
                                    major={"Computer Engineering major"}
                                    position={"Programs Coordinator"}
                                    school={"KNUST"}
                                />
                            </Grid>

                            <Grid xs={12} md={4} item={true}>
                                <TeamMember
                                    name={"Enam"}
                                    image={`${process.env.PUBLIC_URL}/logo512.png`}
                                    major={"Computer Science"}
                                    position={"Content/Marketing Manager"}
                                    school={"KNUST"}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </div>


                <div id="services" className="section light-background">
                    <Container>
                        <Typography className={classes.header} variant="h3">OUR SERVICES</Typography>

                        {
                            (smallScreen) ? (
                                <Grid container={true} justify="center" spacing={3}>
                                    <Grid item={true} xs={12} md={4}>
                                        <ServiceItem
                                            disabled={true}
                                            title={"Competition Training"}
                                            line1={" 2-Month Intensive Training"}
                                            line2={" Competition of Your Choice"}
                                            line3={"Certificate of Completion"}
                                            line4={"Certificate of Achievement"}
                                            line5={"Participate in a Competition!"}
                                            line6={"Coming Soon"}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={12} md={4}>
                                        <ServiceItem
                                            disabled={false}
                                            title={"Online Robotics Course"}
                                            line1={"2-Month Class"}
                                            line2={"Free Robot Kit"}
                                            line3={"Certificate of Achievement"}
                                            line4={"STEM Curriculum"}
                                            line6={"STEM Curriculum"}
                                            line5={"Ghc 500 Register Today!"}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={12} md={4}>
                                        <ServiceItem
                                            disabled={true}
                                            title={"Research and Development"}
                                            line1={"Be on a Product Development Team"}
                                            line2={"All Equipment provided"}
                                            line3={"Apply Problem Solving Skills"}
                                            line6={"Coming Soon"}
                                            line4={" Contract Based Employment"}
                                            line5={"Develop a Commercial Robot!"}
                                        />
                                    </Grid>
                                </Grid>
                            ) : (
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className={classes.serviceHeader}>
                                                    Competition Training
                                                </TableCell>
                                                <TableCell className={classes.serviceHeader}>
                                                    Online Robotics Course
                                                </TableCell>
                                                <TableCell className={classes.serviceHeader}>
                                                    Research and Development
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    2-Month Intensive Training
                                                </TableCell>
                                                <TableCell>
                                                    2-Month Class
                                                </TableCell>
                                                <TableCell>
                                                    Be on a Product Development Team
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    Competition of Your Choice
                                                </TableCell>
                                                <TableCell>
                                                    Free Robot Kit
                                                </TableCell>
                                                <TableCell>
                                                    All Equipment provided
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    Certificate of Completion
                                                </TableCell>
                                                <TableCell>
                                                    Certificate of Achievement
                                                </TableCell>
                                                <TableCell>
                                                    Apply Problem Solving Skills
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    Certificate of Achievement
                                                </TableCell>
                                                <TableCell>
                                                    STEM Curriculum
                                                </TableCell>
                                                <TableCell>
                                                    Contract Based Employment
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    Participate in a Competition!
                                                </TableCell>
                                                <TableCell>
                                                    Program a Real Robot!
                                                </TableCell>
                                                <TableCell>
                                                    Develop a Commercial Robot!
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <Button
                                                        color="primary"
                                                        disabled={true}
                                                        variant="outlined">
                                                        Coming Soon
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        color="primary"
                                                        variant="outlined">
                                                        GHS 500. 00 Register Today
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        color="primary"
                                                        disabled={true}
                                                        variant="outlined">
                                                        Coming Soon
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )
                        }
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage;
