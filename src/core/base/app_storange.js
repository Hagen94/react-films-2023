

export const appStorange ={
    get: async (key) =>{
        return localStorage.getItem(key)
    },
    save: async (key, value) =>{
        return localStorage.setItem(key, value)
    }
    ,
    remove: async (key) =>{
        return localStorage.removeItem(key)
    }
}