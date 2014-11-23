(function main($angular) {

    /**
     * @module umlApp
     * @submodule classDiagram
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('classDiagram', function classDiagramDirective() {

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
            scope: true,

            /**
             * @method controller
             * @param $scope {Object}
             * @return {void}
             */
            controller: function controller($scope) {

                /**
                 * @property classes
                 * @type {Array}
                 */
                $scope.classes = [
                    { name: 'CatController', x: 100, y: 50 },
                    { name: 'PetsController', x: 210, y: 320 }
                ];

                /**
                 * @property relationships
                 * @type {Array}
                 */
                $scope.relationships = [
                    { name: 'Cats to Pets', connector: [ $scope.classes[0], $scope.classes[1] ] }
                ];

            }

        };

    });

})(window.angular);