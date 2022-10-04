import React from "react"
import "./Data.css"
import {Link} from "react-router-dom"


export default function Data(props){
 
  

  return(
    <div className="data-page">
   
      <h1>Participants Data</h1>
      <Link to="/"><button className="home-btn">Home</button></Link>
      <div className="data-container">
      {props.savedData.map((item, index) => {
        return (
        <div className="data-wrapper">
        <div>
          <div className="data-items">First name - {item.firstName} {item.lastName}</div> 
          <div className="data-items">Email - {item.email}</div>
          <div className="data-items">Comments - {item.comments}</div>
          <div className="data-items">Are you a UK citizen - {item.citizen ? "yes" : "no"}</div>
          <div className="data-items">Employement status - {item.employement}</div>
          <div className="data-items">Ethnicity - {item.ethnicity}</div>
          <br></br>
          </div>
          <div>
          <img className="trash-icon" src="trash bucket.png" onClick={() => props.deleteData(index)}/>
          </div>
          
      
        </div>
            
        )
      })}
         
         </div>
    </div>
  )
}