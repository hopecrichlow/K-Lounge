function config ($stateProvider, $urlRouterProvider) {

  // If not `state` is matched, go to the home page
  $urlRouterProvider.otherwise('/');

  // Define our app states
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.welcome', {
      url: '/',
      templateUrl: 'templates/welcome.tpl.html',
    })
    .state('root.menu', {
      url: '/menu',
      templateUrl: 'templates/menu.tpl.html',
    })
  ;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
