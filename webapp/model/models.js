sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		/**
		 * Convenience method for device model creation.
		 * @public
		 * @returns {sap.ui.model.json.JSONModel} the model contaning device types
		 */
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		/**
		 * Method for the buttons on toolbar (top and bottom) model creation.
		 * @public
		 * @returns {sap.ui.model.json.JSONModel} the model contaning footer active options
		 */
		createButtonsModel: function() {
			var oModel = new JSONModel({
					profile : false,
					home : false, 
					search : false,
					edit : false,
					menu : false,
					active : ""
				});
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}
	};
});