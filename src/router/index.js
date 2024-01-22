import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

const originalPush = Router.prototype.push;
const originalReplace = Router.prototype.replace;
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch(function (err) {
    console.log(err);
  });
};
Router.prototype.replace = function (location) {
  return originalReplace.call(this, location).catch(function (err) {
    console.log(err);
  });
};

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes
});

export default router;
