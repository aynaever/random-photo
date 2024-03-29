import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout.js';

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="About Random Picture Generator" />
			</Head>
			<Layout>
			<main>

				<h1 className="mx-auto my-10 text-4xl md:text-5xl font-bold text-center">About</h1>
				<Image className="mx-auto w-5/6 sm:w-1/2 lg:w-1/4 mb-10 rounded-lg" href="/" src="/zang_car.png" alt="a zang car" width={400} height={400}/>

				<section className="w-11/12 lg:w-9/12 xl:w-7/12 mx-auto">
					<p className="mb-8">Welcome to Random Picture Generator! We are a team of creative and passionate individuals who are dedicated to providing you with the best possible experience. Our app generates random pictures from Unsplash API that can be used for a variety of purposes, including web design, social media, marketing campaigns, and more.</p>

					<p className="mb-8">Our app saves you time and effort by providing you with high-quality, royalty-free images that you can use instantly without having to worry about licensing or attribution. We understand the importance of having access to visually appealing content, and we strive to make that process as simple and effortless as possible.</p>

					<p className="mb-8">At our core, we believe that innovation and evolution are crucial to the success of any product. That&apos;s why we are constantly working hard and smart to improve and develop our app. We listen to our users and value their feedback, and we incorporate that feedback into our development process to ensure that we are providing the best possible product.</p>

					<p className="mb-8">Our team is passionate about what we do, and we are committed to providing you with the best possible experience. We hope that you find our app useful and that it helps you achieve your creative vision. Thank you for choosing us, and we look forward to serving you in the future.</p>
				</section>

			</main>
			</Layout>
		</>
	);
}
