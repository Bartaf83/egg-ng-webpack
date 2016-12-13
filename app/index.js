import angular from 'angular';

if(ON_TEST) {
	console.log(' ON_TEST is TRUE!!!');
	require('angular-mocks/angular-mocks');
}
import registerDirective from './directives';
const ngModule = angular.module('app', []);



registerDirective(ngModule);