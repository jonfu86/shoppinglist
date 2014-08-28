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
           
        }
    },

    handleCreateButtonAction: {
        value: function (event) {
            this.templateObjects.rangeController.addContent({
                text: this.templateObjects.newItem.value
            });
            //this.templateObjects.rangeController.content[this.templateObjects.rangeController.content.length-2].text = ;
            console.log(this.templateObjects.rangeController.content.length);
            console.log(this.templateObjects.newItem.value);
            console.log(this.templateObjects.rangeController.content[1].text);
            console.log(this.templateObjects.rangeController.content[2].text);
            console.log(this.templateObjects.rangeController.content.text);
        }
    }

});
