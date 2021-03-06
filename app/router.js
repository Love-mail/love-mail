'use strict';

/**
 * 路由
 * @param {Egg.Application} app - egg 应用
 */
module.exports = app => {
  const { router, controller } = app;

  // 文档
  router.get('/docs', controller.docs.index);

  // 鉴权
  router.post('/v1/signup', controller.v1.user.signup);
  router.post('/v1/email/validate', controller.v1.user.validateEmail);
  router.post('/v1/signin', controller.v1.user.signin);

  // 用户
  router.get('/v1/user', controller.v1.user.index);
  router.patch('/v1/user/reset', controller.v1.user.resetPass);

  // 推送设置
  router.post('/v1/lovemail/setting', controller.v1.lovemail.save);
  router.patch('/v1/lovemail/setting', controller.v1.lovemail.update);
  router.patch('/v1/lovemail/untie', controller.v1.lovemail.untie);

  // 城市列表
  router.get('/v1/city/all', controller.v1.city.index);

  // 模板列表
  router.get('/v1/temp/all', controller.v1.template.index);

  // 退订
  router.get('/v1/unsubscribe', controller.v1.email.unsubscribe);

};
