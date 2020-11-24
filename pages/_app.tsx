import React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "next/router";
import LinearProgress from "@material-ui/core/LinearProgress";
import { wrapper, SagaStore } from "../lib/store";
import { END } from "redux-saga";

interface IState {
  loaded: boolean;
}

class MyApp extends App<{}, {}, IState> {
constructor(props) {
  super(props);
  this.state = {
    loaded: false,
  };
}

public static getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = {
    ...(Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}),
  };
  if (ctx.req) {
    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask.toPromise();
  }
  return {
    pageProps,
  };
};

componentDidMount() {
  const jssStyles = document.querySelector("#jss-server-side");
  if (jssStyles) {
    jssStyles.parentElement.removeChild(jssStyles);
  }

  this.setState({ loaded: true });
  Router.events.on("routeChangeStart", () =>
    this.setState({ loaded: false })
  );
  Router.events.on("routeChangeComplete", () =>
    this.setState({ loaded: true })
  );
}

render() {
  const { Component, pageProps } = this.props;

  return (
    <React.Fragment>
      <Head>
        <title>MyRealms</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
        <style dangerouslySetInnerHTML={{
          __html: `body, html {
            font-family: 'Roboto', sans-serif;
          }`
        }}/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {this.state.loaded ? (
          <Component {...pageProps} />
        ) : (
          <LinearProgress />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}
}

export default wrapper.withRedux(MyApp);

