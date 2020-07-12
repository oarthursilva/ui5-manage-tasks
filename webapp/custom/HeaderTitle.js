sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("pt.com.booklog.custom.HeaderTitle", {

		/**
		 * Metadata
		 * @public
		 */
		metadata: {
			library: [
				"sap.m"
			],
			properties: {

				/**
				 * The id
				 */
				title: {
					type: "string",
					defaultValue: ""
				}
			}

		},
		/** 
		 * Called when object is being created 
		 * @public 
		 */
		onInit: function () {

		},

		exit: function () {

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
				oRm.addClass("headertitle");
				oRm.writeClasses();
				oRm.write(">");

					oRm.write("<span>");
					oRm.write(oControl.getProperty("title"));
					oRm.write("</span>");
				
				oRm.write("</div>");
			}
		}

	});
});