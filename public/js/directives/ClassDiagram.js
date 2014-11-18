(function main($angular) {

    /**
     * @module umlApp
     * @submodule classDiagram
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('classDiagram', function classDiagramDirective(Snap) {

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
            //scope: true,

            /**
             * @method controller
             * @param $scope {Object}
             * @return {void}
             */
            controller: function controller($scope) {

                /**
                 * @property classes
                 * @type {Number[]}
                 */
                $scope.classes = [
                    { x: 100, y: 50 },
                    { x: 210, y: 320 }
                ];

            }

        };

    });

})(window.angular);