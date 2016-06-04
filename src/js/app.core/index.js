import angular from 'angular';
import 'angular-ui-router';

// Import Our Constants
 import { serverConstant } from './constants/server.constant';

// Import Our Configuration
import { config } from './config';

//Start Angular
angular
  .module('app.core', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
;
