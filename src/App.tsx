
import { useEffect, useState } from 'react';
import './App.css';
import { DataGrid } from './lib';
import {headerObject} from "./lib/index.d"

function App() {
  const [data, setData]:any[] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setData(data))
    .then((json) => console.log(json));

  }, [])

 

  let header: headerObject[] = [
{
  field: "email",
  title: "Email",
  filter: {
    type: "text",
  }
  
},
{
  field: "postId",
  title: "postId",
  filter: {
    type: "text"
  }
},
{
  field: "id",
  title: "id",
  filter: {
    type: "text"
  }
},
{
  field: "name",
  title: "name",
  filter: {
    type: "text"
  }
},

  ]
  return (
   <DataGrid 
   data={data}
   header={header}
   />
  );
}

export default App;
