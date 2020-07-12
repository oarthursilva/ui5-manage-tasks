sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("br.com.tasks.Tasks.control.Header", {
  	
  	/**
	 * Attributes
	 * @public
	 */
  	_iFirstTime : true,	// default true
  	_iDelayedCall : 5000,
  	
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
			 * The title
			 */
			title : {
				type: "string",
				defaultValue: "title"
			},

			/**
			 * The subtitle
			 */
			subtitle : {
				type: "string",
				defaultValue: "",
				multiple: false
			}
		},
		events: {},
		aggregations: {
			searchBar: {
				type: "br.com.tasks.Tasks.control.SearchBar",
				multiple: false,
				singularName: "searchBar"
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
  			var sSubTitle = oControl.getProperty("subtitle");
  			
  			oRm.write("<header>");
  			
  			oRm.write("<div");
			oRm.addClass("container");
  			oRm.addClass("headerContainer");
  			oRm.writeClasses();
  			oRm.write(">");
  			
  			// title
  			oRm.write("<div>");
  			oRm.write("<span");
  			oRm.addClass("headerTitle");
    		oRm.writeClasses();
  			oRm.write(">");
  			oRm.write(oControl.getProperty("title"));
			oRm.write("</span>");
			
			if (oControl.getSearchBar()) {
				this._renderSearchBar(oRm, oControl);		
			}
			
			oRm.write("</div>");
			
			if (sSubTitle) {
				// subtitle	
				oRm.write("<div>");
				oRm.write("<span");
	  			oRm.addClass("headerSubitle");
	    		oRm.writeClasses();
	  			oRm.write(">");
	  			oRm.write(oControl.getProperty("subtitle"));
				oRm.write("</span>");
	  			oRm.write("</div>");
			}
  			oRm.write("</div>");
  			
  			oRm.write("</header>");
	  	},
	  	
	  	/**
		 * Function responsible in create the first slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderSearchBar: function (oRm, oControl) {
			var oSearchBar = oControl.getSearchBar();
			
			// the custom Buttom object
			oRm.renderControl(oSearchBar);
		}
  	}
  	
  });
});