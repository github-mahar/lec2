import React from 'react'
import { useState } from 'react';

export default function RenderTable() {
    let arr = [];
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      arr.push(data);
      console.log(arr.title);
    })
    .catch(error => console.error(error));
    const [data, setData] = useState([]);
    arr.map((data) => {
      setData(prevData => [...prevData, {
        title: data.title,
        description: data.description,
        image: data.image
      }]);
    });
    // console.log(data);
    // console.log(data[0]?.title);
    console.log(arr);
    arr = arr.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <img src={item.image} alt={item.title} width={50} />
          </td>
        </tr>
      );
    });
}
