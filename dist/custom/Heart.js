sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Heart", {
  	
	/**
	 * Metadata
	 * @public
	 */
  	metadata : {
		properties: {
			id : {
				type: "string"	
			},
			src : {
				type: "string"
			},
			authors : {
				type: "string"
			},
			title : {
				type: "string"
			}
		}
  	},
  	
	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	onInit : function() {
  		
  	},
  	
  	exit: function() {
  		
  	},
  	
	onclick : function (oEvent) {
		oEvent.srcControl.toggleStyleClass("liked");
    },
  	
	/** 
	 * Main method for custom objects. 
	 * In order to display the object with properties 
	 * and aggregations defined, the method below 
	 * treat them, and allows the developer to insert 
	 * css classes or styles 
	 * @param {object} oRm render object
	 * @param {object} oControl control object
	 * @public 
	 */  
  	renderer: function (oRm, oControl) {
  		
		oRm.write("<div");
		oRm.addClass("content-wrapper");
		oRm.writeClasses();
		oRm.write(">");

		oRm.write("<a");
		oRm.addClass("like-button");
		oRm.writeClasses();
		oRm.writeControlData(oControl);
		oRm.write(">");

		oRm.write("<span");
		oRm.addClass("like-icon");
		oRm.writeClasses();
		oRm.write(">");
    
		oRm.write("<span");
		//oRm.addClass("heart-animation-1");
		//oRm.writeClasses();
		oRm.write(">");

		oRm.write("</span>");
		oRm.write("</span>");
		oRm.write("</a>");
		oRm.write("</div>");
		
  	}
  	
  });
});