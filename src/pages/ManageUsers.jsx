import Layout from "../components/layout/Layout";

function ManageUsers() {

  const users = [
    {
      id:1,
      name:"Ravi",
      email:"ravi@gmail.com"
    },
    {
      id:2,
      name:"User",
      email:"user@gmail.com"
    }
  ];

  return (
    <Layout>

      <div className="container">

        <h1>Manage Users</h1>

        <table
          border="1"
          width="100%"
        >

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>

          </thead>

          <tbody>

            {
              users.map(user => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

export default ManageUsers;