import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div class='card'>
      <img src={props.img} alt=""></img>
      <button>Save <Bookmark /></button>
      <div class="company">
        <p id="company-name">{props.company}</p>
        <p id="days">{props.days} days ago</p>
      </div>
      <div id="role">
        <h4>{props.role}</h4>
      </div>
      <div class="time1">
        <p>{props.time1}</p>
      </div>
      <div class="time2">
        <p>{props.time2}</p>
      </div>
      <div class="line">
      </div>
      <div class="price">
        {props.price}$/hr
      </div>
      <div class="apply">
        <button>Apply now</button>
      </div>
      <div class="place">
        {props.city}, {props.country}
      </div>
    </div>
  )
}

export default Card
