import React from 'react';
import Layout from "./src/containers/Layout";
import "./src/styles/reset.css"

export const onRouteUpdate = ({location, prevLocation}) => {
    console.log("new pathname", location.pathname);
    console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}

export const wrapPageElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>
}