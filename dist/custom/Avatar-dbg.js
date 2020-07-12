sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Avatar", {
  	
	/**
	 * Metadata
	 * @public
	 */
  	metadata : {
  		interfaces : [
  			"sap.ui.core.IShrinkable",
  			"sap.ui.core.IFormContent"
  		],
  		library: "sap.m",
  		
  		properties : {
  			/**
			 * The id
			 */
			id : {
				type: "string"	
			}
  		},
  		
  		aggregations: {
	        content: {
	            type: "sap.f.Avatar",
				multiple: false
	        }
	    },
	    defaultAggregation: "content"
  	},
  	
	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	onInit : function() {
  		
  	},
  	
  	exit: function() {
  		
  	},
  	
  	onswipeleft : function (oEvent) {
		
		$(this).off("click").blur();
		$(this).css({
        	transform: "translateX(-210px)"
    	});
		
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
		oRm.addClass("avatar-spinner-circle");
		oRm.writeClasses();
		oRm.write(">");
		
  		oRm.write("<div");
		oRm.addClass("avatar-spinner");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("</div>");
		
  		oRm.renderControl(oControl.getAggregation("content"));
		
		oRm.write("</div>");

  	}
  });
});