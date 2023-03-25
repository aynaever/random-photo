import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout.js';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home({data}) {
	const [photoUrl, setPhotoUrl] = useState(data.urls.regular);
	const [photoAlt, setPhotoAlt] = useState(data.alt_description);
	const [isError, setIsError] = useState(data.isError);

	return (
	<>
  	  <Head>
    	<title>Random Pitcture Generator</title>
    	<meta name="description" content="Random Picture Generator from Unsplash" />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
  	  </Head>
  	  <Layout>
    	<main>
      		<h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-8">Random Picture Generator</h1>
      		{ isError && <h3 className="text-center text-lg sm:text-xl md:text-3xl text-red-500 font-bold my-8">Error, You exceeded the limit; Check later</h3> }
      		<AnimatePresence>
      			<motion.div
      				key={photoUrl}
      				initial={{ opcaity: 0 }}
      				animate={{ opacity: 1}}
      				exit={{ opacity: 0 }}
      				transition={{ duration: 1 }}
      			>
    			<Image
    				className="m-auto rounded-2xl lg:mt-20 md:mt-28 sm:mt-20"
    				src={photoUrl}
    				alt={photoAlt}
    				width={300}
    				height={300}/>
    			</motion.div>
    		</AnimatePresence>
    		<div className="flex justify-center">
    			<button className={`bg-red-600 hover:bg-red-700 hover:scale-105 p-2.5 rounded mt-20 text-xl text-white ${
        							isError ? "opacity-50 cursor-not-allowed disabled:opacity-50" : ""}`}
    					disabled={isError ? "disabled" : ""}
    					onClick={ async () => {
    						const newData = await getRandomPicture();
    						console.log(newData);
    						console.log(newData.props.data.urls.regular);
    						setPhotoUrl(newData.props.data.urls.regular);
    						setPhotoAlt(newData.props.data.alt_description);
    			}}>Next</button>
    		</div>
    	</main>
		  </Layout>
	</>
  )
}

async function getRandomPicture() {
	const client_id = "UlxSv4iJVQHmI9-6Q3dbe6Q8AECOw_Y0msAolDAP1VM";
	const url = `https://api.unsplash.com/photos/random?client_id=${client_id}`;
	let data = {};

	const res = await fetch(url);
	if (!res.ok) {
		data = {isError : true,
		    	urls : {
		        	regular : "https://images.unsplash.com/photo-1627358699667-2ea8d061bc13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
		        },
		        alt_description : "Error"};
	} else {
		data = await res.json();
		data.isError = false;
	}

	return {
		props: { data }
	}
}

export async function getServerSideProps(context) {
	const data = await getRandomPicture();

	return (data);
}
