sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.SummaryButton", {
  	
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
			
			/**
			 * The src
			 */
			src : {
				type: "string"
			},
			
			/**
			 * The title
			 */
			title : {
				type: "string"
			},
			
			/**
			 * The lastUpdate
			 */
			lastUpdate : {
				type : "string"
			},
			
			/**
			 * The lastUpdate
			 */
			total : {
				type : "int"
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
  		oEvent.preventDefault();
  		$(oEvent.target.nextSibling).toggleClass("content-bottom__collapse--active");
  		//$(this).target.toggleClass("content-bottom__collapse--active");
  		//$(this).toggleClass("content-bottom__collapse--active");
  		//$(this)[0].getDomRef().previousElementSibling;
		//$(this).parent().find("div").toggleClass("content-bottom__collapse--active");
		//$(this).parent().find( "div" ).toggleClass( "content-bottom__collapse--active" );
		//$(this).toggleClass("expanded");
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
	  		oRm.write("<div");
			oRm.addClass("content-wrapper");
			oRm.writeClasses();
			
	  		oRm.write(">");
	
			
				oRm.write("<a");
				oRm.addClass("content-bottom__button-toggle");
				oRm.addClass("content-bottom__button");
				oRm.writeClasses();
				oRm.writeAttribute("id", oControl.getProperty("id"));
				oRm.writeControlData(oControl);
				oRm.write(">");
			
				// total
				this._renderTotal(oRm, oControl.getProperty("total"));
				oRm.write("</a>");
	
				oRm.write("<div");
				oRm.addClass("content-bottom__collapse");
				oRm.writeClasses();
		  		oRm.write(">");
	
				oRm.write("<a");
				oRm.addClass("content-bottom__button--value");
				oRm.addClass("do");
				oRm.writeClasses();
				oRm.write(">");
				
					this._renderTotal(oRm, oControl.getProperty("total"));	// total
					oRm.write("</a>");
				
				
					oRm.write("<a");
					oRm.addClass("content-bottom__button--value");
					oRm.addClass("doing");
					oRm.writeClasses();
					oRm.write(">");
					this._renderTotal(oRm, oControl.getProperty("total"));	// total
					oRm.write("</a>");
				
					oRm.write("<a");
					oRm.addClass("content-bottom__button--value");
					oRm.addClass("done");
					oRm.writeClasses();
					oRm.write(">");
					this._renderTotal(oRm, oControl.getProperty("total"));	// total
					oRm.write("</a>");
				
				oRm.write("</div>");
			
			oRm.write("</div>");
	  	}
  	}
  	
  });
});