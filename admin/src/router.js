import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Admin from './views/admin'
import Welcome from "./views/admin/welcome"
import Chapter from "./views/admin/chapter"
import Section from "./views/admin/section"
import Course from "./views/admin/course"
import Category from "./views/admin/category"
import Teacher from "./views/admin/teacher"
import File from "./views/admin/file"
import Content from "./views/admin/content"


import axios from "axios"
Vue.use(Router);
Vue.prototype.$ajax = axios;

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: "*",
    redirect: "/login",
  }, {
    path: "",
    redirect: "/login",
  }, {
    path: "/login",
    component: Login
  }, {
    path: "/",
    name: "admin",
    component: Admin,
    children: [
      {
        // 子路由不需要斜杠
        path: "welcome",
        name: "welcome",
        component: Welcome,
      },
      {
        path: "business/chapter",
        name: "business/chapter",
        component: Chapter
      },
      {
        path: "business/section",
        name: "business/section",
        component: Section
      },
      {
        path: "business/course",
        name: "business/course",
        component: Course
      },
      {
        path: "business/category",
        name: "business/category",
        component: Category
      },
      {
        path: "business/content",
        name: "business/content",
        component: Content
      },
      {
        path: "business/teacher",
        name: "business/teacher",
        component: Teacher
      },
      {
        path: "file/file",
        name: "file/file",
        component: File
      }
    ]
  }]
})