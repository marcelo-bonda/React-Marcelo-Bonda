import { createContext, useState, useContext } from "react"

const  Notification = ({type, text})=>{
    const notificationStyle ={
      position:'absolute',
      top:100,
      right:50,
      backgroundColor: type==='succes'? 'green':'red',
      color:'white',
      padding:'10px 20px 10px 20px',
      borderRadius:10
    }

   
    
    return (
      <div style={notificationStyle}>
        {text}
      </div>
    )
  }

 
const NotificationContex = createContext()

export const NotificationProvider = ({ children })=>{
const[notificationData, setNotificationData]=useState({
    type: 'success',
    text:''
})

const setNotification =(type, text)=>{
    setNotificationData ({type, text})
    
    setTimeout(()=>{
        setNotificationData({type, text:''})
    },2000)
    }
    return(
        <NotificationContex.Provider value={{setNotification, notificationData}}>
            {notificationData.text &&<Notification type={notificationData.type} text={notificationData.text}/>}
            {children}
        </NotificationContex.Provider>
    )
}

export const useNotification = ()=>{
    return useContext(NotificationContex)
}