import Layout from '../components/layout';
import Head from 'next/head';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact Page" />
			</Head>
			<Layout>
				<h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-8">Contact</h1>
			</Layout>
		</>
	);
}
