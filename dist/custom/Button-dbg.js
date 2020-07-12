sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Button", {
  	
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
  		
		properties: {
			/**
			 * The id
			 */
			id : {
				type: "string"	
			},
			
			/**
			 * The text
			 */
			text : {
				type : "string"
			}
		},
		events : {
			press : {
				enablePreventDefault : true
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
		this.firePress();
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
		oRm.write("<div>");
		
		oRm.write("<div");
		oRm.addClass("button-container");
		oRm.writeClasses();
		oRm.write(">");
		
		oRm.write("<a");
		oRm.addClass("button");
		oRm.addClass("button-cta");
		//oRm.addClass("button-md");
		oRm.addClass("button-block");
		oRm.writeClasses();
		oRm.writeControlData(oControl);
		oRm.write(">");
		
		// the button text
		oRm.write(oControl.getProperty("text"));
	
		oRm.write("</a>");
	
		oRm.write("</div>");
		
		oRm.write("</div>");
  	}
  	
  });
});