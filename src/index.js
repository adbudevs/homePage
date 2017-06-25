import angular from 'angular';
/*
import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);*/

  import 'angular-ui-router';
  import ngAnimate from 'angular-animate';
  import routesConfig from './routes';
  import {menuModule} from './app/menu/index';

  import {main} from './app/main/main';

  import './index.scss';

  angular
    .module('adbu', [menuModule, ngAnimate, 'ui.router'])
    .config(routesConfig)
    .component('adbu', main);
