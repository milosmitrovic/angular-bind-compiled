(function () {
    'use strict';

	angular.module('bindCompiled').directive('compile', ['$compile', function ($compile) {
		return function (scope, element, attrs) {
			scope.$watch(
				function (scope) {
					return scope.$eval(attrs.compile);
				},
				function (value) {

					if (value != '') {
						element.html(value.$$unwrapTrustedValue());
						$compile(element.contents())(scope);

						if (attrs.compileCallback) {
							scope.$eval(attrs.compileCallback);
						}
					}
				}
			);
		};
	}])

}());