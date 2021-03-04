import IPost from "interfaces/Post";

const sendPost = async ({ contact, problem, date }: IPost) => {
    await fetch('http://localhost:8000/schedule/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact, problem, date })
    });
}

export { sendPost };