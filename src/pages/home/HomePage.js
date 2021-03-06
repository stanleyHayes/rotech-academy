import React from "react";
import Layout from "../../components/layout/Layout";
import {
    Container,
    Typography,
    Grid
} from "@material-ui/core";
import TeamMember from "../../components/shared/TeamMember";
import {makeStyles} from "@material-ui/styles";
import ServiceItem from "../../components/shared/ServiceItem";
import ScrollAnimation from "react-animate-on-scroll";

function HomePage() {


    const useStyles = makeStyles({
        header: {
            marginTop: 16,
            marginBottom: 16,
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: "Quicksand",
            textTransform: "uppercase"
        },
        service: {
            fontSize: 20,
            lineHeight: 1.5,
            letterSpacing: 1.5,
            marginTop: 16,
            marginBottom: 16,
            fontFamily: "Quicksand"
        },
        title: {
            color: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Quicksand"
        },
        serviceHeader: {
            fontWeight: "bold",
            fontSize: 24,
            fontFamily: "Quicksand"
        },
        teamTitle: {
            color: "#a5acaf",
            fontWeight: "bold",
            marginTop: 16,
            marginBottom: 16,
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: "Quicksand"
        },
        ourServicesTitle: {
            color: "orange",
            fontFamily: "Quicksand",
            marginTop: 16,
            marginBottom: 16,
            paddingTop: 16,
            paddingBottom: 16,
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div>
                <div className="image-container">
                    <div className="responsive-height">
                        <img className="responsive-image" src={`${process.env.PUBLIC_URL}/images/Rotech-logo.jpg`} alt="Rotech logo"/>
                    </div>
                </div>

                <div id="about" className="section orange-background">
                    <Container>
                        <Typography align="center" className={classes.header} variant="h3">ABOUT US</Typography>

                        <Typography align="center" className={classes.header} variant="h4">
                            MISSION AND VISION
                        </Typography>
                        <ScrollAnimation animateOnce={true} animateIn="bounceInLeft" duration={1}>
                            <Typography variant="body1" className={classes.service}>
                                Robotics and Technology Academy (ROTECH) seeks to equip
                                young Africans with the necessary Science Technology Engineering and Mathematics (STEM)
                                skills and tools. By instilling collaboration, problem solving and design thinking, we
                                are
                                on a mission to build upon the talent and knowledge of these young individuals.
                            </Typography>
                        </ScrollAnimation>

                        <Typography align="center" className={classes.header} variant="h4">what we do</Typography>

                        <ScrollAnimation animateOnce={true} animateIn="bounceInRight" duration={1}>
                            <Typography className={classes.service} gutterBottom={true} variant="body1">
                                We are a team of able robotics enthusiasts with over five years of experience in
                                building
                                robots and programming for various competitions and coaching national and international
                                robotics teams.
                            </Typography>

                            <Typography className={classes.service} gutterBottom={true} variant="body1">
                                Our services include: certified online robotics courses, training teams for national and
                                international robotics competitions, as well as equipping young individuals with tools
                                to
                                develop commercial problem solving robots for industry.
                            </Typography>
                        </ScrollAnimation>

                        <Typography align="center" className={classes.header} variant="h4">OUR TEAM</Typography>

                        <Grid container={true} justify="center" spacing={3}>
                            <Grid xs={12} md={4} item={true}>
                                <ScrollAnimation animateOnce={true} animateIn="bounceInLeft" duration={1}>
                                    <TeamMember
                                        name={"Benedict Amoako"}
                                        image={`${process.env.PUBLIC_URL}/images/benedict.jpg`}
                                        major={"Information Technology Major"}
                                        position={"Founder / Lead Instructor"}
                                        school={"Academic City College"}
                                    />
                                </ScrollAnimation>
                            </Grid>

                            <Grid xs={12} md={4} item={true}>
                                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1}>
                                    <TeamMember
                                        name={"Dillys Annan"}
                                        image={`${process.env.PUBLIC_URL}/images/crop.jpg`}
                                        major={"Computer Engineering Major"}
                                        position={"Programs Coordinator"}
                                        school={"KNUST"}
                                    />
                                </ScrollAnimation>
                            </Grid>

                            <Grid xs={12} md={4} item={true}>
                                <ScrollAnimation animateOnce={true} animateIn="bounceInRight" duration={1}>
                                    <TeamMember
                                        name={"Enam Dartey"}
                                        image={`${process.env.PUBLIC_URL}/images/photo_2020-05-18_20-26-32.jpg`}
                                        major={""}
                                        position={"Marketing Manager"}
                                        school={""}
                                    />
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div id="services" className="section black-background">
                    <Container>
                        <Typography
                            align="center"
                            className={classes.ourServicesTitle}
                            variant="h3">
                            OUR SERVICES
                        </Typography>

                        <Grid container={true} justify="center" spacing={3}>
                            <Grid item={true} xs={12} md={4}>
                                <ScrollAnimation animateOnce={true} animateIn="bounceInLeft" duration={1}>
                                    <ServiceItem
                                        disabled={true}
                                        title={"Competition Training"}
                                        line1={"Intensive Training"}
                                        line2={" Competition of Your Choice"}
                                        line3={"Certificate of Completion"}
                                        line5={"Participate in a Competition!"}
                                        line6={"Coming Soon"}
                                    />
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1}>
                                    <ServiceItem
                                        disabled={false}
                                        title={"Online Robotics Course"}
                                        line1={"8-Week Courses"}
                                        line2={"Free Robot Kit"}
                                        line3={"Certificate of Completion"}
                                        line5={"Program a Real Robot!!!"}
                                        line4={"STEM Curriculum"}
                                        line6={"Ghc 800 Register Here!"}
                                    />
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <ScrollAnimation animateOnce={true} animateIn="bounceInRight" duration={1}>
                                    <ServiceItem
                                        disabled={true}
                                        title={"Research and Development"}
                                        line1={"Be on a Product Development Team"}
                                        line2={"All Equipment Provided"}
                                        line3={"Apply Problem Solving Skills"}
                                        line6={"Coming Soon"}
                                        line4={" Contract Based Employment"}
                                        line5={"Develop a Commercial Robot!"}
                                    />
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage;
