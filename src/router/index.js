/*
 * @Author: your name
 * @Date: 2021-12-16 09:17:40
 * @LastEditTime: 2022-08-24 16:47:12
 * @LastEditors: 荛子
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-element-axios-project/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getErpInfo } from '../assets/js/public'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/layout',
    component: () => import('../components/layout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/records',
        component: () => import('../views/records.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue'),
  },
  {
    path: '/ddLogin',
    redirect: '/login',
  },
  {
    path: '/applicationForm',
    component: () => import('../views/applicationForm.vue'),
  },
]

const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {
  const erpInfo = getErpInfo()
  if (to.name !== 'login' && !erpInfo?.token) {
    ElMessage.error('登陆信息验证失败，请重新登陆')
    next({
      path: '/login',
      query: {
        path: encodeURIComponent(location.pathname + location.search),
      },
    })
  } else next()
})
export default router
