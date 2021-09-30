
import React, { useState } from "react";
import EditUserModal from "../modals/EditUserModal";
import validator from 'validator';


const EditUserForm = ({user, editUserHandleSubmit}) => {
   

    const [updateUser,setUpdateUser] = useState(user);
    const [emailError , setEmailError] = useState(false);
    const [urlError , setUrlError] = useState(false);

    const {
        email,
        name,
        address,
        company,
        phone,
        website
    }= updateUser;

    const handleSubmit = () =>{
        if (!validator.isEmail(email)) {
            setEmailError(true);
        }
        else if(!validator.isURL(website)) {
            setUrlError(true);
        }
        else{
            editUserHandleSubmit(updateUser);
            setEmailError(false);
            setUrlError(false);
        }
       
    };

    return(
        <form onSubmit = {handleSubmit}>
         <div className = "form-group">
             <EditUserModal>
             <div className = "container">
                <div className = " text-center">
                    <label>Edit User</label>
                    <hr/>
                    <br/>
                </div>
                <div className = "row">
                    <div className = "col-md-6">
                        <input 
                            type = "text"   
                            name = "name"
                            onChange = {e=>setUpdateUser({...updateUser,name:e.target.value})}
                            className = "form-control"
                            placeholder = "Name"
                            value = {name}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "email" 
                            id = "email"
                            name = "email"
                            className = "form-control"
                            value = {email}
                            onChange =  {e=>setUpdateUser({...updateUser,email:e.target.value})}
                            placeholder = "Email"
                        /> 
                        <span hidden = {!emailError} className = "text-danger">Not avalid email address</span>
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "tel" 
                            name = "phone"
                            onChange = {e=>setUpdateUser({...updateUser,phone:e.target.value})}
                            className = "form-control"
                            placeholder = "Phone"
                            value = {phone}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "url" 
                            name = "website"
                            onChange = {e=>setUpdateUser({...updateUser,website:e.target.value})}
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
                            onChange = {e=>setUpdateUser({...updateUser,address:{...updateUser.address, street:e.target.value}})}
                            className = "form-control"
                            placeholder = "Street"
                            value = {address.street}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "suite"
                            onChange = {e=>setUpdateUser({...updateUser,address:{...updateUser.address, suite:e.target.value}})}
                            className = "form-control"
                            placeholder = "Suite"
                            value = {address.suite}
                        />  
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "city"
                            onChange = {e=>setUpdateUser({...updateUser,address:{...updateUser.address, city:e.target.value}})}
                            className = "form-control"
                            placeholder = "City"
                            value = {address.city}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "number" 
                            name = "zipcode"
                            onChange = {e=>setUpdateUser({...updateUser,address:{...updateUser.address, zipcode:e.target.value}})}
                            className = "form-control"
                            placeholder = "Zipcode"
                            value = {address.zipcode}
                        /> 
                    </div> 
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "companyName"
                            onChange = {e=>setUpdateUser({...updateUser,company:{...updateUser.company, name:e.target.value}})}
                            className = "form-control"
                            placeholder = "Retype new password"
                            value = {company.name}
                        />
                    </div>
                    <div className = "col-md-6">
                        <input 
                            type = "text" 
                            name = "companyBs"
                            onChange ={e=>setUpdateUser({...updateUser,company:{...updateUser.company, bs:e.target.value}})}
                            className = "form-control"
                            placeholder = "Retype new password"
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

             </EditUserModal>
          
         </div>
     </form>
    );
};


export default EditUserForm;