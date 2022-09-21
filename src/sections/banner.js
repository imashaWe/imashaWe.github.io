import React from 'react';
import {Box, Container, Grid, Button, Input, Heading, Text, Divider} from 'theme-ui';
import Image from 'components/image';
import bannerImg from 'assets/banner-image-1-1.png';
import programmerVector from 'assets/programmer-vactor.png';
import TechnicalSkills from "../components/technical-skills";
import btnShape from "../assets/cta-btn-shape-1.svg";
import {details} from "../utils/data";

const Banner = () => {
    return (
        <Box sx={styles.banner} id="banner">
            <Container sx={styles.container}>
                <Grid sx={styles.grid}>
                    <Box sx={styles.content}>
                        <Heading as="h3">
                            Hey! I’m Imasha
                        </Heading>
                        <Text as="p">
                            Passionate Software Engineering undergraduate with hands-on experience in software
                            development. Keen to learn new technologies and best coding practices. Ability to work in a
                            team environment.
                        </Text>
                        <Button sx={styles.btn} onClick={()=>{window.open(details.cv, '_blank')}}>DOWNLOAD RESUME</Button>

                        <Heading as="h4">Technical Skills:</Heading>
                        <TechnicalSkills/>
                    </Box>
                    <Box sx={styles.image}>
                        <Image src={programmerVector} alt="" style={{width: '100%'}}/>
                    </Box>
                </Grid>

            </Container>
        </Box>
    );
};

export default Banner;

const styles = {
    banner: {
        pt: ['110px', null, null, null, '150px', '200px'],
        pb: ['50px', null, null, null, '60px', null, '0'],
        backgroundColor: '#F6F8FB',
        overflow: 'hidden',
    },
    container: {
        width: [null, null, null, null, null, null, '1390px'],
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
        gridGap: '0',
    },
    content: {
        h3: {
            color: 'black',
            fontWeight: 'bold',
            lineHeight: [1.39],
            letterSpacing: ['-.7px', '-1.5px'],
            mb: ['15px', null, null, null, '20px'],
            width: ['100%'],
            maxWidth: ['100%', null, null, '90%', '100%', '540px'],
            fontSize: [6, null, null, '36px', null, '55px', 9],
        },
        p: {
            fontSize: [1, null, null, 2, null, 3],
            lineHeight: ['26px', null, null, null, 2.33],
            color: 'text_secondary',
            mb: ['20px', null, null, null, null, '30px'],
            width: ['100%'],
            maxWidth: ['100%', null, null, null, null, '410px'],
            br: {
                display: ['none', null, null, null, 'inherit'],
            },
        },
    },
    form: {
        mb: ['30px', null, null, null, null, '60px'],
        display: ['flex'],
        input: {
            borderRadius: ['4px'],
            backgroundColor: '#fff',
            width: ['240px', null, null, null, '315px', null, '375px'],
            height: ['45px', null, null, '55px', null, null, '65px'],
            padding: ['0 15px', null, null, '0 25px'],
            fontSize: [1, null, null, 2],
            border: 'none',
            outline: 'none',
            boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
        },
        button: {
            fontSize: [1, null, null, null, 2, '20px'],
            borderRadius: ['4px'],
            padding: ['0 15px'],
            ml: ['10px'],
            width: ['auto', null, null, null, '180px'],
        },
    },
    image: {
        img: {
            display: 'flex',
            mixBlendMode: 'darken',
            position: 'relative',
            top: ['0', null, null, null, null, '-40px'],
            maxWidth: ['100%', null, null, null, null, null, 'none'],
        },
    },
    partner: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        mb: ['40px'],
        '> div + div': {
            ml: ['10px', null, null, '20px', null, '30px'],
        },
        img: {
            display: 'flex',
        },
        span: {
            fontSize: [1, null, null, null, 2],
            color: '#566272',
            lineHeight: [1],
            opacity: 0.6,
            display: 'block',
            mb: ['20px', null, null, null, '0px'],
            mr: [null, null, null, null, '20px'],
            flex: ['0 0 100%', null, null, null, '0 0 auto'],
        },
    },
    btn: {
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '5px',
        fontSize: [0, 1, null, null, null, null, '17px'],
        fontWeight: '700',
        letterSpacing: '0.1em',
        fontFamily: 'body',
        padding: ['10px 24px', null, null, null, null, '15px 44px'],
        position: 'relative',
        outline: 'none',
        webkitAppearance: 'none',
        border: '2px solid black',
        paddingBottom: '15px',
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            width: '73px',
            height: '26px',
            backgroundImage: `url(${btnShape})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
        },
        '&:after': {
            bottom: 'auto',
            top: 'calc(100% + 10px)',
            transform: 'translateX(-50%) rotate(180deg)',
        },
        '&:hover': {
            backgroundColor: 'black',
            color: '#fff',
        },
    },
};
