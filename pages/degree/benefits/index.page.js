import Head from "next/head";
import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DegreeModules } from "@/utils/appData";

export default function Apps() {
	const data = DegreeModules[3];

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
