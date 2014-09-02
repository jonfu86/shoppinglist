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
            this.application.addEventListener( "clearRangeController", this, false);
        
        }
        
        
    },

    handleNewItemAction: {
        value: function (event) {
           console.log(event)
        }
    },

    handleCreateButtonAction: {
        value: function (event) {
            this.templateObjects.rangeController.add({
                text: this.templateObjects.newItem.value
            });
            this.templateObjects.newItem.value = ''
            //this.templateObjects.rangeController.content[this.templateObjects.rangeController.content.length-2].text = ;
           
        }
    },
    
    handleDestroyButtonAction:{
        value: function (event) {
           
            this.templateObjects.rangeController.delete(event.detail.get('item'))
        }
    },
    
    handleClearButtonAction:{
        value: function (event) {
            this.templateObjects.modal.activateModal();
           // this.templateObjects.rangeController.clear()
        }
    },
    
    rangeController:{
        value: function (event) {
            this.addEventListener("clearRangeController", 
    
            this.templateObjects.rangeController.clear();
        }
    }
        

});
