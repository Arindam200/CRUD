import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/" + id).then((res) => {
      console.log(res);
      // setUsers(users.filter((user) => user._id !== id));
      window.location.reload();
    });
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            ADD +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
