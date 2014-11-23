(function main($angular) {

    // А дело бывало, и коза волка съедала!
    var app = $angular.module('umlApp', []);
    app.value('Snap', Snap);
    app.value('eve', eve);

})(window.angular);