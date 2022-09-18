import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function Dos_Donts() {
	const data = DeveloperModules[3];

	return (
		<BasicFrame>
			<Head>
				<title>Do&apos;s & Dont&apos;s</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
