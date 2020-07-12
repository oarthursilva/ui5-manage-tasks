/*eslint linebreak-style: ["error", "windows"]*/
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	], function (Controller) {
		"use strict";

		return Controller.extend("pt.com.booklog.controller.BaseController", {

			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this component
			 */
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			/**
			 * Convenience method for getting the view model by name.
			 * @public
			 * @param {string} [sName] the model name
			 * @returns {sap.ui.model.Model} the model instance
			 */
			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			/**
			 * Convenience method for setting the view model.
			 * @public
			 * @param {sap.ui.model.Model} oModel the model instance
			 * @param {string} sName the model name
			 * @returns {sap.ui.mvc.View} the view instance
			 */
			setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},

			/**
			 * Getter for the resource bundle.
			 * @public
			 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
			 */
			getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},


			/**
			 * Convenience method for getting the BookCollection model.
			 * @public
			 * @returns {sap.ui.model.Model} oActivitiesCollection the model instance
			 */
			getActivitiesCollection : function() {
				return this.getOwnerComponent().getModel("ActivitiesCollection");
			},


			/**
			 * Convenience method for getting the CompleteCollection model.
			 * @public
			 * @returns {sap.ui.model.Model} oCompleteCollection the model instance
			 */
			getCompleteCollection : function() {
				return this.getOwnerComponent().getModel("CompleteCollection");
			},
			
			
			/**
			 * Convenience method for getting the IncomingCollection model.
			 * @public
			 * @returns {sap.ui.model.Model} oIncomingCollection the model instance
			 */
			getIncomingCollection : function() {
				return this.getOwnerComponent().getModel("IncomingCollection");
			},
			
			
			/**
			 * Convenience method for getting the OngoingCollection model.
			 * @public
			 * @returns {sap.ui.model.Model} oOngoingCollection the model instance
			 */
			getOngoingCollection : function() {
				return this.getOwnerComponent().getModel("OngoingCollection");
			},
			

			/**
			 * Convenience method for getting the UserCollection model.
			 * @public
			 * @returns {sap.ui.model.Model} oUserCollection the model instance
			 */
			getUserCollection : function() {
				return this.getOwnerComponent().getModel("UserCollection");
			},
			

			/**
			 * Getter for the resource bundle.
			 * @public
			 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
			 */
			getErrorHandler : function () {
				return this.getOwnerComponent()._oErrorHandler;
			},

			/**
			 * Event handler when the share by E-Mail button has been clicked
			 * @public
			 */
			onShareEmailPress : function () {
				var oViewModel = (this.getModel("mainView"));
				sap.m.URLHelper.triggerEmail(
					null,
					oViewModel.getProperty("/shareSendEmailSubject"),
					oViewModel.getProperty("/shareSendEmailMessage")
				);
			}

		});

	}
);