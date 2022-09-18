import Head from "next/head";

import DomainCore from "@/components/DomainCore";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules, DomainData } from "@/utils/appData";

export default function Domain() {
	const data = DeveloperModules[0];

	return (
		<BasicFrame>
			<Head>
				<title>Domain</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DomainCore {...DomainData} />
		</BasicFrame>
	);
}
