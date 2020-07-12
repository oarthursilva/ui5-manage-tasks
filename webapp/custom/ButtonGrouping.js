sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.ButtonGrouping", {
  	
  	_oEvents : [
  		"Incoming (2) ",
  		"Ongoing (3) ",
  		"Complete (2) ",
  		"All (7) "
  	],
  	
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
			 * The id
			 */
			id : {
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
  		render : function (oRm, oControl) {
  			
  			oRm.write("<div");
  			oRm.writeAttribute("id", oControl.getProperty("id"));
  			// oRm.addClass("buttongrouping-wrapper");
  			oRm.writeClasses();
  			oRm.write(">");
  			
  			for (var i=0; i<oControl._oEvents.length; i++) {
  				
	  			oRm.write("<span");
	  			oRm.addClass("buttongrouping-content");
	  			if (i===(oControl._oEvents.length - 1)) {
	  				oRm.addClass(
						this._renderCSSBackground(oControl._oEvents[i])
	  				);	
	  			}
	  			
	  			oRm.writeClasses();
	  			
	  			if (i===0) {
	  				// initial element
	  				oRm.addStyle("margin-left", "5px");
	  				oRm.writeStyles();
	  			}
	  			
	  			oRm.write(">");
	  			oRm.write(oControl._oEvents[i]);
	  			oRm.write("</span>");
  				
  			}
			oRm.write("</div>");
			
	  	},
	  	
	  	_renderCSSBackground : function (iWeekday, sWeekDay) {
  			return "buttongrouping-content__background-color-selected";
	  	}
  	}
  	
  });
});