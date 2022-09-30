import axios from "axios";
import "./table.css";
import React, { useEffect, useState } from "react";
// import axios from 'axios';

export default function Table() {
  const [TableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
      .then((response) => {
        console.log(response.data.data);
        setTableInfo(response.data.data);
      });
  }, []);

  return (
    <div>
      table
      <table>
        <tr>
          <th>Nation</th>
          <th>year</th>
          <th>population</th>
        </tr>
        {TableInfo.map((x) => (
          <tr>
            <td>{x.Nation}</td>
            <td>{x.Year}</td>
            <td>{x.Population}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
