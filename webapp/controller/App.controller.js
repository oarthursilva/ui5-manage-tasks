/*eslint linebreak-style: ["error", "windows"]*/
sap.ui.define([
	"pt/com/booklog/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("pt.com.booklog.controller.App", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		onInit: function () {
			
			var fnSetAppNotBusy,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			// Model used to manipulate control states
			var oViewModel = this._createViewModel();
				//oHeader = this.byId("toolheader"),
				//oFooter = this.byId("footer");

			// busy
			//this.setModel(oViewModel, "appView");
			this.getOwnerComponent().setModel(oViewModel, "appView");

			fnSetAppNotBusy = function () {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};

		},
		
		onAfterRendering : function (oEvent) {
			/*
			var oHBox = this.byId("hbox_top"),
				iLength = $("#" + oHBox.getId()).height()
				
			if (iLength) {
				this.getOwnerComponent().setHeaderHeight(iLength);
			}
			*/
		},
		
		
		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		/**
		 * Creates a JSONModel for worklist view
		 * @returns {sap.uimodel.json.JSONModel} the model reference
		 * @private
		 */
		_createViewModel: function () {
			return new JSONModel({
				busy: true,
				delay: 0
			});
		},

		/**
		 * Shows the selected item on the object page
		 * On phones a additional history entry is created
		 * @param {sap.m.ObjectListItem} oItem selected Item
		 * @private
		 */
		_showProfile: function (oItem) {
			jQuery.sap.delayedCall(1000, this, function () {
				this.getRouter().navTo("profile", {});
			});
		},

		_changeSelection: function (sSelection) {
			var oModel = this.getModel("buttons"),
				sActive = oModel.getProperty("/active");

			if (sActive === sSelection) {
				return false;
			}

			// set busy true
			this.getOwnerComponent().getModel("appView").setProperty("/busy", true);

			oModel.setProperty("/" + sActive, false);
			oModel.setProperty("/" + sSelection, true);
			oModel.setProperty("/active", sSelection);

			//if (!sap.ui.Device.system.desktop) {
			this._changeBlockLayout(sActive);
			//}
			return true;
		}

	});
});