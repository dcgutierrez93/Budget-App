// Method to handle budget data.
// =============================================================================
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            console.log(add(b));
        }
    }

})();
