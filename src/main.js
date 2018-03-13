import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import auth from './auth'
import VueSocketio from 'vue-socket.io';



import Login from './components/Login.vue'
import DashBoard from './components/DashBoard'
import UserProfile from './components/UserProfile'
import CourseView from './components/CourseView'
import LectureView from './components/LectureView'

Vue.use(VueRouter);
Vue.config.productionTip = false


Vue.use(VueSocketio, 'http://localhost:5000');



function requireAuth (to, from, next) {
    console.log(auth.loggedIn());
    if (!auth.loggedIn()) {
      console.log('going login');
        next({
            path: '/login',
            query: {redirect:to.fullPath}
        })
    } else {
        next()
    }
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/login'},
        { path: '/login', component: Login ,beforeEnter(to,from,next){
            console.log("checking for existing cookies");
            if (auth.loggedIn()){
                next({path: '/dashboard'});
            } else {
                next();
            }
            } },

        {
            path: '/dashboard',
            component: DashBoard,
            beforeEnter: requireAuth,
            children: [
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path:'/',
                     redirect:'courses/all'

                },
                {
                    path:'courses/:courseID',
                    component: CourseView,
                    /*props: (route) => ({ query: route.query.q }),*/
                    children:[
                        {
                            path:'lecture/:lectureID',
                            component: LectureView
                            /*props: (route) => ({ query: route.query.q })*/
                        }
                    ]
                }
                ]
        },
        {   name: 'logout',
            path: '/logout',
            beforeEnter (to, from, next) {
                auth.logout();
                next('/')
            }
        }
    ]
})

new Vue({
    el:'#app',
    router,
  render: h => h(App)
}).$mount('#app')
