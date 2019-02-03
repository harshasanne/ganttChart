import React from 'react';
import {Table} from 'react-bootstrap';


const TableView = (p) => {
	const quaters= {a: ['q1','q2','q3','q4']}
	const years= {a: ['2020','2021','2022','2023','2024']}

	return (
		<Table>
          	<thead>
          		<tr>
          		{years.a.map((a) => <th Colspan = {4}> {a} </th>)}
          		</tr>
          	</thead>
             <tbody>
          		<tr>
          		{quaters.a.map((a) => <td> {a} </td>)}
          		{quaters.a.map((a) => <td> {a} </td>)}
          		{quaters.a.map((a) => <td> {a} </td>)}
          		{quaters.a.map((a) => <td> {a} </td>)}
          		{quaters.a.map((a) => <td> {a} </td>)}
          		</tr>
          	</tbody>
          </Table>
		)
}

export default TableView;

