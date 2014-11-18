(function main($angular) {

    /**
     * @module umlApp
     * @submodule class
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('class', function classDirective(Snap) {

        return {

            /**
             * @property restrict
             * @type {String}
             * @default 'E'
             */
            restrict: 'E',

            /**
             * @property scope
             * @type {Boolean}
             * @default true
             */
            scope: {
                model: '=ngModel'
            },

            /**
             * @property require
             * @type {String}
             */
            require: '^uml',

            /**
             * @method controller
             * @param $scope {Object}
             * @return {void}
             */
            controller: function controller($scope) {

                $scope.styleItem = function styleItem(classItem) {

                    classItem.attr({
                        fill: 'white',
                        stroke: 'lightgrey',
                        strokeOpacity: 1,
                        strokeWidth: 1,
                        cursor: 'move'
                    });

                }

            },

            /**
             * @method link
             * @param scope {Object}
             * @param element {Object}
             * @param attributes {Object}
             * @param umlController {Object}
             * @return {void}
             */
            link: function link(scope, element, attributes, umlController) {

                // Create the class item, and then style it!
                var classItem = umlController.snap.rect(scope.model.x, scope.model.y, 200, 100);
                scope.styleItem(classItem);
                classItem.drag();

            }

        };

    });

})(window.angular);