export function setAccessToken(accessToken){
  return  localStorage.setItem("accessToken",accessToken);
}
export function getAccessToken(){
  return  localStorage.getItem("accessToken");
}
export function setRefreshToken(refreshToken){
   return localStorage.setItem("refreshToken",refreshToken);
}
export function getRefreshToken(){
   return localStorage.getItem("refreshToken");
}
