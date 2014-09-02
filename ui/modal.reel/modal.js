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
    activateModal:{
    value: function (event) {
           this.templateObjects.overlayModal.show();
           //overlayModal.show();
        }
    },
    handleConfirmAction:{
        value: function (event) {
            console.log('hi');
            this.dispatchEventNamed("clearRangeController", true, true, {})
            //this.templateObjects.main.clearRangeController();
            //this.templateObjects.overlayModal.hide();
        }
    }
    
   
});
