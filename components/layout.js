import Header from './header.js';
import Footer from './footer.js';

export default function Layout({ children }) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
				<div className="flex-grow">
					{children}
				</div>
			<Footer />
		</div>
	);
}
