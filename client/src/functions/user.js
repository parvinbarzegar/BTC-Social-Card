import axios from "axios";


export const getAllUsers = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
}