import App from "../App";
import React, { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';




const Form = () =>{

    const [formData,setFormData]=useState( {FirstName:"",LastName:"", Email:"",Country:"",Street:""
                                            ,City: "",State:"",Zip :"",Comments:"",Candidates:"",Offers:""});
// sending email
    const form = useRef();
/*
    function submitHandler  (e) {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xl6u2ug', 'template_1e735xy', form.current, {
            publicKey: 'J5zHqAUv2EFWoOol8',
          })
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
             // form.current.reset();
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            });
            e.target.reset();
      };
    // sending email function
*/    

    
    function changeHandler(event){
        const{name,value,checked,type}=event.target; 
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: type ==="checkbox" ? checked : value
            }
        });
    };

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }
    

    return (
        <div>
          <form  ref={form} onSubmit={submitHandler} >
          <div>
                <label htmlFor="FirstName"> First Name</label>
                <input id="FirstName" type="text" placeholder="First Name" onChange={changeHandler} name="FirstName"  value={formData.FirstName}></input>
           </div>

           <div>
                <label htmlFor="LastName">Last Name</label>
                <input  id="LastName" type="text" placeholder="Last Name" onChange={changeHandler} name="LastName" value={formData.LastName}></input>
           </div>
           <div>
                <label htmlFor="Email">Email Address</label>
                <input  id="Email" type="email" placeholder="form123@gmail.com" onChange={changeHandler} name="Email" value={formData.Email}></input>
           </div>
           <div>
                <label htmlFor="Country">Country</label>
                <select  id="Country" onChange={changeHandler} name="Country" value={formData.Country}>
                    <option value='India'>India</option>
                    <option value='US'>US</option>
                    <option value='China'> China</option>
                    <option value='Japan'>Japan</option>
                    <option value='Canada'>Canada</option>
                    <option value='Nepal'> Nepal</option>
                </select>    
           </div>

           <div>
                <label htmlFor="Street">Street Address</label>
                <input  id="Street" type="text" placeholder="1234 Main St" onChange={changeHandler} name="Street" value={formData.Street}></input>
           </div>

           <div>
                <label htmlFor="City">City</label>
                <input  id="City" type="text" placeholder="Kolkata" onChange={changeHandler} name="City" value={formData.City}></input>
           </div>

           <div>
                <label htmlFor="State">State/Province</label>
                <input  id="State" type="text" placeholder="West Bengal" onChange={changeHandler} name="State" value={formData.State}></input>
           </div>

           <div>
                <label htmlFor="Zip">ZIP/Postal Code</label>
                <input  id="Zip" type="int" placeholder="844122" onChange={changeHandler} name="Zip" value={formData.Zip}></input>
           </div>

           <fieldset>
                <legend>By Email</legend>
                <div className="legend-div">
                    <div className="input-group">
                    <input id="Comments" type="checkbox" onChange={changeHandler} name="Comments"  checked={formData.Comments}></input>
                    <label htmlFor="Comments">Comments</label>
                    </div>
                    <span>Get notified when someone posts a comments on a posting.</span>
                </div>
                <div>
                    <div className="input-group">
                    <input id="Candidates"type="checkbox" onChange={changeHandler} name="Candidates"  checked={formData.Candidates}></input>
                    <label htmlFor="Candidates">Candidates</label>
                    </div>
                    <span>Get notified when a Candidate applies for a job.</span>
                </div>
                <div>
                    <div className="input-group">
                    <input id="Offers" type="checkbox" onChange={changeHandler} name="Offers"   checked={formData.Offers}></input>
                    <label htmlFor="Offers">Offers</label>
                    </div>
                    <span>Get notified when a Candidate accepts or rejects an Offers.</span>
                </div>
           </fieldset>

           <fieldset>
                <legend>Notification</legend>
                <span>These are delivered via SMS to your mobile phone</span>
                <div className="input-group">
                    <input id="Everything" type="radio" onChange={changeHandler} name="Notifications" value="Everything" checked={formData.Notifications === "Everything"}></input>
                    <label htmlFor="Everthing">Everything</label>
                </div>
                <div className="input-group">
                    <input id="same"type="radio" onChange={changeHandler} name="Notifications" value="Same as email" checked={formData.Notifications === "Same as email"}></input>
                    <label htmlFor="same">Same as email</label>
                </div>
                <div className="input-group">
                    <input id="No" type="radio" onChange={changeHandler} name="Notifications" value="No notification" checked={formData.Notifications === "No notification"}></input>
                    <label htmlFor="No">No notification</label>
                </div>
           </fieldset>

           <button type="submit">Save</button>
          </form>


        </div>
    );
}

export default Form;