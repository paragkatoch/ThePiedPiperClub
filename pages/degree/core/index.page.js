import Head from "next/head";

import DomainCore from "@/components/DomainCore";
import BasicFrame from "@/components/Layouts/BasicFrame";
import { CoreData, DegreeModules } from "@/utils/appData";

export default function Core() {
	return (
		<BasicFrame>
			<Head>
				<title>Core</title>
				<meta name="description" content={DegreeModules[0].desc} />
			</Head>

			<DomainCore {...CoreData} />
		</BasicFrame>
	);
}
