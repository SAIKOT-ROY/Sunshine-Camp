// Note: save user to database

import axiosSecure from "../Hooks/useAxioxSecure"

export const saveUser = async user => {
       try{
        const currentUser = {
            email: user.email,
            name: user.displayName,
            photoUrl:user.photoUrl
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
      console.log(user?.role);
      return user?.role;
}

// approve class
export const approveClass = async (id, refetch) => {
       const currentStatus = {
             status: 'approve'
       }
       const response = await axiosSecure.patch(`/dashboard/addClass/${id}`, currentStatus)
       refetch()
       console.log(response)
}

// export const denyClass = async (id, refetch) => {

//       const currentStatus = {
//             status: 'denied',
//       }
//       const response = await axiosSecure.patch(`/dashboard/addClass/${id}`, currentStatus)
//       refetch()
//       console.log(response)
// }

export const denyClass = async (id, refetch, feedback) => {
      console.log(id);
      console.log(feedback)
      const currentStatus = {
            status: 'denied',
            feedback: feedback
      }
      const response = await axiosSecure.patch(`/dashboard/addClass/${id}`, currentStatus)
      refetch()
      console.log(response)
}




// get status
export const getStatus = async id => {
       const res = await axiosSecure.get(`/dashboard/addClass/${id}`)
       const statusResult = await res.data;
       console.log(statusResult?.status?.status);
}