import React, { useState } from "react";
import {Modal} from "antd";


const CreateUserModal = ({children }) => {
    const [modalVisible, setModalVisible] = useState(false);

   
    const handleModal = () => {
        
            setModalVisible(true);
    };
  
    return(
        <>
            <div onClick = {handleModal}>
                <h5 className = "float-right custom_btn btn btn-outline-warning">
                    Add User
                    <i className="fas fa-user-plus text-warning pl-2" ></i>
                </h5>
            </div>
            <Modal
                    zIndex="1000"
                    width = "600"
                    title="Add Users"
                    centered
                    visible = {modalVisible}
                    onOk = {() => {
                        setModalVisible(false);
                    }}
                     okButtonProps= {{ style: { display: 'none' } }} 
                     cancelButtonProps={{ style: { display: 'none' } }}
                     onCancel={() => {
                        setModalVisible(false);
                    }}
                  
                >
                    {children}
            </Modal>
        </>
    )
};


export default CreateUserModal;