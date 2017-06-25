class MenuController {
  /** @ngInject */
  constructor($timeout, $scope) {
    const _this = this;

    $scope.$watch(() => {
        return _this.isVisible;
      }, value => {
    if (value) {
        $timeout(() => {
          _this.showMenu = value;
        }, 20);
      }
    });
  }
}

export const menu = {
  template: require('./menu.html'),
  controller: MenuController,
  bindings: {
    isVisible: '<'
  },
  controllerAs: 'ctrl'
};
