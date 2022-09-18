import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function FindHelp(props) {
	const data = DeveloperModules[2];
	return (
		<BasicFrame>
			<Head>
				<title>Find Help</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
