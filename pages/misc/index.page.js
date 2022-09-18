import Head from "next/head";

import BasicFrame from "@/components/Layouts/BasicFrame";
import ModuleFrame from "@/components/Layouts/ModuleFrame";

import { MiscModules } from "@/utils/appData";

export default function Misc(props) {
	return (
		<BasicFrame>
			<Head>
				<title>PiedPiper | Miscellaneous</title>
				<meta
					name="description"
					content="From excellent networking prospects, effective communication skills to managing personal finances, this section has everything on self-growth."
				/>
			</Head>

			<ModuleFrame data={MiscModules} />
		</BasicFrame>
	);
}
