/*
 * @Author: your name
 * @Date: 2021-12-16 09:15:44
 * @LastEditTime: 2022-08-26 13:41:52
 * @LastEditors: 荛子
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-element-axios-project/src/api/index.js
 */
import axios from './axios'
/**
 * @description: 获取应用分类
 * @param {type} params
 */
export const getAppCates = (params) =>
  axios({
    url: '/ToolBox/Cates',
    method: 'get',
    params,
  })

/**
 * @description: 获取应用列表
 * @param {*} params
 * @return {*}
 */
export const getAppList = (params) =>
  axios({
    url: '/ToolBox/AppList',
    method: 'get',
    params,
  })

/**
 * @description: 获取应用表单详情
 * @param {*} params
 * @return {*}
 */
export const getAppDetail = (params) =>
  axios({
    url: '/ToolBox/AppDetail',
    method: 'get',
    params,
  })

/**
 * @description: 登陆
 * @param {*} params
 * @return {*}
 */
export const login = (params) =>
  axios({
    url: '/Ding/LessLogin',
    method: 'get',
    params,
  })

/**
 * @description: 提交表单
 * @param {*} data
 * @return {*}
 */
export const submitFormData = (data) =>
  axios({
    url: '/ToolBox/AppSubmit',
    method: 'POST',
    data,
  })

/**
 * @description: 获取运行记录
 * @param {*} params
 * @return {*}
 */
export const getRecordData = (params) =>
  axios({
    url: '/oapi/web/start/list',
    method: 'get',
    params,
  })

/**
 * @description: 获取运行记录列表
 * @param {*} params
 * @return {*}
 */
export const getRecordInfoListData = (params) =>
  axios({
    url: '/oapi/web/handle/list',
    method: 'get',
    params,
  })
