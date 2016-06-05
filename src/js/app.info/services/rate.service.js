function RateService (SERVER, $http) {

  const url = SERVER.URL + 'Rates/';

  //Public Methods
  this.getAll = getAll;

  function getAll () {
    console.log(this);
    return $http.get(url, { headers: SERVER.HEADERS });
  }

}

RateService.$inject = ['SERVER', '$http'];
export { RateService };
