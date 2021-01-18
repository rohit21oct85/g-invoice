export function LoginData(response){
    let accessToken = response.accessToken
    let refreshToken = response.refreshToken
    let fullname = response.fullname
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('refresh_token', refreshToken);
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('isLoggedIn', true);
    return {
        status: true
    }
}