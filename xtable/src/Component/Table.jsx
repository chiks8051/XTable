import React, { useState } from "react";

export default function Table() {
  const [table,setTable] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  console.log(table);
  const handleView = () =>{
    const sortedByViews = [...table].sort((a, b) => a.views - b.views);
    setTable(sortedByViews);
  }
  const handleDate = () =>{
    const sortedByDate = [...table].sort((a, b) => new Date(a.date) - new Date(b.date));
    setTable(sortedByDate);
  }

  return (
    <div style={{margin: '20px'}}>
    <h1>Date and Views Table</h1>
    <button onClick={handleDate}>Sort by Date</button>
    <button onClick={handleView}>Sort by Views</button>
    <table>
        <thead>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
        </thead>
        <tbody>
            {table.map((row, rowIndex) => (
                <tr key = {rowIndex}>
                    <td>{row.date}</td>
                    <td>{row.views}</td>
                    <td>{row.article}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  );
}
