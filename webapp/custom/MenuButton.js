sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.MenuButton", {
  	
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
			 * The src
			 */
			src : {
				type: "string"
			},
			
			/**
			 * The selected
			 */
			selected : {
				type : "boolean",
				defaultValue: false
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
  	
  	setSelected : function (oEvent) {
  		var sSrc = "";
  		
  		if (oEvent) {
  			sSrc = this.getSrc().replace(".svg", "");
  			this.setSrc(sSrc + "-sel.svg");
  			return;
		}
		this.setSrc(this.getSrc().replace("-sel", ""));
		return;
		
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
  		
  		/*
		oRm.write("<div");
		oRm.addClass("content-wrapper");
		oRm.writeClasses();
		oRm.write(">");
		*/
		
		oRm.write("<a");
		oRm.addClass("menubutton-button");
		oRm.writeClasses();
		oRm.writeControlData(oControl);
		oRm.write(">");

		oRm.write("<span");
		oRm.addClass("menubutton-icon");
		oRm.writeClasses();
		
  		oRm.addStyle("background", "url(" + 
  			oControl.getProperty("src") +
  			") no-repeat center");
		oRm.writeStyles();
		
		oRm.write(">");

		oRm.write("</span>");
		oRm.write("</span>");
		oRm.write("</a>");
		//oRm.write("</div>");
		
  	}
  	
  });
});