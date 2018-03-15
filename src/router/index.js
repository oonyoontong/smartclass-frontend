import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import UserProfile from '@/components/UserProfile'
import CourseView from '@/components/CourseView'
import LectureView from '@/components/LectureView'
import auth from '../scripts/auth'

Vue.use(Router)

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

export default new Router({
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
