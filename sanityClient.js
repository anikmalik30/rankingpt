import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID, // Replace with your Sanity project ID
    dataset: 'production',// Replace with your actual dataset
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;