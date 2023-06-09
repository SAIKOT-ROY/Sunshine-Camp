// Note: save user to database

import axiosSecure from "../Hooks/useAxioxSecure"

export const saveUser = async user => {
       try{
        const currentUser = {
            email: user.email
        };
        const response = await axiosSecure.put(`/users/${user.email}`, currentUser)
       console.log("user saved", response.data);
       }
       catch (error) {
        console.log("error message", error);
       }
       
}