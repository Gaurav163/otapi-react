import jwtDecode from "jwt-decode";

const tokenKey = "token";

function getUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);
        return user;
    } catch (ex) {
        return;
    }
}

function logout() {
    localStorage.removeItem(tokenKey);
}

export default {
    getUser, logout
}
