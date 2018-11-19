const sanityClient = require('@sanity/client');
export const client = sanityClient({
    projectId: "dgj4r2lw",
    dataset: "production",
    useCdn: true
});