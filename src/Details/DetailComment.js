import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailComment = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadUser1();
    }, []);
    const loadUser1 = async () => {
        const res1 = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        console.log(res1);
        setUser(res1.data.reverse());

    };
    return (
        <div className="container">
            <h1>Page de comment</h1>
            <table class="table border shadow">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">PostId</th>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DetailComment;