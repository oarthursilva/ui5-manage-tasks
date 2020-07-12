sap.ui.define([
  "sap/ui/core/Control",
  "pt/com/booklog/lib/swiper"
], function (Control, swiper) {
  "use strict";
  return Control.extend("pt.com.booklog.custom.Content", {
  
	swiper : swiper,
	
	/**
	 * Constructor
	 * @public
	 */
	constructor: function (oAttributes) {
		sap.ui.core.Control.apply(this, arguments);
	},
  
	/**
	 * Metadata
	 * @public
	 */
  	metadata : {
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
			 * The backgroundColor
			 */
			backgroundColor : {
				type: "sap.ui.core.CSSColor",
				defaultValue: "#1f2731"
			},
			
			/**
			 * The icon, based on Fontawesome
			 */
			icon : {
				type: "string",
				defaultValue: ""
			},
			
			/**
			 * The title
			 */
			title : {
				type: "string",
				defaultValue: ""
			},
			
			/**
			 * The category
			 */
			category : {
				type: "string",
				defaultValue: ""
			},
			
			/**
			 * The startDate
			 */
			startDate : {
				type : "string"
			},
			
			/**
			 * The endDate
			 */
			endDate : {
				type : "string"
			},
			
			/**
			 * The total
			 */
			total : {
				type : "int"
			},
			
			currentStatus : {
				type: "int",
				defaultValue: 0
			}
		},
		aggregations: {
			images: {
				type: "pt.com.booklog.custom.ImageCloud",
				multiple: true,
				singularName: "images"
			},
			status: {
				type: "pt.com.booklog.custom.Button",
				multiple: true,
				singularName: "status"
			}
		}
  	},
  
	/** 
	 * Called when object is being created 
	 * @public 
	 */
  	init : function() {
  	},
  	
  	onBeforeRendering : function () {},
  	
  	onAfterRendering : function (oEvent) {
		this.oSwiper = new Swiper(".swiper-container", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
    	});
  	},
  	
	onswipeleft : function () {
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
  			oRm.addClass("swiper-container");
  			oRm.writeClasses();
			oRm.writeAttribute("id", oControl.getProperty("id"));
			oRm.writeControlData(oControl);
	  		oRm.write(">");
			// wrapper
			
	  		oRm.write("<div");
			oRm.addClass("swiper-wrapper");
			oRm.addClass("content-wrapper");
			oRm.writeClasses();
	  		oRm.write(">");
	
			this._renderFirstSlide(oRm, oControl);
			this._renderSecondSlide(oRm, oControl);

			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.addClass("swiper-button-next");
			oRm.writeClasses();
	  		oRm.write("></div>");
			
	  		// end wrapper
	  		oRm.write("</div>");
	  	},
  		
		/**
		 * Function responsible in create the first slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderFirstSlide : function (oRm, oControl) {
	  		// first div opener
	  		oRm.write("<div");
			oRm.addClass("swiper-slide");
			// oRm.addClass("content-top");
			// oRm.addClass("content-radius");
			// oRm.addClass("content-shadow");
			oRm.writeClasses();
	  		oRm.write(">");
			
			// second div opener
			oRm.write("<div");
			oRm.addClass("content-article");
			// oRm.addClass("content-bottom__padding");
			oRm.writeClasses();
			
			oRm.addStyle("display", "flex");
	    	// oRm.addStyle("vertical-align", "middle");
			oRm.addStyle("background-color", oControl.getProperty("backgroundColor"));
			oRm.writeStyles();
			
	  		oRm.write(">");
	  		this._renderIcon(oRm, oControl);
			// this._renderArticle(oRm, oControl);
			
			// article
	  		oRm.write("<article");
	  		// oRm.addClass("content-article__border-bottom");
			// oRm.writeClasses();
			oRm.addStyle("padding-left", ".5rem");
			oRm.writeStyles();
	  		oRm.write(">");
	
			// section title
			this._renderTitle(oRm, oControl);

			oRm.write("</article>");
	
			// second div closer
			oRm.write("</div>");
	
			// first div closer
			oRm.write("</div>");
		},
  		
		/**
		 * Function responsible in create the second slide of Content grid object
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
		 * @param {sap.ui.core.Control} oControl The object core control
		 * @private
		 */
		_renderSecondSlide : function (oRm, oControl) {
	  		// first div opener
	  		oRm.write("<div");
			oRm.addClass("swiper-slide");
			oRm.addClass("content-top");
			oRm.addClass("content-radius");
			oRm.addClass("content-shadow");
			oRm.writeClasses();
	  		oRm.write(">");
			
			// second div opener
			oRm.write("<div");
			oRm.addClass("content-article");
			oRm.addClass("content-bottom__padding");
			oRm.writeClasses();
			
			oRm.addStyle("display", "flex");
	    	oRm.addStyle("vertical-align", "middle");
			oRm.addStyle("background-color", oControl.getProperty("backgroundColor"));
			oRm.writeStyles();
			
	  		oRm.write(">");
	  		this._renderIcon(oRm, oControl);
			this._renderArticle(oRm, oControl);
	
			// second div closer
			oRm.write("</div>");
	
			// first div closer
			oRm.write("</div>");	
		},
  		
  		// render text
  		_renderText : function (oRm, sText) {
  			oRm.write("<div");
				oRm.addClass("content-bottom__meta");
				oRm.writeClasses();
	  			oRm.write(">");
	  		
  				oRm.write("<time>");
	        	oRm.write(sText);
	  			oRm.write("</time>");
	  		
	  		oRm.write("</div>");
  		},
  		
  		// render Title
  		_renderTitle : function (oRm, oControl) {
			// title
	  		oRm.write("<div");
	  		oRm.addClass("content-title__font-family");
			oRm.writeClasses();
			oRm.write(">");
	  		oRm.write(oControl.getProperty("title"));
	  		oRm.write("</div>");
	  		
	  		oRm.write("<div");
			oRm.addStyle("padding-top", ".15rem");
			oRm.writeStyles();
			oRm.write(">");
	  			this._renderCurrentStatus(oRm, oControl);
		  		oRm.write("<span");
				oRm.write(">");
		  		oRm.write(oControl.getProperty("category"));
	  			oRm.write("</span>");
	  		oRm.write("</div>");
	  		
	  		/*
	  		if (oControl.getProperty("startDate")) {
				this._renderText(oRm, oControl.getProperty("startDate"));
			
	  		} else if (oControl.getProperty("endDate")) {
				this._renderText(oRm, oControl.getProperty("endDate"));
				
			} else {
				this._renderText(oRm, "Not started");
			}
			*/
	  		
  		},
  		
  		
  		// current status
  		_renderCurrentStatus : function (oRm, oControl) {
			oRm.write("<a");
			oRm.addClass("content-bottom__button--value");
			oRm.addClass("content-bottom__button--margin");
			
			oRm.addClass(this.getStatusCSSClass(oControl.getProperty("currentStatus"), false));
			oRm.writeClasses();
			oRm.write("></a>");
  		},
  		
  		
  		getStatusCSSClass : function (iCurrentStatus, bColor) {
  			if (iCurrentStatus === 1) {
				return "do"    + (bColor === true ? "__color" : "");			
			} else if (iCurrentStatus === 2) {
				return "doing" + (bColor === true ? "__color" : "");
			} else if (iCurrentStatus === 3) {
				return "done"  + (bColor === true ? "__color" : "");
			}
			return "";
  		},
  		
  		
  		_renderIcon: function (oRm, oControl) {
			// oRm.write("<div>");
			
			oRm.write("<div");
			oRm.addClass("content-article-icon");
			oRm.writeClasses();
			oRm.write(">");
			
			// the icon goes here
			oRm.write("<i");
			oRm.addClass("fas");
			oRm.addClass("fa-" + oControl.getProperty("icon"));
			oRm.addClass(this.getStatusCSSClass(oControl.getProperty("currentStatus"), true));
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("</i>");
			
			oRm.write("</div>");
			
			//oRm.write("</div>");
  		},
  		
  		
  		// title
  		_renderArticle : function (oRm, oControl) {
			return;
  		},
  		
  		// render Status
  		_renderStatus : function (oRm, oControl) {
  			var oStatus = oControl.getAggregation("status");
	  		if (!oStatus || oStatus.length === 0) {
					// no data found on images aggregation
					
			} else {
				for (var i = 0, j = 1; i < oStatus.length; i++,j++) {
					//oRm.write("<span>");
					
					oRm.renderControl(oStatus[i]);
					//oRm.write("</span>");
				}
			}
  		}
  	}
  	
  });
});