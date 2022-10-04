import React from "react"
import { useNavigate } from "react-router-dom"




export default function Form(props){
  const navigate = useNavigate()

  return(
    <div className="app">
    <div className="content">
      <h1>Application form</h1>
    
         <form className="form-detail" onSubmit={(event) => {
          props.onSubmit(event)
          navigate("/data")
         }}>
          <input
          type="text"
          placeholder='First Name'
          className='input-text'
          onChange={props.handleChange}
          value={props.formData.firstName}
          name="firstName"

          />
          <input
          type="text"
          placeholder= 'Last Name'
          className='input-text'
          onChange={props.handleChange}
          value={props.formData.lastName}
          name="lastName"
          
          />
          <input
          type="email"
          placeholder='Email'
          className='input-text'
          onChange={props.handleChange}
          value={props.formData.email}
          name="email"

          
          />
          <textarea
          rows={8}
          columns={10}
          className='text-area'
          placeholder='comments'
          onChange={props.handleChange}
          value={props.formData.comments}
          name="comments"
          
          />
          <div className='check'>
          <input
          type="checkbox"
          id="citizen"
          name="citizen"
          onChange={props.handleChange}
          checked={props.formData.citizen}
          
          />
         
          <label htmlFor='citizen'>  Are you a UK citizen?</label>
         </div>
         <br/>
         <br/>
         <fieldset className='radio-btn'>
          <legend>
            Current employement status
          </legend>
        
          
          <input 
          type="radio"
          id="unemployed"
          className="employement"
          onChange={props.handleChange}
          name="employement"
          checked={props.formData.employement === "unemployed"}
          value="unemployed"
          />
          <lable htmlFor="unemployed">unemployed</lable>
          <br/>
          <input 
          type="radio"
          id="full-time"
          className="employement"
          onChange={props.handleChange}
          name="employement"
          checked={props.formData.employement === "full-time"}
          value="full-time"
          
          />
          <lable htmlFor="full-time">full-time</lable>
          <br/>
          <input 
          type="radio"
          id="part-time"
          className="employement"
          onChange={props.handleChange}
          name="employement"
          checked={props.formData.employement === "part-time"}
          value="part-time"
          />
          <lable htmlFor="part-time">part-time </lable>        
         </fieldset>  
         <br/>
         <label>What is your Ethnicity</label>
         <br/>
         <select
         id="ethnicity"
         onChange={props.handleChange}
         value={props.formData.ethnicity}
         name="ethnicity"
         className="drop-down"> 
         <option value="Select One">Select One</option>      
         <option value="Asian or British Asian">Asian or British Asian</option>
         <option value="Black, Black British, Carribean or African">Black, Black Britis, Carribean or African</option>
         <option value="Mixed or multiple ethnic groups">Mixed or multiple ethnic groups</option>
         <option value="White">White</option>
         <option value="Other">Other</option>
         </select>
        <button className="submit">Submit</button>
         </form>
      
    </div>
    </div>
  )
  
}
