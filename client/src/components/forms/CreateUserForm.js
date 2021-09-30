
import React, { useState } from "react";
import CreateUserModal from "../modals/CreateUserModal";
import validator from 'validator';


const CreateUserForm = ({newUser,setNewUser, createUserHandleSubmit}) => {
    const [emailError , setEmailError] = useState(false);
    const [urlError , setUrlError] = useState(false);
    const {
        email,
        name,
        address,
        company,
        phone,
        website
    } = newUser;
   
    const handleSubmit = () =>{
       
        if (!validator.isEmail(email)) {
            setEmailError(true);
        }
        else if(!validator.isURL(website)) {
            setUrlError(true);
        }
        else{
            createUserHandleSubmit(newUser);
            setNewUser({
                name:"",
                email:"",
                address:{
                    street:"",
                    suite:"",
                    city:"",
                    zipcode:""
                },
                phone:"",
                website:"",
                company:{
                    name:"",
                    bs:""
                }
            });
        }
       
    };
    
    return(
        <form onSubmit = {handleSubmit}>
         <div className = "form-group ">
             <CreateUserModal>
             <div className = "container">
                <div className = " text-center">
                    <label>Please enter the following information (all the fields are required)</label>
                    <hr/>
                    <br/>
                </div>
                 <div className = "row">
                    <div className = "col-md-6">
                        <input 
                            type = "text"   
                            name = "name"
                            onChange = {e=>setNewUser({...newUser,name:e.target.value})}
                            className = "form-control"
                            placeholder = "Full Name "
                            value = {name}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "email" 
                            name = "email"
                            className = "form-control"
                            value = {email}
                            onChange = {e => setNewUser({...newUser,email:e.target.value})}
                            placeholder = "Email "
                        /> 
                        <span hidden = {!emailError} className = "text-danger">Not a valid email address</span>
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "tel" 
                            name = "phone"
                            onChange = {e=>setNewUser({...newUser,phone:e.target.value})}
                            className = "form-control"
                            placeholder = "Phone"
                            value = {phone}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "url"   
                            name = "website"
                            onChange = {e=>setNewUser({...newUser,website:e.target.value})}
                            className = "form-control"
                            placeholder = "Website"
                            value = {website}
                        />
                        <span hidden = {!urlError} className = "text-danger">Not a valid Url address</span>
                    </div>
                    <div className = "col-md-6">
                        
                         <input 
                            type = "text" 
                            name = "street"
                            onChange = {e=>setNewUser({...newUser,address:{...newUser.address, street:e.target.value}})}
                            className = "form-control"
                            placeholder = "Street"
                            value = {address.street}
                        />
                    </div>
                    <div className = "col-md-6">
                         <input 
                            type = "text" 
                            name = "suite"
                            onChange = {e=>setNewUser({...newUser,address:{...newUser.address, suite:e.target.value}})}
                            className = "form-control"
                            placeholder = "Suite"
                            value = {address.suite}
                        />  
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "city"
                            onChange = {e=>setNewUser({...newUser,address:{...newUser.address, city:e.target.value}})}
                            className = "form-control"
                            placeholder = "City"
                            value = {address.city}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "number" 
                            name = "zipcode"
                            onChange = {e=>setNewUser({...newUser,address:{...newUser.address, zipcode:e.target.value}})}
                            className = "form-control"
                            placeholder = "Zipcode"
                            value = {address.zipcode}
                        />
                    </div>
                    <div className = "col-md-6">
                        
                        <input 
                            type = "text" 
                            name = "companyName"
                            onChange = {e=>setNewUser({...newUser,company:{...newUser.company, name:e.target.value}})}
                            className = "form-control"
                            placeholder = "Company Name"
                            value = {company.name}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "companyBs"
                            onChange = {e=>setNewUser({...newUser,company:{...newUser.company, bs:e.target.value}})}
                            className = "form-control"
                            placeholder = "Company bs"
                            value = {company.bs}
                        />
                    </div>
                 </div>
             </div>
           <div className = "col-md-12 pb-3 pt-3">
                <input
                        type = "submit"
                        className = "btn btn-outline-warning float-right "
                        value= "save"
                        onClick = {handleSubmit}
                        disabled = {!name||!email||!address.street ||!address.suite||!address.city||!address.zipcode||!website||!company.bs ||!company.name||!phone}
                                
                    />
           </div>
                    
           
             </CreateUserModal>
          
         </div>
     </form>
    );
};


export default CreateUserForm;