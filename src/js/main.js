import angular from 'angular';

// console.log('AngularJS Version:', angular.version.full);

// Import Other Modules
import './app.core/index';
import './app.info/index';

angular.module('app', ['app.core', 'app.info']);
