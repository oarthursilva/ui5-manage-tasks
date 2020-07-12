sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("br.com.tasks.Tasks.control.FixedHeader", {

		/**
		 * Attributes
		 * @public
		 */

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
				 * The title
				 */
				title: {
					type: "string",
					defaultValue: "title"
				},

				/**
				 * The subtitle
				 */
				subtitle: {
					type: "string",
					defaultValue: "",
					multiple: false
				},

				src: {
					type: "string"
				},

				width: {
					type: "int",
					defaultValue: 30
				},

				height: {
					type: "int",
					defaultValue: 30
				}

			},
			events: {},
			aggregations: {
				searchBar: {
					type: "br.com.tasks.Tasks.control.SearchBar",
					multiple: false,
					singularName: "searchBar"
				},
				links: {
					type: "br.com.tasks.Tasks.control.HeaderLink",
					multiple: true,
					singularName: "links"
				}
			},
			defaultAggregation: "searchBar"
		},

		/** 
		 * Called when object is being created 
		 * @public 
		 */
		onInit: function () {},

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
				oRm.addClass("cnavbar-background");
				oRm.writeClasses();
				oRm.write(">");
				
				//<nav class="navbar navbar-inverse ">
				oRm.write("<nav");
				oRm.addClass("navbar");
				oRm.addClass("container");

				oRm.addClass("navbar-dark");
				oRm.addClass("navbar-expand-md");
				oRm.addClass("navbar-fixed-top");

				oRm.writeClasses();
				oRm.write(">");

				this._renderLogo(oRm, oControl);

				this._renderCenter(oRm, oControl);

				this._renderEnd(oRm, oControl);

				oRm.write("</nav>");
				
				oRm.write("</div>");
			},

			/**
			 * Function responsible in create the first slide of Content grid object
			 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
			 * @param {sap.ui.core.Control} oControl The object core control
			 * @private
			 */
			_renderLogo: function (oRm, oControl) {
				oRm.write("<div");

				oRm.addClass("order-0");
				oRm.addClass("w-25");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<a");
				oRm.writeAttribute("href", "#");
				oRm.addClass("navbar-brand");
				oRm.addClass("mr-3");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<img");
				oRm.writeAttribute("src", oControl.getSrc());
				oRm.writeAttribute("width", oControl.getWidth());
				oRm.writeAttribute("height", oControl.getHeight());
				oRm.addClass("d-inline-block");
				oRm.addClass("align-top");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("</a>");

				oRm.write("<span");
				oRm.addClass("headerTitle");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write(oControl.getTitle());
				oRm.write("</span>");

				oRm.write("</div>");
			},

			/**
			 * 
			 */
			_renderCenter: function (oRm, oControl) {
				oRm.write("<div");
				oRm.addClass("navbar-collapse");
				oRm.addClass("collapse");
				//oRm.addClass("justify-content-center");
				oRm.addClass("w-50");
				oRm.writeClasses();
				oRm.write(">");

				this._renderSearchBar(oRm, oControl);

				oRm.write("</div>");

			},

			/**
			 * 
			 */
			_renderEnd: function (oRm, oControl) {

				oRm.write("<div");
				oRm.addClass("navbar-collapse");
				oRm.addClass("collapse");
		        oRm.addClass("justify-content-end");
				//oRm.addClass("order-0");
				oRm.addClass("w-25");
				oRm.writeClasses();
				oRm.write(">");

		        oRm.write("<ul"); 
		        oRm.addClass("navbar-nav");
				oRm.writeClasses();
		        oRm.write(">"); 

				var iTotal = oControl.getLinks().length - 1;
				$.each(oControl.getLinks(), function (iKey, oObject) {
					// the custom Buttom object
					oRm.renderControl(oObject);

					if (iKey === iTotal) {
						//oRm.write("</div>");
					}

				});

		        oRm.write("</ul>");
		        
				oRm.write("</div>");

			},

			/**
			 * Function responsible in create the first slide of Content grid object
			 * @param {sap.ui.core.RenderManager} oRm The RenderManager class
			 * @param {sap.ui.core.Control} oControl The object core control
			 * @private
			 */
			_renderSearchBar: function (oRm, oControl) {
				var oSearchBar = oControl.getSearchBar();

				oRm.write("<div");
				oRm.addClass("input-group");
				oRm.addClass("justify-content-center");
				oRm.writeClasses();
				oRm.write(">");

				// the custom Buttom object
				oRm.renderControl(oSearchBar);

				oRm.write("</div>");
			}
		}

	});
});