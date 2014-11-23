(function main($angular) {

    /**
     * @module umlApp
     * @submodule line
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('line', function lineDirective(Snap, eve) {

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

                var firstModel  = scope.model.connector[0],
                    secondModel = scope.model.connector[1];

                var lineItem = umlController.snap.line(firstModel.x, firstModel.y, secondModel.x, secondModel.y)
                                                 .attr({stroke: 'lightgrey', zIndex: 0});

            }

        };

    });

})(window.angular);