/*eslint linebreak-style: ["error", "unix"]*/
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"pt/com/booklog/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("pt.com.booklog.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			
			jQuery.sap.includeStyleSheet({
			    url: jQuery.sap.getResourcePath("pt/com/booklog/css/style.css"),
			    id: "style"
			});
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set the footer model with available buttons 
			this.setModel(models.createButtonsModel(), "buttons");
		
			// create the views based on the url/hash
			this.getRouter().initialize();
			
		},
		
		/**
		 * GETTERS & SETTERS section
		 */ 
		
		/**
		 * 
		 */ 
		setBusy : function (bBusy) {
			this._busy = bBusy;
		},
		
		/**
		 * 
		 */
		getBusy : function () {
			if (this._busy === undefined) {
				return true;
			}
			return this._busy;
		},
		
		/**
		 * 
		 */
		setFooterHeight : function (iHeight) {
			this._footeriHeight = iHeight - 2;
		},
		
		/**
		 * 
		 */
		getFooterHeight : function () {
			return this._footeriHeight;
		},
		
		/**
		 * 
		 */
		setHeaderHeight : function (iHeight) {
			this._headerHeight = iHeight;
		},
		
		/**
		 * 
		 */
		getHeaderHeight : function () {
			if (!this._headerHeight) {
				return 0;
			}
			return this._headerHeight;
		}
	});
});