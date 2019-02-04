import React from "react";
import { Table } from "react-bootstrap";

const TableView = p => {
  const quaters = { q: ["q1", "q2", "q3", "q4"] };
  const years = { y: ["2020", "2021", "2022", "2023", "2024"] };

  return (
    <Table>
      <thead>
        <tr>
          {years.y.map((a, index) => (
            <th colSpan={4} key={index}>
              {" "}
              {a}{" "}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {quaters.q.map((a, index) => (
            <td key={index}> {a} </td>
          ))}
          {quaters.q.map((a, index) => (
            <td key={index}> {a} </td>
          ))}
          {quaters.q.map((a, index) => (
            <td key={index}> {a} </td>
          ))}
          {quaters.q.map((a, index) => (
            <td key={index}> {a} </td>
          ))}
          {quaters.q.map((a, index) => (
            <td key={index}> {a} </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default TableView;
