import React from 'react';
import {Link} from "./link";
import {FaGithub} from 'react-icons/fa'

export const PlayStoreButton = (props) => {
    return (
        <a className="btn btn-google" href={props.url} title="Play Store">Google Play</a>
    );
}

export const AppStoreButton = (props) => {
    return (
        <a className="btn btn-apple" href={props.url} title="App Store">Google Play</a>
    );
}

export const GithubButton = (props) => {
    return (
        <Link
            path={props.url}
            ml={2}

            sx={styles.btn}
            variant="buttons.primary"
        >
            <FaGithub size={25}/>
            <span>Github</span>
        </Link>
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
        span:{
            fontSize: "20px"
        }
    },
}