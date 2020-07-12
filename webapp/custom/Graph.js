sap.ui.define([
		"sap/ui/core/Control"
	], function (Control) {
		"use strict";
		return Control.extend("pt.com.booklog.custom.Graph", {

			/**
			 * Constructor
			 * @public
			 */
			constructor: function (oAttributes) {
	
				// this.path = path;
				// this.text = text;
				this._R = 10;
				this._start = .01;
				this._divisions = 100;
				this._vel = 0;
				
				this._rid = null;
				this._spring = 0.09;
				this._friction = 0.8;
	
				// target value
				this._iTarget = oAttributes.target;
	
				sap.ui.core.Control.apply(this, arguments);
			},
	
			/**
			 * Metadata
			 * @public
			 */
			metadata: {
				interfaces: [
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
					id: {
						type : "string"
					},
	
					/**
					 * The target
					 */
					target: {
						type : "int"
					},
					
					/**
					 * The color
					 */
					color : {
						type : "string"
					},
					
					/**
					 * The width
					 */
					width : {
						type : "string"

					},
					/**
					 * The width
					 */
					 caption : {
					 	type : "string"
					 }
					
				}
			},
	
			init: function () {},
	
			exit: function () {},
	
			/** 
			 * Called when object is being created 
			 * @public 
			 */
			onInit: function () {},
	
			onBeforeRendering: function (oEvent) {},
	
			onAfterRendering: function (oEvent) {
				
				if (this._onAfterRendering === true) {
					return ;
				}
				this._onAfterRendering = true;
				
				
				var that = this;
				
				jQuery.sap.delayedCall(7000, this, function() {
				// svg
				this._svg = this.getDomRef();
				
				// path
				this._path = this._svg.querySelector("path");
				
				// text 
				this._text = this._svg.querySelector("text");
				this._text.textContent = this._iTarget + "%";
				
				this._stylePath(this._iTarget);
				
				function Frame() {
					that._rid = window.requestAnimationFrame(Frame);
					that._updateStrokeLength();
				}
				Frame();
				
				});
				
			},

			_stylePath: function (iTarget) {
				var d = "M" + this._R + ",0  A" + this._R + "," + this._R + " 0 1,1 " + this._R + ",-.01z";
				this._path.setAttributeNS(null,"d",d);
				
				this._pathLength = this._path.getTotalLength();
				this._unit = this._pathLength / this._divisions;
	
				this._strokeLength = this._start * this._unit;
				
				this._iTarget = iTarget * this._unit;
				this._path.style.strokeDasharray = 
					this._strokeLength +  ", " + ( this._pathLength - this._strokeLength );
			},
	
			_updateStrokeLength : function () {
				
			    this._dist = this._iTarget - this._strokeLength;
			    this._acc = this._dist * this._spring;
			    this._vel += this._acc;
			    this._vel *= this._friction;
			    this._strokeLength += this._vel;
			    this._path.style.strokeDasharray = 
			    	this._strokeLength +  ", " + ( this._pathLength - this._strokeLength );
			},
			
			
			
	
			onclick: function (oEvent) {
				
				//this._stylePath(20);
				//this.Frame();
				//debugger;
				//$(this).parent().find( 'div' ).toggleClass( 'content-bottom__collapse--active' );
				//$(this).toggleClass('expanded');
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
				render: function (oRm, oControl) {
				
					// graph-wrapper
					oRm.write("<div");
					oRm.addClass("graph-wrapper");
					oRm.addClass("graph__width");
					oRm.writeClasses();
					//oRm.addStyle("width", oControl.getProperty("width"));
					//oRm.writeStyles();
					oRm.writeAttribute("id", oControl.getProperty("id"));
					oRm.write(">");
	
					oRm.write("<div");
					oRm.addClass("graph-innerdiv");
					oRm.writeClasses();
					
					oRm.writeControlData(oControl);
					
					//oRm.write("contenteditable");
					oRm.write(">");
					
					/**
					debugger;
					$.get({
					    async: false,
					    url:  "src/test.svg",
					    success: function(data) {
					        debugger;
					        var store = SVG($('svg', data).html());
					    }
					});
					**/
					
					//oRm.write("<div");
					//oRm.addStyle("content", "url(" +
					//	"src/test.svg" +
					//	")");
					//oRm.writeStyles();
					//oRm.write(">");
					//oRm.write("</div>");
					
					this.svgGraph(oRm, oControl);
					
					oRm.write("<p");
					oRm.addClass("graph-caption");
					oRm.addClass("graph-caption__font-size");
					oRm.writeClasses();
					oRm.addStyle("color", oControl.getProperty("color"));
					oRm.writeStyles();
					oRm.write(">");
					oRm.write(oControl.getProperty("caption"));
					oRm.write("</p>");
					
					oRm.write("</div>");
					oRm.write("</div>");
	
				},
				
				svgGraph : function (oRm, oControl) {
					oRm.write("<svg");
					oRm.writeAttribute("version", "1.1");
					oRm.writeAttribute("viewBox", "10 10 30 30");
					oRm.writeAttribute("xml:space", "preserve");
					oRm.writeAttribute("xmlns", "http://www.w3.org/2000/svg"); 
					oRm.writeAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
					oRm.writeAttribute("width", "100%");
					oRm.write(">");
					
					oRm.write("<defs>");
					
					oRm.write("<style>");
					//oRm.write(".cls-circle {fill: none;stroke-width: 2;stroke: #a8c8f1;}");
					oRm.write("</style>");
					
					oRm.write("<style>");
					//oRm.write(".cls-path {stroke: #1ed5f6;}");
					oRm.write("</style>");
					
					oRm.write("<style>");
					//oRm.write(".cls-text {dominant-baseline: central;text-anchor: middle;font-size: 5px;fill: Linen;}");
					oRm.write("</style>");
					
					oRm.write("<style>");
					//oRm.write(".cls-textformat { background: #1e2730;font-family: Arial;font-weight: 100;color: rgba(0, 0, 0, 0.2);}");
					oRm.write("</style>");
					
					oRm.write("</defs>");
					
					
					oRm.write("<g");
					oRm.writeAttribute("transform","translate(25 25) rotate(-90)");
					oRm.write(">");
					
					// circle
					oRm.write("<circle class='cls-circle' r='10' />");
					// path
					//oRm.write("<path id='graph-id' class='cls-path' d='M10,0  A10,10 0 1,1 10,-.01z'></path>");
					oRm.write("<path id='graph-id' class='cls-path' d='' ");
					oRm.addStyle("stroke", oControl.getProperty("color"));
					oRm.writeStyles();
					oRm.addClass("cls-animation");
					oRm.writeClasses();
					oRm.write("></path>");
					
					oRm.write("</g>");
					
					oRm.write("<text class='cls-text cls-textformat' x='25' y='25' >0</text>");
	
					oRm.write("</svg>");
				}
				
			}

	});
});