import React, { useEffect, useState } from 'react';
import '.././App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Usertab = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(result);
        setUsers(result.data.reverse());
    };

    const deleteUser = async id => {
        fetch('https://jsonplaceholder.typicode.com/users/${id}', {
            method: 'DELETE'
        })
        setUsers(users.filter((user) => user.id !== id))


    };
    return (

        <div className="container">
            <h1>Liste des utilisateurs</h1>
            <table class="table border shadow">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">N</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link class="btn btn-warning" to={`/posts/${index + 1}`}>
                                    Voir user
                  </Link>
                                <Link
                                    class="btn btn-outline-primary mr-2"
                                    to={`/users/edit/${user.id}`}
                                >
                                    Modifier
                  </Link>
                                <Link class="btn btn-primary mr-2" to={`/comments/${index + 1}`}>
                                    Voir comments
                  </Link>
                                <Link
                                    class="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                  </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>






    )
}




export default Usertab;
