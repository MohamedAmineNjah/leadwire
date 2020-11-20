import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailUser = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadUser2();
    }, []);
    const loadUser2 = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        setUser(res.data.reverse());
        console.log(res);
    };
    return (
        <div className="container">
            <h1>Page de post</h1>
            <table class="table border shadow">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">userId</th>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>








    );
};

export default DetailUser;