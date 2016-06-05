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
      controller: 'ReadRateController as vm'
    })
    .state('root.gallery', {
      url: '/gallery',
      templateUrl: 'templates/gallery.tpl.html',
    })
    .state('root.reviews', {
      url: '/reviews',
      templateUrl: 'templates/reviews.tpl.html',
    })
    .state('root.mine', {
      url: '/mine',
      templateUrl: 'templates/disclaimer.tpl.html',
    })
    .state('root.yours', {
      url: '/yours',
      templateUrl: 'templates/disclaimer.tpl.html',
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html',
    })
  ;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
