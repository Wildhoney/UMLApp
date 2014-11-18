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

                /**
                 * @method styleClass
                 * @param classItem {Object}
                 * @param shadowFilter {Object}
                 * @return {void}
                 */
                $scope.styleClass = function styleClass(classItem, shadowFilter) {

                    classItem.attr({
                        fill: 'white',
                        stroke: 'lightgrey',
                        strokeOpacity: 1,
                        strokeWidth: 1,
                        cursor: 'move',
                        filter: shadowFilter
                    });

                };

                /**
                 * @method styleText
                 * @param textItem {Object}
                 * @return {void}
                 */
                $scope.styleText = function styleText(textItem) {

                    textItem.attr({
                        fontFamily: 'Arial, Tahoma, Helvetica',
                        fontSize: '11px',
                    });

                };

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

                var group = umlController.snap.group();

                // Create the class item, and then style it!
                var classItem    = group.rect(scope.model.x, scope.model.y, 200, 100),
                    textItem     = group.text(scope.model.x + 8, scope.model.y + 18, scope.model.name),
                    shadowFilter = umlController.snap.paper.filter(Snap.filter.shadow(0, 0, 1, .1));

                scope.styleClass(classItem, shadowFilter);
                scope.styleText(textItem);
                group.drag();

            }

        };

    });

})(window.angular);