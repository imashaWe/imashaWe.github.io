import React from 'react';
import {FaGithub} from 'react-icons/fa'
import OpenLink from "./open-link";
import {Button} from "theme-ui";
import {Constant} from "../config/Constant";

export const PlayStoreButton = (props) => {
    return (
        <a className="btn btn-google" href={props.url} title="Play Store" target="_blank">Google Play</a>
    );
}

export const AppStoreButton = (props) => {
    return (
        <a className="btn btn-apple" href={props.url} title="App Store" target="_blank">Google Play</a>
    );
}

export const GithubButton = (props) => {
    return (
        <Button variant="primary" sx={styles.gitBtn}
                onClick={() => window.open(props.url, '_blank')}>
            <FaGithub size={20}/> <span style={{marginLeft: '5px'}}>Github</span>
        </Button>
    );
}
const styles = {
    btn: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '-0.16px',
        borderRadius: '5px',
        border: '2px solid',
        borderColor: '#24292F',
        color: '#24292F',
        padding: '8px 24px',
        display: ['none', null, null, null, 'inline-block'],
        ml: ['0', null, null, 'auto', '0'],
        mr: ['0', null, null, '20px', '0'],
        '&:hover': {
            color: '#fff',
            backgroundColor: '#24292F',
        },
        svg: {
            mt: 1,
            mr: 2
        },
        span: {
            fontSize: "20px"
        }
    },
    gitBtn: {
        fontSize: '15px',
        fw: '700',
        height: '48px',
        borderRadius: '3px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '0',
        backgroundColor: '#24292F',
        color: '#fff',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#6D6D6D',
        },
    },
}