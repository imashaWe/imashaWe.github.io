import React, {useState} from 'react';
import {Box, Container} from 'theme-ui';
import BlockTitle from 'components/block-title';
import {portfolio} from 'utils/data';
import PortfolioItem from "../components/portfolio-item";
import {GithubButton} from "../components/buttos";

const Portfolio = () => {

    return (
        <Box as="section" id="portfolio" sx={styles.portfolio}>
            <Container>
                <BlockTitle
                    slogan="Portfolio"
                    title="Why customers love us"
                    styles={styles.blockTitle}
                />

                {portfolio.map((item, i) =>
                    <PortfolioItem data={item} left={i % 2 == 1} key={i}/>
                )}

            </Container>
        </Box>
    );
};

export default Portfolio;

const styles = {
    portfolio: {
        pt: ['65px', null, null, null, null, '80px', '170px'],
        '.blockTitle': {
            textAlign: 'center',
            marginBottom: ['25px', null, null, null, null, '50px'],
        },
        p: {
            fontSize: [1, null, null, 2, null, 3],
            lineHeight: ['26px', null, null, null, 2.33],
            color: 'text_secondary',
            mb: ['20px', null, null, null, null, '30px'],
            width: ['100%'],
            br: {
                display: ['none', null, null, null, 'inherit'],
            },
        },
    },
};
