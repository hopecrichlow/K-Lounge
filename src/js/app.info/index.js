import angular from 'angular';

// Import Controllers
import { ReadRateController }   from './controllers/readRate.controller';

// Import Services
import { RateService } from './services/rate.service';

angular
  .module('app.info', [])
  .controller('ReadRateController', ReadRateController)
  .service('RateService', RateService)
;
