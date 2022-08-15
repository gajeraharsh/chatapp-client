

export const Config = () => {
     const token = localStorage.getItem("token");

     return  {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
}