import Navbar from '../components/Navbar';

// this piece will go on all pages
// before Component will appear at the top
// after Component will appear at the bottom
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <p>Footer</p>
        </>
    )
}