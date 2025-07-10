
import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:3003/api/',
    
})
export const setToken = token => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}

export const clearToken = () => {
    instance.defaults.headers.authorization = "";
}

export const register = async (data) => {
    const { data: result } = await instance.post("/auth/register", data);
    setToken(result.token);
    return result;
}

export const login = async (data) => {
    const { data: result } = await instance.post("/auth/login", data);
    setToken(result.token);
    return result;
}

export const logout = async () => {
    const { data } = await instance.post("/auth/signout");
    clearToken();
    return data;
}

export const getCurrent = async (token) => {
    try {
        setToken(token);
        const { data } = await instance.get("/auth/current");
        return data;
    }
    catch (error) {
        setToken();
        throw error;
    }
}

export const refreshUser = async (token) => {
    if (!token) {
        throw new Error("Token is not exist");
    }
    setToken(token);
    const { data } = await instance.get("/users/me");
    return data;
};


export default instance;