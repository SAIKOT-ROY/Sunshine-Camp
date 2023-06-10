// Note: save user to database

import axiosSecure from "../Hooks/useAxioxSecure"

export const saveUser = async user => {
       try{
        const currentUser = {
            email: user.email,
            name: user.displayName,
            userPhoto:user.photoURL
        };
        const response = await axiosSecure.put(`/users/${user.email}`, currentUser)
       console.log("user saved", response.data);
       }
       catch (error) {
        console.log("error message", error);
       }
       
}
// make a user admin 
export const becomeAdmin = async (email, refetch) => {
            
       const currentUser = {
             role: 'admin'
       }
       const response = await axiosSecure.patch(`/users/${email}`, currentUser)
       refetch()
       console.log(response)     
}

// make a user instructor 
export const becomeInstructor = async (email, refetch) => {
    const currentUser = {
          role: 'instructor'
    }
    const response = await axiosSecure.patch(`/users/${email}`, currentUser)
     refetch()
    console.log(response)     
}


// Get role from user
export const getRole = async email => {
      const response = await axiosSecure.get(`/users/${email}`)
      const user = await response.data;
      console.log(user?.role?.role);
      return user?.role?.role;
}