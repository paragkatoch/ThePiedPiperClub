import Head from "next/head";

import BasicFrame from "@/components/Layouts/BasicFrame";
import ModuleFrame from "@/components/Layouts/ModuleFrame";

import { DegreeModules } from "@/utils/appData";

export default function Degree(props) {
	return (
		<BasicFrame>
			<Head>
				<title>PiedPiper | Degree</title>
				<meta
					name="description"
					content="This portion of the The PiedPiper Club contains in-depth information about the core subjects of your college degree and some perks of being a student."
				/>
			</Head>

			<ModuleFrame data={DegreeModules} />
		</BasicFrame>
	);
}
