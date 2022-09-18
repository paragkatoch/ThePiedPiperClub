import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>The PiedPiper Club</title>

				<meta charSet="utf-8" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
				<meta
					name="description"
					content="The champions of mindset will be rewarded with glory. We have the best practices, tested, and proven handbooks spanning over multiple domains with elaborated roadmaps, resources, and workflows to minimize time spent on research without spending a dime."
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
					key="content-type"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
					key="viewport"
				/>

				<meta
					property="og:image"
					content={`${process.env.PUBLIC_URL}/logo192.png`}
					key="image"
				/>

				<link rel="manifest" href="/manifest.json" />
				<link
					rel="icon"
					href={`${process.env.PUBLIC_URL}/favicon.ico`}
					type="image/x-icon"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.PUBLIC_URL}/logo192.png`}
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
