import angular from 'angular';

console.log('AngularJS Version:',

angular.version.full);
// Import Other Modules
import './app.core/index';

angular.module('app', ['app.core']);
