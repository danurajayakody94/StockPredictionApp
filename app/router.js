import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('task');
  this.route('home');
  this.route('prediction');
  this.route('portfolio');
});

export default Router;
