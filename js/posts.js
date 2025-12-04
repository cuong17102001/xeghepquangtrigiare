const postAPIScript = "https://script.google.com/macros/s/AKfycbxZte7zZppJ26DSDB23cNSbwnFWl5623-xssrVWmLDMXCRxgy_1TBeKnovlAZ2scHZy/exec";

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