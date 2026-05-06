export default function Table({ data, del }) {
  return (
    <table border="2">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AUTHOR</th>
          <th>PRICE</th>
          <th>ACTION</th>
        </tr>
      </thead>

      <tbody>
        {data.map((x, i) => (
          <tr key={i}>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.author}</td>
            <td>{x.price}</td>
            <td>
              <button onClick={() => del(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}