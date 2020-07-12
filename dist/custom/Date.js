/* global moment:true */
sap.ui.define([
	"sap/ui/core/Control",
	"pt/com/booklog/lib/moment"
], function (Control, Moment) {
	"use strict";
	return Control.extend("pt.com.booklog.custom.Date", {

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
				}
			},
			events : {
				press : {
					enablePreventDefault : true
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

		onclick : function (oEvent) {
			$(this.getDomRef()).toggleClass("date-wrapper-content-expand");
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

				oRm.write("<div");
				oRm.writeAttribute("id", oControl.getProperty("id"));
				oRm.addClass("date-wrapper-content");
				oRm.writeClasses();
				oRm.writeControlData(oControl);
				oRm.write(">");

					this._renderDateContent(oRm, oControl);

				oRm.write("</div>");

			},

			/**
			 * Function responsible in create the first slide of Content grid object
			 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
			 * @param {sap.ui.core.Control} oControl The object core control
			 * @private
			 */
			_renderDateContent: function (oRm, oControl) {

				this._renderLeftSide(oRm, oControl);

				// article
				oRm.write("<article");
				oRm.addClass("width");
				oRm.writeClasses();
				oRm.write(">");

				// section title
				this._renderRightSide(oRm, oControl);

				oRm.write("</article>");

			},

			_renderLeftSide: function (oRm, oControl) {
				
				// the day number
				oRm.write("<span");
				oRm.addClass("fontsize__xx-large");

				oRm.writeClasses();
				oRm.write(">");
				oRm.write(moment().format("D"));
				
				oRm.write("</span>");
				// the day unit
				oRm.write("<span");
				oRm.addClass("fontsize__large");
				oRm.addClass("margin");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write(moment().format("Do").substring(2,4));
				oRm.write("</span>");
			},

			// render Title
			_renderRightSide: function (oRm, oControl) {
				// title
				oRm.write("<span");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write(moment().format("dddd"));
				oRm.write("</span>");

				oRm.write("<div>");
				// oRm.write(">");
				oRm.write("<span");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write(moment().format("MMMM"));
				oRm.write("</span>");
				oRm.write("</div>");
			}

			/**
			// current status
			_renderCurrentStatus: function (oRm, oControl) {
				oRm.write("<a");
				oRm.addClass("content-bottom__button--value");
				oRm.addClass("content-bottom__button--margin");

				// oRm.addClass(this.getStatusCSSClass(oControl.getProperty("currentStatus"), false));
				oRm.writeClasses();
				oRm.write("></a>");
			},

			getStatusCSSClass: function (iCurrentStatus, bColor) {
				if (iCurrentStatus === 1) {
					return "do" + (bColor === true ? "__color" : "");
				} else if (iCurrentStatus === 2) {
					return "doing" + (bColor === true ? "__color" : "");
				} else if (iCurrentStatus === 3) {
					return "done" + (bColor === true ? "__color" : "");
				}
				return "";
			}
			**/

		}

	});
});