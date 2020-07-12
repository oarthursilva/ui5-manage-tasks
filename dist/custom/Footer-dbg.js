sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Footer", {
  	
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
		},
		aggregations: {
			content: {
				type: "pt.com.booklog.custom.MenuButton",
				multiple: true,
				singularName: "content"
			}
		}
  	},
  	
  	init : function () {
 	},
  	
  	exit : function () {
  	},
  	
	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	onInit : function() {
  	},
  	
  	onBeforeRendering : function () {
  	},
  	
  	onclick : function (oEvent) {
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
	  		
			// wrapper
	  		oRm.write("<footer");
	  		oRm.writeAttribute("id", oControl.getProperty("id"));
	  		oRm.write(">");
	
			oRm.write("<div flex");
			oRm.writeAttribute("layout", "column");
			oRm.write(">");
			
			// aggregation Content
			this._renderContent(oRm, oControl);
			
			oRm.write("</div>");
			oRm.write("</footer>");
			
	  	},
	  	
	  	_renderContent : function (oRm, oControl) {
	  		
	  		var oContent = oControl.getAggregation("content");
	  		if (!oContent || oContent.length === 0) {
					// no data found on content aggregation
					
			} else {
				for (var i = 0, j = 1; i < oContent.length; i++,j++) {
					oRm.write("<span");
					
					if (j === 1) {
						oRm.addClass("footer-menu__float-left");
					
					} else if (j === oContent.length) {
						oRm.addClass("footer-menu__float-right");
					
					} else if (j % 2 === 0) {
						oRm.addClass("footer-menu__float-left_middle");
						
					} else if (j % 2 !== 0) {
						oRm.addClass("footer-menu__float-right_middle");

					}
					oRm.writeClasses();
					oRm.write(">");
					oRm.renderControl(oContent[i]);
					oRm.write("</span>");
				}
			}
	  	}
	  	
	  	
  	}
  	
  });
});