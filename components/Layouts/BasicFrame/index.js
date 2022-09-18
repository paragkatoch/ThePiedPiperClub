import Footer from "./elements/Footer/Footer";
import Header from "./elements/Header/Header";

export default function BasicFrame(props) {
	const { footer = true, header = true } = props;

	const frameStyle = { minHeight: "100vh", height: "fit-content" };
	const bodyStyle = {
		overflow: "hidden",
		padding: "0 5vw",
		marginTop: "3rem",
		marginBottom: "16rem",
	};

	return (
		<div className="BasicFrame" style={frameStyle}>
			{header ? <Header /> : null}

			<main className="app-main" style={bodyStyle}>
				{props.children}
			</main>

			{footer ? <Footer /> : null}
		</div>
	);
}
