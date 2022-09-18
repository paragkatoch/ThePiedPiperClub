import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

import { APP, NAV_DATA } from "@/utils/appData";
import { useClassName, useWindowSize } from "@/utils/customHooks";

export default function Header() {
	const [sideBarView, setSideBarView] = useState(false);
	const screenSize = useWindowSize();
	const [buttonStyle, setButtonStyle] = useClassName({
		hamBurger: styles.hamBurger,
	});
	const [sideBarStyle, setSideBarStyle] = useClassName({
		sideBar: styles.sideBar,
	});

	useEffect(() => {
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	useEffect(() => {
		if (screenSize.width <= 848 && !sideBarView) setSideBarView(true);
		else if (sideBarView && screenSize.width > 848) {
			setSideBarView(false);
			setSideBarStyle("remove", "sideBarOpen");
			setButtonStyle("remove", "hamBurgerOpen");

			document.body.style.overflow = "unset";
		}
	}, [
		screenSize,
		setButtonStyle,
		setSideBarStyle,
		sideBarView,
		setSideBarView,
	]);

	const handleHamburgerClick = () => {
		setButtonStyle("toggle", "hamBurgerOpen", styles.hamBurger_open);
		setSideBarStyle("toggle", "sideBarOpen", styles.sideBar_open);

		// handle scroll when sidebar is open
		const bodyOverflow =
			document.body.style.overflow === "hidden" ? "unset" : "hidden";

		document.body.style.overflow = bodyOverflow;
	};

	return (
		<header className={styles.app_header}>
			<main className={styles.header_container}>
				{sideBarView && (
					<button className={buttonStyle} onClick={handleHamburgerClick}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				)}

				<section className={styles.logo_container}>
					<Link href="/">
						<a>
							<Image
								width="43"
								src="/assets/AppIcon.svg"
								height="38.57"
								alt="app icon"
								priority="true"
							/>
							<h3>{APP.NAME}</h3>
						</a>
					</Link>
				</section>

				{sideBarView && <div className={styles.balancer}></div>}

				{sideBarView ? <SideBar sideBarStyle={sideBarStyle} /> : <NavBar />}
			</main>
		</header>
	);
}

function NavBar() {
	const current = useRouter().pathname;

	const links = NAV_DATA.map((element, index) => (
		<li key={index} id={element.link === current ? styles.active : null}>
			<Link href={element.link}>
				<a>{element.title}</a>
			</Link>
		</li>
	));

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar_container}>{links}</ul>
		</nav>
	);
}

function SideBar({ sideBarStyle }) {
	const current = useRouter().pathname;

	const links = NAV_DATA.map((element, index) => (
		<li key={index} id={element.link === current ? "active" : null}>
			<Link href={element.link}>
				<a>
					{element.title}
					<hr className="link_underline" />
				</a>
			</Link>
		</li>
	));

	return (
		<aside className={sideBarStyle}>
			<ul className={styles.sideBar_container}>{links}</ul>
		</aside>
	);
}
