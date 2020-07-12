sap.ui.define([
	"sap/m/VBox"
], function (VBox) {
	"use strict";
	return VBox.extend("pt.com.booklog.custom.VBox", {

		constructor : function () {
			sap.ui.core.Control.apply(this, arguments);	
		},
		/**
		 * Metadata
		 * @public
		 */
		metadata: {
			library: [
				"sap.m"
			],
			properties: {
				"id": "string",
				"backgroundColor": "sap.ui.core.CSSColor"
				
				
			}

		},

		/** 
		 * Called when object is being created 
		 * @public 
		 */
		onInit: function () {

		},

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
		renderer: {}

	});
});