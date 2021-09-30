import React, { useEffect, useState } from "react";
import {getAllUsers} from "../functions/user";
import UserProfileCard from "../components/cards/UserProfileCard";
import Menu from "../components/cards/Menu";
import { toast} from "react-toastify";
import {Pagination} from "antd";
import LoadingCards from "../components/cards/LoadingCards";

const userInitialization = {
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
};

const UsersProfile = () =>{

    const [allUsers , setAllusers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState(userInitialization);
    const [page , setPage] = useState(1);
    const [showUsers, setShowUsers] = useState([]);
    
    

    useEffect (async()=>{     
        await loadUsersfromAPI();
        
        },[]);
 
    useEffect(()=>{     
        
        loadAllUsers(); 
        
    },[]);

    useEffect(()=>{
        
        loadUsersForPagination();
    },[page]);

    const loadUsersfromAPI = async() => {
       
        setLoading(true);
        await getAllUsers()
        .then(res => {
            localStorage.setItem("u", JSON.stringify(res.data));
            setLoading(false); 
        })
        .catch(err=>{
            setLoading(false);
            console.log(err);
            
        })
        
      
    };

    const loadAllUsers = async() => {
        setLoading(false);
            setAllusers(JSON.parse(localStorage.getItem('u')));
            setLoading(true);
      
    };

    const loadUsersForPagination = async()=> {

        if(localStorage.getItem('u')){
            let users = JSON.parse(localStorage.getItem('u'));
            let perpage = 5;
            let usersToShow = await users.slice(page*perpage-perpage,page*perpage );
            setShowUsers(usersToShow);
        };
    }

    const createUserHandleSubmit = (user) =>{
        
        user.id = (Math.max.apply(Math, allUsers.map(function(o) { return o.id; })))+1 ;
        let users = [...allUsers];
        users.splice(0,0,user);
        setAllusers(users);
        localStorage.setItem('u', JSON.stringify(users));
        toast.success(`${user.name} is added`,{
            position:toast.POSITION.TOP_CENTER,
            zIndex: 3000,
            
        });
       
        loadUsersForPagination();
    };

    const editUserHandleSubmit = (updatedUser) => {
        let updateUsers = allUsers.map(u =>( u.id === updatedUser.id? {...u,
            name : updatedUser.name, 
            email : updatedUser.email,
            phone : updatedUser.phone,
            website : updatedUser.website,
            address : updatedUser.address,
            company : updatedUser.company,
        }:u)
     );
       setAllusers(updateUsers);
       localStorage.setItem('u', JSON.stringify(updateUsers));
       toast.success(`${updatedUser.name} is updated`,{
        position:toast.POSITION.TOP_CENTER,
        zIndex: 3000
    });
    loadUsersForPagination();
    }

    return  (
        <>

            <Menu
                newUser = {newUser}
                setNewUser = {setNewUser}
                createUserHandleSubmit = {createUserHandleSubmit}
                totalUsers = {allUsers? allUsers.length:0}
            />         
            <div className= "container">
            
                <div className= "row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className = "col-md-4 offset-md-4 pt-4 p-3 text-center">
                            <Pagination
                                current = {page}
                                total = {allUsers?(allUsers.length/5)*10:0}
                                onChange = {(value) => setPage(value)}
                            />
                        </div>
                    {loading?(<LoadingCards count= {5}/>): 
                        (showUsers.map(u => 
                        <div  className="col-md-12" key = {u.id+u.name}>
                            <UserProfileCard
                                user = {u}
                                editUserHandleSubmit = {editUserHandleSubmit}
                            />
                        </div>
                    ))}
                    <br/>
                    </div>
                </div>
            </div>
        </>
    );
   
};

export default UsersProfile;
