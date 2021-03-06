import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Exercises from '@/components/Exercises/Index'
import NewExercise from '@/components/NewExercise'
import ViewExercise from '@/components/ExerciseView/ViewExercise'
import EditExercise from '@/components/EditExercise'
import News from '@/components/News'
import NewStatus from '@/components/NewStatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    },
    {
      path: '/exercises/new',
      name: 'new-exercise',
      component: NewExercise
    },
    {
      path: '/exercises/:exerciseId',
      name: 'exercise',
      component: ViewExercise
    },
    {
      path: '/exercises/:exerciseId/edit',
      name: 'exercise-edit',
      component: EditExercise
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/update',
      name: 'new-status',
      component: NewStatus
    },
    {
      path: '*',
      redirect: 'profile'
    }
  ]
})
