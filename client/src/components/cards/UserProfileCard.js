import React from "react";
import profilePhoto from "../../images/profilePhoto.png";
import logo from "../../images/logo.png";
import EditUserForm from "../forms/EditUserForm";




const UserProfileCard = ({user, editUserHandleSubmit}) => {
    const {
        name,
        email,
        address,
        phone,
        website,
        company
    } = user;
    return (
        <div className="card mt-3 " >
            <div className="row no-gutters">
                <div className="col-md-4 user-profile-background ">                    
                    <img className=" user-img img-circle " src={profilePhoto} alt="USER PHOTO"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h2 className="font-weight-bold  user-profile-text title-font" >{name}</h2>
                        <span className="card-text user-profile-text"> 
                            <i className="far fa-envelope user-profile-icon pr-2" ></i>{email}
                        </span><br/>
                        <span className="card-text user-profile-text">
                            <i className="far fa-address-book user-profile-icon pr-2" ></i>
                            {address.street +", "+ address.suite+ ", " + address.city+ ", " + address.zipcode}
                        </span><br/>
                        <span className="card-text user-profile-text">
                            <i className="fas fa-phone user-profile-icon pr-2" ></i>{phone}
                        </span><br/>
                        <span  className="user-profile-text">
                            <i className="fas fa-globe user-profile-icon pr-2" ></i> 
                            <a href={"https://"+website} target="_blank">{website}
                                <span className="new_tab fas fa-external-link-alt pl-1"></span> 
                            </a>
                        </span><br/>
                        
                        <div className = "row pt-3">
                            <div className = "float-left pl-3 ">
                                <img className="company-logo " src={logo} alt="COMPANY LOGO"/>
                            </div>
                            <div className = "float-left pt-1 pl-3">
                                <span  className="user-profile-text font-weight-bold"> {company.name}</span><br/>
                                <span  className="user-profile-text font-italic"> {company.bs}</span>
                            </div>
                            
                        </div>
                        <div className = "float-right pt-1 pr-3">
                                <EditUserForm
                                    user={user}
                                    editUserHandleSubmit = {editUserHandleSubmit}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserProfileCard;