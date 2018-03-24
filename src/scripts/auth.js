import axios from 'axios';

export default {
  login(username, pass, cb) {
    console.log("logging in")
    cb = arguments[arguments.length - 1];
    LoginRequest(username, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
    console.log('logging out')
  },

  loggedIn() {
    return localStorage.token != null
  },

  onChange() {
  }
}

function LoginRequest(username, pass, cb) {
  axios.post("https://smartclass-backend.herokuapp.com/account/login", {
    username: username,
    password: pass
  }).then(function (response) {
    console.log(response.data);
    cb(response.data);
  })
}
