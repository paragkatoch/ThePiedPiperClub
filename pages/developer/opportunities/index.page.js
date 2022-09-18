import Head from "next/head";

import DomainCore from "@/components/DomainCore";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function Domain() {
	const data = DeveloperModules[1];

	return (
		<BasicFrame>
			<Head>
				<title>Opportunities</title>
				<meta name="description" content={data.desc} />
			</Head>

			<DomainCore {...data} />
		</BasicFrame>
	);
}
