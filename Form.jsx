export default function Form({ f, handle, add, setfilter }) {
  return (
    <form onSubmit={add}>
      <input name="id" placeholder="Enter ID" value={f.id} onChange={handle}/>

      <input  name="title"  placeholder="Enter Title" value={f.title} onChange={handle}/>

      <input name="author"placeholder="Enter Author"value={f.author} onChange={handle}/>

      <input name="price" placeholder="Enter Price" value={f.price} onChange={handle}/>

      <button type="submit">Submit</button>

      <br /><br />

      <input placeholder="Search by ID" onChange={(e) => setfilter(e.target.value)}/>
    </form>
  );
}