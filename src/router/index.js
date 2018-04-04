import Vue from 'vue'
import Router from 'vue-router'
import auth from '../scripts/auth'
import Login from '@/components/Login'
import Dash from '@/components/main/Dash'
import Course from '@/components/course/Course'
import Lecture from '@/components/course/Lecture'
import Quiz from '@/components/Quiz'
import Announcement from '@/components/Announcement'
import Calendar from '@/components/Calendar'
import Statistics from '@/components/Statistics'
import Settings from '@/components/settings/Settings'
import Profile from '@/components/settings/Profile'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dash,
      beforeEnter: requireAuth,
      children: [
        {
          path: '/',
          component: Course
        },
        {
          path: '/courses',
          component: Course,
          props: true,
          children: [
            {
              path: ':courseId',
              children: [
                {
                  path: 'lectures',
                  component: Lecture,
                  children: [
                    {
                      path: ':lectureId'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          path: '/quiz',
          component: Quiz,
          props: true,
          children: [
            {
              path: ':quizId'
            }
          ]
        },
        {
          path: '/announcements',
          component: Announcement
        },
        {
          path: '/stats',
          components:{
            default: Statistics,
            rightbar: Announcement
          }
        },
        {
          path: '/calendar',
          component: Calendar
        },
        {
          path: '/settings',
          component: Settings,
          children: [
            {
              path: 'profile',
              component: Profile
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        console.log("Checking logged in status... " + auth.loggedIn())
        if (auth.loggedIn()) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        if (auth.loggedIn()) {
          auth.logout()
          next('/')
        }
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

function requireAuth(to, from, next) {
  console.log("Checking logged in status... " + auth.loggedIn())
  if (!auth.loggedIn()) {
    console.log('Redirecting to login.')
    next({path: '/login'})
  } else {
    next()
  }
}
