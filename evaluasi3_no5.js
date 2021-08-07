function login (username, password) {
    if (username == 'ariful29' && password == '12345'){
        function goHome() {
            console.log('Halaman Home');
        }
        return goHome
    } else {
        function backLogin(){
            console.log('Login Gagal')
        }
        return backLogin
    }
}

let username = prompt('Masukan username')
let password = prompt('Masukan Password')

let cobaLogin = login(username, password)
cobaLogin()