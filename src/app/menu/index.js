import angular from 'angular';

import {menu} from './menuController';

export const menuModule = 'menu';

angular
  .module(menuModule, [])
  .component('adbuMenu', menu);
