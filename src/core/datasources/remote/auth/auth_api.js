import axios from "axios"

export const authApi = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    timeout: 10000, //controla en que tiempo se va a considerar la peticion para considerarla fallida
})

//objeto con endpoints
// ejemplo para poder usarlo despues con el project
const endpoints = {
    login: "/login",
    logout: "/logout",
    users: {
        get: "/user",
        update: "/user"
    }
}