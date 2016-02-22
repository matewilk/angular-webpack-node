import angular from 'angular';
import appModule from './config';

/* styles */
import '../styles/main.scss'
import '../node_modules/angular-material/angular-material.scss';

angular.bootstrap(document, [appModule.name]);
