class mainController {
  /** @ngInject */
  constructor() {
    this.toggleMenu = function () {
      this.isOpen = !this.isOpen;
    };
  }
}

export const main = {
  template: require('./main.html'),
  controller: mainController,
  controllerAs: 'ctrl'
};
