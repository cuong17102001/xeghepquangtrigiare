const postAPIScript = "https://cloudflare-worker-xeghepquangtrigiare.nqcuong-1710.workers.dev/posts";

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