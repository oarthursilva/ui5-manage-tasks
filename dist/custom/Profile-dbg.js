sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Profile", {
  	
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
			},
			
			/**
			 * The displayName
			 */
			displayName	: {
				type : "string"
			},
			
			/**
			 * The about
			 */
			about	: {
				type : "string"
			},
			
			/**
			 * The avatar src
			 */
			src : {
				type: "string"
			}
			
		},
		events : {
			press : {}
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
  	renderer: {
  		render : function (oRm, oControl) {
  			
			oRm.write("<label");
			oRm.addClass("card-user");
			oRm.writeClasses();
			oRm.write(">");
	
			oRm.write("<div");
			oRm.addClass("header");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.addStyle("margin-top", "-50px!important");
	  		oRm.writeStyles();
			oRm.write(">");
			
			// -- begin of Card Header Section --
			
			oRm.write("<a"); 
			oRm.addClass("avatar-edit"); oRm.writeClasses();
			oRm.writeControlData(oControl);
			oRm.write(">");
			// the avatar
			this._renderAvatar(oRm, oControl.getProperty("src"));
			oRm.write("<br /><span>edit</span>");
			oRm.write("</a>");
			
			oRm.write("<div");
			oRm.addClass("card-details");
			oRm.writeClasses();
			oRm.write(">");
			
			// the title
			this._renderTitle(oRm, oControl.getProperty("displayName"));
			
			// the about
			this._renderAbout(oRm, oControl.getProperty("about"));
			
			oRm.write("</div>");
			oRm.write("</div>");
			// -- end of Card Header Section
			
  		},
  	
  		_renderAvatar : function (oRm, sSrc) {
  			oRm.write("<div");
			oRm.addClass("avatar");
			oRm.writeClasses();
			oRm.write(">");
			
			oRm.write("<img");
			oRm.addClass("avatar-img");
			oRm.writeClasses();
			
			// the image goes here according to the source previously define
			oRm.writeAttribute("src", sSrc);
			
			oRm.write(">");
			oRm.write("</div>");
  		},
  	
  	
  		_renderTitle : function (oRm, sDisplayName) {
  			oRm.write("<h2");
			//oRm.addClass("card-title");
			//oRm.writeClasses();
			oRm.write(">");
			// the user display name goes here
			oRm.write(sDisplayName);
			
			oRm.write("</h2>");	
  		},
  		
  		
  		_renderAbout : function (oRm, sAbout) {
  			oRm.write("<p");
			//oRm.addClass("card-text");
			//oRm.writeClasses();
			oRm.write(">");
			// the user about goes here
			oRm.write(sAbout);
			
			oRm.write("</p>");
  		},
  		
		_renderOneThirdDiv : function (oRm, isRightColumn) {
			oRm.write("<div");
			oRm.addClass("one-third");
			
			if (isRightColumn) {
				oRm.addClass("no-border");
			}
			
			oRm.writeClasses();
			oRm.write(">");
			
			oRm.write("<div");
			oRm.addClass("stat");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("20");	// DOM value
			
			oRm.write("<label");
			oRm.addClass("sup");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("");	// DOM value
			oRm.write("</label>");
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.addClass("stat-value");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("Books");	// DOM value
			oRm.write("</div>");
			
			oRm.write("</div>");
  		}
	}
  });
});