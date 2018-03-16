import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import Settings from '@/components/Settings'
import Profile from '@/components/Profile'
import Course from '@/components/Course'
import Calendar from '@/components/Calendar'
import Lecture from '@/components/views/Lecture'
import NotFound from '@/components/404'
import Announcement from '@/components/Announcement'
import Dash from '@/components/Dash'
import Quiz from '@/components/Quiz'
import auth from '../scripts/auth'

Vue.use(Router);

function requireAuth(to, from, next) {
  console.log(auth.loggedIn());
  console.log("Checking logged in status... " + auth.loggedIn());
  if (!auth.loggedIn()) {
    console.log('Redirecting to login.');
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dash,
      beforeEnter: requireAuth,
      children: [
        {
          path: '/announcements',
          component: Announcement
        },
        {
          path: '/courses',
          component: Course,
          children: [
            {
              path: ':courseId',
            }
          ]
        },
        {
          path: '/settings',
          component: Settings
        },
        {
          path: '/settings/profile',
          component: Profile
        },
        {
          path: '/quiz',
          component: Quiz
        },
        {
          path: '/stats',
          component: DashBoard
        },
        {
          path: '/calendar',
          component: Calendar
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        console.log("Checking logged in status... " + auth.loggedIn());
        if (auth.loggedIn()) {
          next('/')
        } else {
          next();
        }
      }
    },
    // {
    //   path: '/dashboard',
    //   component: DashBoard,
    //   beforeEnter: requireAuth,
    //   children: [
    //     {
    //       path: '/',
    //       redirect: 'courses/all'
    //     },
    //     {
    //       path: 'courses',
    //       redirect: 'courses/all'
    //     },
    //     {
    //       path: 'courses/:courseID',
    //       component: Course,
    //       /*props: (route) => ({ query: route.query.q }),*/
    //       children: [
    //         {
    //           path: 'lecture/:lectureID',
    //           component: Lecture
    //           /*props: (route) => ({ query: route.query.q })*/
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout();
        next('/')
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
