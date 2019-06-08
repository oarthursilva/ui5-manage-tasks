sap.ui.define([
  "sap/ui/core/Control",
  "sap/m/Image"
], function (Control, Image) {
  "use strict";
  return Control.extend("br.com.tasks.Tasks.control.SearchBar", {
  	
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
			 * The placeholder
			 */
			placeholder: {
				type: "string",
				defaultValue: "Search"
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
		_renderInput: function (oRm, oControl) {
			
			oRm.write("<div");
			oRm.addClass("input-group");
    		oRm.writeClasses();
    		oRm.write(">");
    		
			oRm.write("<input");
			oRm.writeAttribute("type", "text");
			oRm.writeAttribute("placeholder", oControl.getProperty("placeholder"));
			oRm.addClass("form-control");
			oRm.addClass("form-control-sm");
			oRm.addClass("border-right-0");

			oRm.writeControlData(oControl);
    		oRm.writeClasses();
			
    		oRm.write(">");
    		
    		this._renderInputRightButton(oRm, oControl);
    		
			oRm.write("</div>");
		},
		
		/**
		 * Function responsible in create the first slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderInputRightButton: function (oRm, oControl) {
			
          //<div class="input-group-append">
          //  <button class="btn btn-outline-primary border-left-0" type="button">GO</button>
          //</div>
          
			oRm.write("<div");
			oRm.addClass("input-group-append");
    		oRm.writeClasses();
    		oRm.write(">");
    		
    		this._renderButton(oRm, oControl);
          
			oRm.write("</div>");
		},
		
		/**
		 * Function responsible in create the first slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderButton: function (oRm, oControl) {
			
			var oImage = new Image({src: "src/searchbar/search.svg", width: "15px"});
			
			oRm.write("<button");
			oRm.writeAttribute("type", "button");
			oRm.writeControlData(oControl);
			oRm.addClass("btn");
			oRm.addClass("btn-sm");
			
			oRm.addClass("input-group-text");
			//oRm.addClass("btn-outline-primary");
			oRm.addClass("border-left-0");
			
    		oRm.writeClasses();
    		oRm.write(">");
    		
    		// the custom Buttom object
			oRm.renderControl(oImage);
    		//oRm.write("@");
    		
    		oRm.write("</button>");
    		//oRm.write("</span>");
		},
		
  		render : function (oRm, oControl) {
			oRm.write("<form");
			oRm.addClass("w-100");
    		oRm.addClass("my-auto");
    		oRm.addClass("d-inline");
    		oRm.writeClasses();
    		oRm.write(">");
  
			this._renderInput(oRm, oControl);
			
			//this._renderButton(oRm, oControl);
			
			oRm.write("</form>");
  			
	  	}
  	}
  	
  });
});