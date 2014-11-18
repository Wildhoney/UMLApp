(function main($angular) {

    /**
     * @module umlApp
     * @submodule uml
     * @author Adam Timberlake
     */
    $angular.module('umlApp').directive('uml', function umlDirective(Snap) {

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
             * @return {void}
             */
            controller: function controller() {

                /**
                 * @property snap
                 * @type {Snap}
                 */
                this.snap = Snap();

            }

        };

    });

})(window.angular);