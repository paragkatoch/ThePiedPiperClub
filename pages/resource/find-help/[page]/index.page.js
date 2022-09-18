import Head from "next/head";

import DomainCore from "@/components/DomainCore";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export async function getStaticPaths() {
	const paths = DeveloperModules[2].data
		.filter((course) => {
			return course?.link && !course?.link.includes("http");
		})
		.map((course) => ({
			params: { page: course.alt },
		}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const findHelpData = DeveloperModules[2].data.find((course) => {
		return course.alt === params.page;
	});

	return {
		props: {
			findHelpData,
		},
	};
}

export default function FindHelp({ findHelpData }) {
	return (
		<BasicFrame>
			<Head>
				<title>{findHelpData.subHeading}</title>
				<meta name="description" content={findHelpData.description} />
			</Head>

			<DomainCore {...findHelpData} />
		</BasicFrame>
	);
}
