import React, { useState } from "react";
import CreateUserForm from "../forms/CreateUserForm";


const Menu = ({newUser, setNewUser, createUserHandleSubmit, totalUsers}) => {
 

    const handleLoad = () =>{
        window.location.reload();
  
    }
    return(
     
            <div className="container-fluid alert alert-danger menu ">
                 <h6 className="float-left  pl-5">Total Users: {`${totalUsers}`}</h6>
              
             { totalUsers>0 && <CreateUserForm
                   newUser={newUser}
                   setNewUser = {setNewUser}
                   createUserHandleSubmit = {createUserHandleSubmit}
                   
               />}
                  <label
                  onClick = {handleLoad}
                  className="float-right custom_btn btn btn-outline-warning mr-3"
                  >
                     Load data
                 </label>
            </div>
      
    );
};

export default Menu;