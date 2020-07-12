sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Busy", {
  	
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
			 * The id
			 */
			id : {
				type: "string"	
			},
			
			/**
			 * The src
			 */
			 busy : {
				type: "boolean",
				default: true
			}
		}
  	},
  	
  	setBusy : function (bBusy) {
  		var sFadeCSSClass = "";
  			
	  	if (this._iFirstTime) {
  			this._iFirstTime = false;
  			// fade 100%
  			sFadeCSSClass = "busyIndicatorFadeOn";
	  	} else {
  			// fade 90%
  			
  			sFadeCSSClass = "busyIndicatorFade";
	  	}
  		
  		if (bBusy) {			// true
  			this.removeStyleClass("busyIndicatorFadeOff").addStyleClass(sFadeCSSClass);
  			
  		} else if (!bBusy) {	// false
  			jQuery.sap.delayedCall(this._iDelayedCall, this, function() {
  				this._iDelayedCall = 1000;
  				this.removeStyleClass(sFadeCSSClass).addStyleClass("busyIndicatorFadeOff");	
  			});
  			
  		}
  		this.setProperty("busy", bBusy);
  		return;
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
  			oRm.addClass("busyIndicatorFadeOn");
  			oRm.writeClasses();
  			oRm.write(">");
  			
  			oRm.write("<div");
  			oRm.addClass("busyBox");
  			oRm.writeClasses();
  			oRm.write(">");
  			
			oRm.write("<div");
			oRm.addClass("busyIndicator");
  			oRm.writeClasses();
  			oRm.write(">");
			
			this._svgGraph(oRm, oControl);
					
			oRm.write("</div>");
			
			oRm.write("<div>");


  			oRm.write("<div");
  			oRm.addStyle("text-align", "center");
  			oRm.writeStyles();
  			oRm.write(">");
  			
			oRm.write("<img");
			oRm.addStyle("padding-top", "6rem");
			oRm.writeStyles();
			oRm.writeAttribute("src", "src/logo/booklog-white.png");
			oRm.write("/>");
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.addClass("busyCaptionSubTitle");
  			oRm.writeClasses();
  			oRm.write(">");
			oRm.write("Só um instante, estamos buscando por suas tarefas");
			oRm.write("</div>");
			
			oRm.write("</div>");
			
			oRm.write("</div>");
			
			oRm.write("</div>");
	  	},
	  	
		_svgGraph : function (oRm, oControl) {
    		oRm.write("<svg viewBox='5 0 100 100' " +
    			"style='width: 100px; margin: 0 auto; display: block; padding-bottom: 3rem' " +
    			"class='busySvg'>");
			oRm.write("<defs>");
			oRm.write("<linearGradient id='Gradient' x1='50%' y1='0%' x2='50%' y2='100%'>");
			
			oRm.write("<stop offset='0%' stop-color='#7A5FFF'>");
			oRm.write("<animate attributeName='stop-color' values='#7A5FFF; #01FF89; #7A5FFF' dur='4s' repeatCount='indefinite'></animate>");
			oRm.write("</stop>");
			
			oRm.write("<stop offset='100%' stop-color='#01FF89'>");
			oRm.write("<animate attributeName='stop-color' values='#01FF89; #7A5FFF; #01FF89' dur='4s' repeatCount='indefinite'></animate>");
			oRm.write("</stop>");
			
			oRm.write("</linearGradient>");
			oRm.write("</defs>");
			oRm.write("<circle cx='40' cy='40' r='25' fill='none'></circle>");
			oRm.write("</svg>");
	  	}
  	}
  	
  });
});