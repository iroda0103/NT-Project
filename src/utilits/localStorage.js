export function setAccessToken(accessToken){
    localStorage("accessToken",accessToken);
}
export function getAccessToken(){
    localStorage.getItem("accessToken");
}
export function setRefreshToken(refreshToken){
    localStorage.setItem("refreshToken",refreshToken);
}
export function getRefreshToken(){
    localStorage.getItem("refreshToken");
}
