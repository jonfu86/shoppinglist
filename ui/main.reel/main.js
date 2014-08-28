/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    captureButtonAction: {
        value: function (event) {
            rangeController.addContent();
            rangeController.content[rangeController.length-1].text = newItem.value;
            console.log('hi');
        }
    },

    handleButtonAction: {
        value: function (event) {
        }
    }

});
