import { useEffect, useState } from "react";

function Tablecomponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data.users))
      .then((data)=> console.log(data));
  }, []);
 
    return(
        <>
        <h1>Hii</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Eamil id</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td ><div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Add</button>
  <button class="btn btn-primary" type="button">Delete</button>
</div></td>
            </tr>
          ))}
        </tbody>
      </table>


        </>
    );
}
export default Tablecomponent