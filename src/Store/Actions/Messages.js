import axios from  "axios";
import {Config} from "./Helper";
//Get Messages

// export const GetMessages = (id) => async (dispatch) => {
//     dispatch({type:"SET_MESSAGES_LODING"})
//     try{
      
//         const config = Config()
//         const res = await axios.post(`/api/conversation/getmessages`,{id:id},config);
//       //  console.log(res.data.data)
//         dispatch({type:"SET_MESSAGES",paylod:res.data.data})
//         dispatch({type:"CLOSE_MESSAGES_LODING"})
//     }catch(error){
//         console.log(error.response)
//         dispatch({type:"CLOSE_MESSAGES_LODING"})
//     }
// }


// Send Messages 

export const SendMessage = (data,cb) => async (dispatch) => {

    try {
        const res = await axios.post("/api/conversation/sendmessage",data,Config())
       
        cb(res.data.data)
    } catch (error) {
        console.log(error.response)
    }
}




export const MessagesGet = (id) => async (dispatch) => {
    dispatch({type:"SET_MESSAGES_LODING"})
    try{
      
        const config = Config()
        const res = await axios.get(`/api/conversation/Messagesget${id}`,config);
      //  console.log(res.data.data)
        dispatch({type:"SET_MESSAGES",paylod:res.data.data})
        dispatch({type:"CLOSE_MESSAGES_LODING"})
    }catch(error){
        console.log(error.response)
        dispatch({type:"CLOSE_MESSAGES_LODING"})
    }
}