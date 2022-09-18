import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules, MiscModules } from "@/utils/appData";

export default function FindHelp(props) {
	const data = MiscModules[2];
	return (
		<BasicFrame>
			<Head>
				<title>{data.title}</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
