import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { CoreData } from "@/utils/appData";

export async function getStaticPaths() {
	const paths = CoreData.courses
		.filter((course) => {
			return !course?.disabled;
		})
		.map((course) => ({
			params: { core: course.alt },
		}));

	console.log(paths);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const coreData = CoreData.courses.find((course) => {
		return course.alt === params.core;
	});

	return {
		props: {
			coreData,
		},
	};
}

export default function Core({ coreData }) {
	return (
		<BasicFrame>
			<Head>
				<title>{coreData.title}</title>
				<meta name="description" content={coreData.data[0].description} />
			</Head>

			<DetailedPage {...coreData} />
		</BasicFrame>
	);
}
