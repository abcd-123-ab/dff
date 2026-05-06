import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";

export default function App() {
  const [b, setb] = useState([]);
  const [f, setf] = useState({ id: "", title: "", author: "", price: "" });
  const [filter, setfilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("books"));
    if (data) setb(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(b));
  }, [b]);

  const handle = (e) => setf({ ...f, [e.target.name]: e.target.value });

  const add = (e) => {
    e.preventDefault();

    if (!f.id || !f.title || !f.author || !f.price) {
      alert("Enter all details");
      return;
    }

    const exists = b.some((book) => book.id === f.id);
    if (exists) {
      alert("ID must be unique");
      setf({ id: "", title: "", author: "", price: "" });
      return;
    }

    setb([...b, f]);
    setf({ id: "", title: "", author: "", price: "" });
  };

  const del = (i) => setb(b.filter((_, index) => index !== i));

  const data = filter ? b.filter((x) => x.id.toLowerCase()===filter.toLowerCase()): b;

  return (
    <div>
      <h1>Book Management</h1>

      <Form f={f} handle={handle} add={add} setfilter={setfilter} />

      <Table data={data} del={del} />
    </div>
  );
}
