import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="About Random Picture Generator" />
			</Head>
			<main>

				<h1 className="mx-auto my-10 text-3xl font-bold text-center">About</h1>

				<section className="w-6/12 mx-auto">
					<p className="mb-8">Welcome to Random Picture Generator! We are a team of creative and passionate individuals who are dedicated to providing you with the best possible experience. Our app generates random pictures from Unsplash API that can be used for a variety of purposes, including web design, social media, marketing campaigns, and more.</p>

					<p className="mb-8">Our app saves you time and effort by providing you with high-quality, royalty-free images that you can use instantly without having to worry about licensing or attribution. We understand the importance of having access to visually appealing content, and we strive to make that process as simple and effortless as possible.</p>

					<p className="mb-8">At our core, we believe that innovation and evolution are crucial to the success of any product. That's why we are constantly working hard and smart to improve and develop our app. We listen to our users and value their feedback, and we incorporate that feedback into our development process to ensure that we are providing the best possible product.</p>

					<p className="mb-8">Our team is passionate about what we do, and we are committed to providing you with the best possible experience. We hope that you find our app useful and that it helps you achieve your creative vision. Thank you for choosing us, and we look forward to serving you in the future.</p>
				</section>
			</main>
		</>
	);
}
