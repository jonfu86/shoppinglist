/**
 * @module ui/modal.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Modal
 * @extends Component
 */
exports.Modal = Component.specialize(/** @lends Modal# */ {
    constructor: {
        value: function Modal() {
            this.super();
        }
    },
     handleClearButtonAction:{
         value: function (event) {
             this.templateObjects.rangeController.clear()
         }
     }
    
   
});
