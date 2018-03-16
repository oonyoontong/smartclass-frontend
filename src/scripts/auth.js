import axios from 'axios';

function LoginRequest (username, pass, cb) {
  axios.post("https://smartclass-backend.herokuapp.com/account/login",{
    username: username,
    password: pass
  }).then(function(response){
    console.log(response.data);
    cb(response.data);
  })
}

export default {
  login (email, pass, cb) {
    console.log("logging in");
    cb = arguments[arguments.length - 1];
    /* if (localStorage.token != null) {
         console.log("verified");
         if (cb) cb(true);
         this.onChange(true);
         return
     }*/
    LoginRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.account;
        if (cb) cb(true);
        this.onChange(true)
      } else {
        if (cb) cb(false);
        this.onChange(false)
      }
    })
  },

  getToken () {
    return localStorage.token
  },

  logout (cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false)
  },

  loggedIn () {
    // TODO: Check local token against token stored on server
    return localStorage.token != null;
  },

  onChange () {}
}
