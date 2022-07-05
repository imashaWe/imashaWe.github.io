import React from 'react';

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
