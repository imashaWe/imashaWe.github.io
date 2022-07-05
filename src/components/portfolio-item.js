import {Box, Container, Divider, Grid, Heading, Text} from "theme-ui";
import DeviceMockup from "./DeviceMockup";
import React from "react";

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
            <a href="#"
               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Learn
                more </a>
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