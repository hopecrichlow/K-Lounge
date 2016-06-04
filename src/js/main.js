import angular from 'angular';
import 'angular-ui-router';

// Import Our Configuration
import { config } from './config';

//Start Angular
angular
  .module('app', ['ui.router'])
  .config(config)
  ;
