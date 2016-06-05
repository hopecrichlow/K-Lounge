function ReadRateController (RateService) {

  let vm = this;

  init();

  function init () {
    RateService.getAll().then( (res) => {
      vm.rates = res.data.data;
      console.log(vm.rates);
    });
  }

}
ReadRateController.$inject = ['RateService'];
export { ReadRateController };
