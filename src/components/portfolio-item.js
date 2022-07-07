import {Box, Container, Divider, Grid, Heading, Text} from "theme-ui";
import DeviceMockup from "./device-mockup";
import React from "react";
import {AppStoreButton, GithubButton, PlayStoreButton} from "./buttos";

const PortfolioItem = (props) => {
    let styles = props.data.type == 'mobile' ? mobileStyles : webStyles;
    let itemStyle = styles.grid1;
    const items = [
        <Box key={1}>
            <DeviceMockup images={props.data.images} device={props.data.device}/>
        </Box>,
        <Box key={2}>
            <Heading as='h2'>{props.data.title}</Heading>
            <Divider/>
            <Text as="p">{props.data.description}</Text>
            {
                props.data.links.map((link, i) => {
                    if (link.type == 'playstore')
                        return <PlayStoreButton url={link.url} key={i}></PlayStoreButton>
                    if (link.type == 'appstore')
                        return <AppStoreButton url={link.url} key={i}></AppStoreButton>
                    if (link.type == 'github')
                        return <GithubButton url={link.url} key={i}/>
                })
            }
        </Box>
    ];

    if (props.left) {
        items.reverse();
        itemStyle = styles.grid2;
    }

    return (
        <Container>
            <Grid sx={itemStyle}>
                {
                    items.map((e) => e)
                }
            </Grid>
            <br/>
        </Container>
    );
}

export default PortfolioItem;

const mobileStyles = {
    grid1: {
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '1fr 2fr',
            null,
            '1fr 2fr',
        ],
    },
    grid2: {
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '2fr 1fr',
            null,
            '2fr 1fr',
        ],
    },
}

const webStyles = {
    grid1: {
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '1fr 1fr',
            null,
            '1fr 1fr',
        ],
    },
    grid2: {
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '1fr 1fr',
            null,
            '1fr 1fr',
        ],
    },
}