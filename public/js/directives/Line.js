(function main($angular) {

    /**
     * @module umlApp
     * @submodule line
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('line', function lineDirective() {

        return {

            /**
             * @property restrict
             * @type {String}
             * @default 'E'
             */
            restrict: 'E',

            /**
             * @property scope
             * @type {Object}
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
             * @method link
             * @param scope {Object}
             * @param element {Object}
             * @param attributes {Object}
             * @param umlController {Object}
             * @return {void}
             */
            link: function link(scope, element, attributes, umlController) {

                // Create the line for the line connector.
                scope.group = umlController.snap.group();

                /**
                 * @method drawLine
                 * @return {Object}
                 */
                scope.drawLine = function drawLine() {

                    var firstModel  = scope.model.connector[0],
                        secondModel = scope.model.connector[1];

                    return scope.group.line(firstModel.x, firstModel.y, secondModel.x, secondModel.y)
                                             .attr({ stroke: 'lightgrey' });

                };

                // Observe the passed in connector model.
                scope.$watch('model', function modelUpdated() {
                    scope.group.clear();
                    scope.drawLine();
                }, true);

            }

        };

    });

})(window.angular);