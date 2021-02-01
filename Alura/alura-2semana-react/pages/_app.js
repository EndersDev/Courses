import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

const GlobalStyle = createGlobalStyle` * {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  /* Deixa branco no começo*/
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;

//SHIMMER
/*animation 2
.shine {
    background: linear-gradient(
      to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%
    );
    background-size: 1000px 100%;

    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }
  .conatiner{animation: fullView 0.5s forwards cubic-bezier(0.250, 0.460, 0.450, 0.940);
}}
@keyframes fullView {
  100% {
    width: 100%;
  }
}
  @keyframes placeholderShimmer {
    0% {
      background-position: -1000px 0;
    }

    100% {
      background-position: 1000px 0;
    }
  }

}*/

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }

}
`
const { theme } = db

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
