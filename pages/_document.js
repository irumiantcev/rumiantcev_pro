import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            <Head>
                <meta name="keywords" content="frontend, developer, igor rumiantcev" />
                <meta name="description" content="Igor Rumiantcev - Frontend Developer" />
            </Head>
            <body className="bg-gray-50 dark:bg-gray-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
