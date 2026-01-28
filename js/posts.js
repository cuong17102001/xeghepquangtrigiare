const postAPIScript = "https://script.google.com/macros/s/AKfycbzwwrp6itHTLde2csbknBSFAcER43hWQCmsTpAW5DgwQOwkVZe08dIMUUnvc_nlgGA-/exec";

const getAllPosts = async () => {
    const response = await fetch(postAPIScript, {
        method: 'GET',
        
    });
    const data = await response.json();
    return data;
};

const getPostById = async (postId) => {
    const response = await fetch(`${postAPIScript}?id=${postId}`);
    const post = await response.json();
    return post;
}