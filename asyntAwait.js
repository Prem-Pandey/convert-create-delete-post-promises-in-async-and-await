const posts = [{title: 'POST1'}];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function create2ndPost() {
    await delay(3000);
    posts.push({title: 'POST2'});
}

async function create3rPost() {
    await delay(2000);
    posts.push({title: 'POST3'});
}

async function deletePost() {
    await delay(1000);
    if (posts.length > 0) {
        return posts.pop();
    } else {
        throw new Error("ERROR: ARRAY IS EMPTY");
    }
}

async function main() {
    try {
        await create2ndPost();
        const deletedPost1 = await deletePost();
        console.log(deletedPost1.title);

        await create3rPost();
        const deletedPost2 = await deletePost();
        console.log(deletedPost2.title);

        const deletedPost3 = await deletePost();
        console.log(deletedPost3.title);

        await deletePost();
    } catch (error) {
        console.log(error.message);
    }
}
main();