import React from 'react';
import {Col} from 'react-bootstrap';


const Card = props =>
		<Col md = {12}>
		    <div className="col-md-12 ">
		      <div className="card mb-3" draggable="true" onDragStart= {e=>{e.dataTransfer.setData('text', props.info.duration);e.persist()}}>
		        <div className="card-body" >
		          <p className="card-title"><span>Name: </span>{props.info.name}</p>
		          <p className="card-text">
		            <span>duration: </span>{props.info.duration}
		          </p>
		          <p className="card-text">
		            <span>budget: </span>{props.info.budget}
		          </p>
		        </div>
		      </div>
		    </div>
		</Col>


export default Card;
