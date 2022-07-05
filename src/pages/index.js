import React from 'react';
import {ThemeProvider} from 'theme-ui';
import {StickyProvider} from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Portfolio from 'sections/portfolio';
import Blog from 'sections/blog';
import CallToAction from 'sections/call-to-action';
import MediumApiService from "../services/mediumApiService";


export default function IndexPage(data) {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 006"/>
                    <Banner/>
                    <Services/>
                    <Portfolio/>
                    <Blog posts={data.posts}/>
                    <CallToAction/>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

IndexPage.getInitialProps = async (ctx) => {
    const res = await MediumApiService.getMediumArticles;
    return {
        posts: res.items
    };
}