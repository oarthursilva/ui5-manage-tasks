sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Weekday", {
  	
  	_aWeekDays : [
  		"Sun",
  		"Mon",
  		"Tue",
  		"Wed",
		"Thu",
		"Fri",
		"Sat"
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
  			
  			var sToday = moment().format("YYYY-MM-DD"),
  				oDate = moment(sToday),
				iWeekday = oDate.day();
  			
  			oRm.write("<div");
  			oRm.writeAttribute("id", oControl.getProperty("id"));
  			oRm.addClass("weekday-wrapper");
  			oRm.writeClasses();
  			oRm.write(">");
  			
  			for (var i=0; i<oControl._aWeekDays.length; i++) {
  				
	  			oRm.write("<span");
	  			oRm.addClass("weekday-content");
	  			oRm.addClass(
	  				this._renderCSSBackground(iWeekday, oControl._aWeekDays[i])
	  			);
	  			oRm.writeClasses();
	  			
	  			if (i===0) {
	  				// initial element
	  				oRm.addStyle("margin-left", "5px");
	  				oRm.writeStyles();
	  			}
	  			
	  			oRm.write(">");
	  			oRm.write(oControl._aWeekDays[i]);
	  			oRm.write("</span>");
  				
  			}
			oRm.write("</div>");
			
	  	},
	  	
	  	_renderCSSBackground : function (iWeekday, sWeekDay) {
	  		if (
	  			(sWeekDay === "Sun" && iWeekday === 0) ||
	  			(sWeekDay === "Sat" && iWeekday === 6) ||
	  			(sWeekDay === "Fri" && iWeekday === 5) ||
	  			(sWeekDay === "Thu" && iWeekday === 4) ||
	  			(sWeekDay === "Wed" && iWeekday === 3) ||
	  			(sWeekDay === "Tue" && iWeekday === 2) ||
	  			(sWeekDay === "Mon" && iWeekday === 1)
	  		)  {
  				return "weekday-content__background-color-today";
	  			
	  		}
	  	}
  	}
  	
  });
});