
sap.ui.define([
		"sap/ui/core/Control"
	], function (Control) {
		"use strict";
		return Control.extend("pt.com.booklog.custom.Summary", {

			/**
			 * Constructor
			 * @param {object} oAttributes The object properties
			 * @public
			 */
			constructor: function (oAttributes) {
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
						type: "string"
					},
					
					/**
					 * The leftValue
					 */
					leftValue: {
						type: "int"
					},
					
					/**
					 * The middleValue
					 */
					middleValue: {
						type: "int"
					},
					
					/**
					 * The rightValue
					 */
					rightValue: {
						type: "int"
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
	
			onAfterRendering: function (oEvent) {},
	
			onclick: function (oEvent) {},
	
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
	
					// table-wrapper
					oRm.write("<div");
					oRm.addClass("summary-wrapper");
					oRm.writeClasses();
					oRm.writeAttribute("id", oControl.getProperty("id"));
					//oRm.writeControlData(oControl);
					oRm.write(">");
					
					oRm.write("<table");
					oRm.addClass("summary-bordered");
					oRm.addClass("summary-hover");
					oRm.addClass("summary-content");
					
					oRm.writeClasses();
					oRm.writeAttribute("data-tablesaw-mode", "stack");
					oRm.write(">");
	
	        		oRm.write("<tbody>");
					oRm.write("<tr>");
					
					oRm.write("<td");
					oRm.addClass("font-size__smaller");
					oRm.addClass("font-size__bold");
					oRm.writeClasses();
					oRm.write(">");
					this._renderValue(oRm, oControl, "summary-content__do");
					oRm.write("Do");
					this._renderPercentage(oRm, oControl.getProperty("leftValue"));
					oRm.write("</td>");
					
					oRm.write("<td");
					oRm.addClass("font-size__smaller");
					oRm.addClass("font-size__bold");
					oRm.writeClasses();
					oRm.write(">");
					this._renderValue(oRm, oControl, "summary-content__doing");
					oRm.write("Doing");
					this._renderPercentage(oRm, oControl.getProperty("middleValue"));
					oRm.write("</td>");
					
					oRm.write("<td");
					oRm.addClass("font-size__smaller");
					oRm.addClass("font-size__bold");
					oRm.writeClasses();
					oRm.write(">");
					this._renderValue(oRm, oControl, "summary-content__done");
					oRm.write("Done");
					this._renderPercentage(oRm, oControl.getProperty("rightValue"));
					oRm.write("</td>");
					
					oRm.write("</tr>");
					oRm.write("</tbody>");
					oRm.write("</table>");

					oRm.write("</div>");
	
				},
				
				_renderValue : function (oRm, oControl, sClass) {
					oRm.write("<i aria-hidden='true'");
					oRm.addClass("fa");
					oRm.addClass("fa-circle");
					oRm.addClass("summary-content__margin");
					oRm.addClass(sClass);
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</i>");
				},
				
				_renderPercentage : function (oRm, sValue) {
					oRm.write("<span");
					oRm.addClass("summary-span");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write(sValue + "%");
					oRm.write("</span>");
				} 
				
			}

	});
});