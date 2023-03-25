import Layout from '../components/layout.js';
import Image from 'next/image';

export default function Custom404() {
	return (
		<Layout>
			<h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-8">404 - Page Not Found</h1>
			<Image href="/" src="/404_picture.png" alt="404" width={300} height={300} className="mx-auto rounded-2xl"/>
		</Layout>
	);
}
