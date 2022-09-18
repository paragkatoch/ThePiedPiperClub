import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { MiscModules } from "@/utils/appData";

export default function Apps() {
	const data = MiscModules[3];

	return (
		<BasicFrame>
			<Head>
				<title>Must have Apps</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
