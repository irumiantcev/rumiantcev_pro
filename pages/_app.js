import withYM from 'next-ym';
import Router from 'next/router';
import '../public/css/global.css';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default withYM('88698400', Router)(MyApp);
