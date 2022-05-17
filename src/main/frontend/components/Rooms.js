import React from "react";
import "./Pages.css";
import HotelRoom1 from '../../../assets/images/hotel-room1.jpg';
import HotelRoom2 from '../../../assets/images/hotel-room2.jpg';
import HotelRoom3 from '../../../assets/images/hotel-room3.jpg';

function Rooms() {
  return (
	<div class="container">
	    <div class="row mt-5">
	    	<div class="col-md-6">
	    		<img src={ HotelRoom1 } width="640px" />
	    	</div>
	    	<div class="col-md-6 text-center">
	    		<h6>Camera hotel 1</h6>
	    		<button type="button" class="btn btn-secondary">Rezervare</button>
	    	</div>
	    </div>
	    
	    <div class="row mt-4">
	    	<div class="col-md-6">
	    		<img src={ HotelRoom2 } width="640px" />
	    	</div>
	    	<div class="col-md-6">
	    		<h6>Camera hotel 2</h6>
	    		<button type="button" class="btn btn-secondary">Rezervare</button>
	    	</div>
	    </div>
	    
	    <div class="row mt-4 mb-5">
	    	<div class="col-md-6">
	    		<img src={ HotelRoom3 } width="640px" />
	    	</div>
	    	<div class="col-md-6">
	    		<h6>Camera hotel 3</h6>
	    		<button type="button" class="btn btn-secondary">Rezervare</button>
	    	</div>
	    </div>
	    
	    <div class="h-50"></div>
    </div>
  );
}

export default Rooms;
