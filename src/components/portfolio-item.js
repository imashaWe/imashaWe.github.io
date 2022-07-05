import {Box, Container, Divider, Grid, Heading, Text} from "theme-ui";
import DeviceMockup from "./DeviceMockup";
import React from "react";
import {AppStoreButton, PlayStoreButton} from "./buttos";
import App from "next/app";

const PortfolioItem = (props) => {
    let itemStyle = styles.grid1;
    const items = [
        <Box key={1}>
            <DeviceMockup src={props.data.cover}/>
        </Box>,
        <Box key={2}>
            <Heading as='h2'>{props.data.title}</Heading>
            <Divider/>
            <Text as="p">{props.data.description}</Text>
            {
                props.data.links.map((link, i) => {
                    if (link.type == 'playstore')
                        return <PlayStoreButton url={link.url}></PlayStoreButton>
                    if (link.type == 'appstore')
                        return <AppStoreButton url={link.url}></AppStoreButton>
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

const styles = {
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