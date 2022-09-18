import Head from "next/head";

import BasicFrame from "@/components/Layouts/BasicFrame";
import ModuleFrame from "@/components/Layouts/ModuleFrame";

import { DeveloperModules } from "@/utils/appData";

export default function Developer(props) {
	return (
		<BasicFrame>
			<Head>
				<title>PiedPiper | Developer</title>
				<meta
					name="description"
					content="A comprehensive list of tools for aspiring developers, including roadmaps, channels, public help forums, and opportunities for both beginners and experts as well."
				/>
			</Head>

			<ModuleFrame data={DeveloperModules} />
		</BasicFrame>
	);
}
