import React, { useState } from "react";
import {Modal } from "antd";
import { EditOutlined} from "@ant-design/icons";

const EditUserModal = ({children }) => {
    const [modalVisible, setModalVisible] = useState(false);

   
    const handleModal = () => {
        
            setModalVisible(true);
            console.log(children);
    };
    return(
        <>
            <div onClick = {handleModal}>
                    <EditOutlined className = "text-warning custom_btn"/>
            </div>
            <Modal
                    className ="modal"
                    width ="600"
                    title="Edit User"
                    zIndex ="1000"
                    centered
                    visible = {modalVisible}
                    onOk = {() => {
                        setModalVisible(false);
                    }}
                     okButtonProps = {{ style: { display: 'none' } }}
                     cancelButtonProps={{ style: { display: 'none' } }}
                     onCancel = {() => {
                        setModalVisible(false);
                    }}
                  
                >
                    {children}
            </Modal>
        </>
    )
};


export default EditUserModal;