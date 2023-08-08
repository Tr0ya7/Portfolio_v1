import '@/styles/pages/globals.css'
import MainContainer from './components/mainContainer'

export default function App({ Component, pageProps }) {
    return (
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    ) 
}