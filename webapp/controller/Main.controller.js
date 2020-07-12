sap.ui.define([
	"pt/com/booklog/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"pt/com/booklog/custom/Graph",
	"pt/com/booklog/model/formatter"

], function (BaseController, JSONModel, Graph, formatter) {
	"use strict";

	return BaseController.extend("pt.com.booklog.controller.Main", {

		formatter: formatter,
		iInterval: 2000,

		onInit: function () {

			var oViewModel = this._createViewModel(),

				// objects
				oHBoxGraph = this.byId("hbox_graph"),
				oHeader = this.byId("header"),
				oVBoxOngoing = this.byId("vbox_ongoing"),
				oScroll = this.byId("scroll"),
				oContent = this.byId("content"),
				// booleans
				isExpanded = false;

			// Control state model
			this.setModel(oViewModel, "mainView");

			// Internal interval control
			this._modelServices();

			// load mock data
			this.setModel(this.getOngoingCollection(), "ongoing");

			// load mock data
			this.setModel(this.getIncomingCollection(), "incoming");

			// load mock data
			this.setModel(this.getCompleteCollection(), "complete");

			// header
			if (oHeader) {
				oHeader.addEventDelegate({
					onAfterRendering: function (oAfterRenderingEvent) {
						var oModel = this.oView.getModel("mainView");
						oModel.setProperty("/header", false);
					}
				}, this);
			}

			// vbox_ongoing
			if (oVBoxOngoing) {
				oVBoxOngoing.addEventDelegate({
					onAfterRendering: function (oAfterRenderingEvent) {
						var oModel = this.oView.getModel("mainView");
						oModel.setProperty("/vbox_ongoing", false);
					}
				}, this);
			}

			// content
			if (oContent) {
				oContent.addEventDelegate({
					onAfterRendering: function (oAfterRenderingEvent) {
						var oModel = this.oView.getModel("mainView");
						oModel.setProperty("/content", false);
					}
				}, this);
			}

			/*-----------------------------------------------------------------
			 * scroll event for summary.js control
			 * ---------------------------------------------------------------*/
			
			this.byId("scroll").attachBrowserEvent("scroll", function(oEvent) {
				var oSummary = this.oView.byId("summary"),
					oScroll = this.oView.byId("scroll");
					// iGraphHeight = this.byId("hbox_graph").getDomRef().offsetHeight - 50;
				
				if (oScroll.getDomRef().scrollTop <= 0) {
					oSummary.removeStyleClass("summary-wrapper--down").addStyleClass("summary-wrapper");
					
				} else {
					oSummary.removeStyleClass("summary-wrapper").addStyleClass("summary-wrapper--down");
				}
				
			}, this);
			

			/**
			 * Commented, no longer needed
			 * 
			 */
			if (oHeader) {
				/*
				oHeader.attachBrowserEvent("click", function(oEvent) {
					var sHeight = $( window ).height() + "px",
						 sWidth = $( window ).width() + "px",
						oDomRef = $("#" + this.getId());
					
					// is screen expanded ?
					isExpanded = isExpanded ? false : true;
					
					if (isExpanded) {
						oDomRef.css("min-height", sHeight);
						oDomRef.css("max-height", sHeight);
						oDomRef.css("min-width", sWidth);
						oDomRef.css("max-width", sWidth);
						
					} else {
						oDomRef.css("min-height", "");
						oDomRef.css("max-height", "");
						oDomRef.css("min-width", "");
						oDomRef.css("max-width", "");
					}
				});
				*/
			}

			oScroll.attachBrowserEvent("ontouchmove", function (oEvent) {
				oEvent.preventDefault();
			});

			/*
			oLayoutBody.addEventDelegate({
				onAfterRendering : function(oAfterRenderingEvent) {
					//debugger;
					var oScroll = this.oView.byId("scroll"),
						//oScrollMenu = this.oView.byId("scroll_menu"),
						iHeight = 0,
						oModel = this.oView.getModel("mainView");
						
					oModel.setProperty("/blocklayoutcell_body", false);
					
					if (oScroll) {
						iHeight = $( window ).height();
						//oScroll.setHeight(sHeight + "px");	
					}
				}
			}, this);
			*/
			/*
			oFixFlex.addEventDelegate({
				onAfterRendering : function(oAfterRenderingEvent) {
					//var oHBox = this.oView.byId("hbox_graph");
				}
			}, this);
			*/

			this.getRouter().getRoute("main").attachPatternMatched(this._onRouteMatched, this);
		},

		onAfterRendering: function () {
			var myFullpage = new fullpage("#" + this.byId("mainView").getId(), {
				// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
			});

		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Event handler when a grid item gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		 */
		onPress: function (oEvent) {
			// The source is the list item that got pressed
			this._showProfile(oEvent.getSource());
		},

		/**
		 * Event handler when the button show images gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		
		onShowImgPress : function (oEvent) {
			// The source is the list item that got pressed
			var oModel = this.getModel("mainView"),
				bPressed = oEvent.getParameter("pressed");
				
			oModel.setProperty("/imgReduced", bPressed);
		},
		*/

		/* =========================================================== */
		/* begin: internal methods                                     */
		/* =========================================================== */

		_createViewModel: function () {
			return new JSONModel({
				busy: true,
				delay: 0,

				// control busy state
				verticallayout: false,
				blocklayout: false,
				blocklayoutcell_menu: false,
				blocklayoutcell_body: false,
				fixflex_content: false,
				date: false,
				header: true,
				summary : true,
				//hbox_graph : false,
				//vbox_ongoing : true,
				// content : true,

				title: this.getResourceBundle().getText("mainTitleCount", [0]),
				noDataText: this.getResourceBundle().getText("mainNoDataText")
			});
		},

		_modelServices: function () {
			var oModel = this.oView.getModel("mainView"),
				oView = this.oView,
				iInterval = this.iInterval,
				oIntervalHandle = this._intervalHandle,

				// oController = oView.getController(),
				oComponent = oView.getController().getOwnerComponent(),
				oAppModel = oComponent.getModel("appView");

			if (oAppModel) {
				oAppModel.setProperty("/busy", false);
			}

			oIntervalHandle = setInterval(function () {

				if ((oModel.getProperty("/header") === false) &&
					(oModel.getProperty("/verticallayout") === false) &&
					// ( oModel.getProperty("/blocklayoutcell_menu") === false )	&&
					// ( oModel.getProperty("/blocklayoutcell_body") === false )	&& 
					// ( oModel.getProperty("/fixflex_content") === false )		&&
					// ( oModel.getProperty("/date") === false )					&&
					// ( oModel.getProperty("/summary") === false )			&&
					// ( oModel.getProperty("/hbox_graph") === false )			&& 
					(oModel.getProperty("/vbox_ongoing") === false)) {
					// ( oModel.getProperty("/content") === false ) ) {

					var oScroll = oView.byId("scroll"),
						oHeader = oView.byId("header"),
						sHeight = 0;

					if (oScroll) {

						sHeight = $(window).height()
							// - oComponent.getFooterHeight()			// footer height

						- $("#" + oHeader.getId()).height() // header height
							- 100
						// - $("#" + oView.byId("date").getId()).height()	// date height
						+ ( $("#" + oView.byId("summary").getId()).height() - 5);

						oScroll.setHeight(sHeight + "px");
					}

					//oModel.setProperty("/busy", false);
					//oPage.removeStyleClass("appPage--busy");

					oComponent.getModel("appView").setProperty("/busy", false);

					// clear interval
					clearInterval(oIntervalHandle);

				}
			}, iInterval);
		},

		/**
		 * If the main route was hit (empty hash) so it' necessary to
		 * highlight the first icon (home) of the ToolBar.
		 * @private
		 */
		_onRouteMatched: function () {
			var oModel = this.getOwnerComponent().getModel("buttons"),
				oView = this.getView(),
				sActive = oModel.getProperty("/active"),

				layoutMenu = oView.byId("blocklayoutcell_menu"),
				layoutBody = oView.byId("blocklayoutcell_body");

			if (sActive === "menu") {
				layoutMenu.removeStyleClass("sapUiVisibleOnlyOnDesktop");
				layoutBody.addStyleClass("sapUiVisibleOnlyOnDesktop");

			} else if (sActive === "home") {
				layoutMenu.addStyleClass("sapUiVisibleOnlyOnDesktop");
				layoutBody.removeStyleClass("sapUiVisibleOnlyOnDesktop");
			}
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
		}

	});
});