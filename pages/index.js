import React from 'react';
import Head from 'next/head';
import Landing from '../components/sections/landing';
import Navbar from '../components/navbar';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Christian Caldwell</title>
        <link href="/static/css/styles.css" rel="stylesheet" />
        <link href="/static/css/utility.css" rel="stylesheet" />
        <link href="/static/css/navbar.css" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  )
}
