sap.ui.define([
  "sap/ui/core/Control",
  "sap/m/Image"
], function (Control) {
  "use strict";
  return Control.extend("br.com.tasks.Tasks.control.HeaderLink", {
  	
  	/**
	 * Attributes
	 * @public
	 */

	/**
	 * Metadata
	 * @public
	 */
  	metadata : {
  		interfaces : [
  			"sap.ui.core.IShrinkable",
  			"sap.ui.core.IFormContent"
  		],
  		library: [
  			"sap.m"
  		],
		properties: {
			
			/**
			 * The text
			 */
			text: {
				type: "string",
				defaultValue: ""
			},
			
			/**
			 * the href
			 */
			href: {
				type: "value",
				defaultValue: "#"
			}
		}
  	},
  	

	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	onInit : function() {
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
	renderer: {

		/**
		 * Function responsible in create the first slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderLink: function (oRm, oControl) {
			
			oRm.write("<a");
			oRm.writeAttribute("href", oControl.getProperty("href"));
			oRm.writeControlData(oControl);
			oRm.addClass("nav-link");
    		oRm.writeClasses();
    		oRm.write(">");
    		
    		oRm.write(oControl.getProperty("text"));

    		oRm.write("</a>");
		},
		
  		render : function (oRm, oControl) {
			oRm.write("<li");
			oRm.addClass("nav-item");
			//oRm.addClass("active");
    		oRm.writeClasses();
			oRm.write(">");
			
			this._renderLink(oRm, oControl);
			
			oRm.write("</li>");
	  	}
  	}
  	
  });
});