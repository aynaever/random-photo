import Header from './header.js';
import Footer from './footer.js';

export default function Layout({ children }) {
	return (
		<>
			<Header />
				<div className="">
					{children}
				</div>
			<Footer />
		</>
	);
}
