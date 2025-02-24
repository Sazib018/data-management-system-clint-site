import React from 'react';

const Post = () => {

    const handelPost = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const gender = e.target.gender.value

        const data = {
            Name: name,
            Email: email,
            Gender: gender
        }

        fetch("http://localhost:3000/persons", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data)
        })

            .then(res => console.log(res))
            .catch(data => {
                console.log(data);
                alert("Post Success")
            })
    }
    return (
        <div>
            <form onSubmit={handelPost} className='space-y-4'>
                <input className='bg-gray-100 w-full p-2 rounded-md block' type="text" name="name" />
                <input className='bg-gray-100 w-full p-2 rounded-md block' type="text" name="email" />
                <input className='bg-gray-100 w-full p-2 rounded-md block' type="text" name="gender" />
                <input
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer" type="submit" value="Post" />

            </form>
        </div>
    );
};

export default Post;