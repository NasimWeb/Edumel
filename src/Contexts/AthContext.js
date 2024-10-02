import { createContext } from "preact";


const authContext = createContext({
    isLogin:false,
    userInfo :{},
    loginUser : () => {},
    logOutUser : () => {}
})


export default authContext