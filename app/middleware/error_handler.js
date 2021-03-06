'use strict';

module.exports = () => {
  /**
   * 错误处理中间件
   * @param {Object} ctx 上下文
   * @param {Function} next 继续下文
   * @return {void}
   */
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (error) {
      ctx.app.emit('error', error);
      if (error.code) {
        ctx.body = {
          msg: ctx.__(error.message),
          error: error.errors,
        };
        ctx.status = 400;
      } else if (error.message) {
        ctx.body = {
          msg: ctx.__(error.message),
        };
        ctx.status = 401;
      } else {
        ctx.body = {
          msg: ctx.__('Server Error'),
        };
        ctx.status = 500;
      }
    }
  };
};
