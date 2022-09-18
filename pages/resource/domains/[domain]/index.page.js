import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DomainData } from "@/utils/appData";

export async function getStaticPaths() {
	const paths = DomainData.courses
		.filter((course) => {
			return !course?.disabled;
		})
		.map((course) => ({
			params: { domain: course.alt },
		}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const domainData = DomainData.courses.find((course) => {
		return course.alt === params.domain;
	});

	return {
		props: {
			domainData,
		},
	};
}

export default function Domain({ domainData }) {
	return (
		<BasicFrame>
			<Head>
				<title>{domainData.title}</title>
				<meta name="description" content={domainData.data[0].description} />
			</Head>

			<DetailedPage {...domainData} />
		</BasicFrame>
	);
}
