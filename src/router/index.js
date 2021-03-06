import Vue from 'vue'
import Router from 'vue-router'
import auth from '../scripts/auth'
import Login from '@/components/Login'
import Dash from '@/components/main/Dash'
import Course from '@/components/course/Course'
import Lecture from '@/components/course/Lecture'
import LectureFeedback from '@/components/course/LectureFeedback'
import LiveQuestions from '@/components/course/LiveQuestions'
import Quiz from '@/components/course/Quiz'
import Announcement from '@/components/Announcement'
import Calendar from '@/components/Calendar'
import Statistics from '@/components/Statistics'
import Settings from '@/components/settings/Settings'
import Profile from '@/components/settings/Profile'
import NotFound from '@/components/404'
import DashAdmin from '@/components/admin/DashAdmin'
import CourseList from '@/components/admin/CourseList'
import LectureList from '@/components/admin/LectureList'
import LectureChildList from '@/components/admin/LectureChildList'

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
            }
          ]
        },
        {
          path: '/courses/:courseId/lecture/:lectureId',
          components: {
            default: Lecture,
            rightbar: LiveQuestions
          },
          props: {
            default: true,
            rightbar: true
          }
        },
        {
          path: '/courses/:courseId/lecture/:lectureId/:quizId',
          component: Quiz,
          props: true
        },
        {
          path: '/courses/:courseId/lecture/:lectureId/feedback',
          components: {
            default: LectureFeedback,
            rightbar: LiveQuestions
          },
          props: {
            default: true,
            rightbar: true
          }
        },
        {
          path: '/announcements',
          component: Announcement
        },
        {
          path: '/stats',
          components: {
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
      path: '/admin',
      component: DashAdmin,
      beforeEnter(to, from, next) {
        console.log("Checking privilege "+ localStorage.privilege);
        if (localStorage.privilege != 2) {
          next()
        } else {
          next('/');
        }
      },
      children: [
        {
          path: '/',
          component: CourseList,
          props: true,
          children: [
          ]
        },
        {
          path: ':courseId',
          component: LectureList,
          props: true
        },
        {
          path: ':courseId/:lectureId',
          component: LectureChildList,
          props: true
        }


      ]

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
