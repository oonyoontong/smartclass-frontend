import axios from 'axios';
import {store} from '../store/index'

export default {
  login(username, pass, cb) {
    console.log("logging in")
    cb = arguments[arguments.length - 1];
    LoginRequest(username, pass, (res) => {
      if (res.authenticated) {
        console.log('Authenticated: ' + res.authenticated);
        delete res.account.passwordHash;
        delete res.account.passwordSalt;
        delete res.account._v;
        store.state.account = res.account;
        console.log(store.state.account);
        localStorage.token = res.account._id;
        localStorage.privilege = res.account.privilege;
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

  getPrivilege(){
    return localStorage.privilege;
  },

  logout(cb) {
    localStorage.token = null
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
  axios.post(
    store.state.backendUrl + "account/login",
    {
      username: username,
      password: pass
    }).then(function (response) {
    cb(response.data);
  })
}
