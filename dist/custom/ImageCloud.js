sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.ImageCloud", {
  	
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
			},
			
			src: {
				type: "string",
				multiple: true
			}
		}
  	},
  	
  	init : function () {
 	},
  	
  	exit : function () {
  	},
  	
  	onclick : function (oEvent) {
    },

	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	onInit : function() {
  	},
  	
  	onBeforeRendering : function () {
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
  			
  			if (!oControl.getProperty("src")) {
  				return;
  			}
  			
	  		var arrSrc = oControl.getProperty("src").split(",");
		  	
		  	if (!arrSrc || arrSrc.length === 0) {
		  		//do nothing
		  		
		  	} else {
			  	oRm.write("<div");
			  	oRm.writeAttribute("id", oControl.getProperty("id"));
			  	oRm.addClass("imagecloud-masonry");
				oRm.writeClasses();
			  	oRm.write(">");
			  	
			  	for (var i = 0; i < arrSrc.length; i++) {
			  	
					  	oRm.write("<div");
					  	oRm.addClass("imagecloud-item");
						oRm.writeClasses();
				  		oRm.write(">");
				  	
							oRm.write("<img");
							oRm.writeAttribute("src", arrSrc[i]);
							oRm.write(">");
				  	
						oRm.write("</div>");
			  	}
			  	oRm.write("</div>");
		  	}
  		}
  	}
  	
  });
});