sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("br.com.tasks.Tasks.control.SideBar", {

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
				oRm.addClass("page-wrapper");
				oRm.addClass("chiller-theme");
				oRm.addClass("toggled");
				oRm.addClass("container");
				oRm.writeClasses();
				oRm.write(">");
				
				oRm.write("<nav");
				oRm.addClass("sidebar-wrapper");
				oRm.addClass("w-25");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<div");
				oRm.addClass("sidebar-content");
				oRm.writeClasses();
				oRm.write(">");

				this._renderSideBarBrand(oRm, oControl);
				//this._renderLogo(oRm, oControl);
				//this._renderCenter(oRm, oControl);
				//this._renderEnd(oRm, oControl);

				oRm.write("</div>");
				
				oRm.write("</nav>");
				
				oRm.write("</div>");
				
			},

			_renderSideBarBrand: function (oRm, oControl) {
				oRm.write("<div");
				oRm.addClass("sidebar-brand");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<a");
				oRm.writeAttribute("href", "#");
				oRm.write(">");
				oRm.write("PRO SIDEBAR");
				oRm.write("</a>");
				
				oRm.write("</div>");

	        //	<a href="#">pro sidebar</a>
	        //	<div id="close-sidebar">
	        //		<i class="fas fa-times"></i>
	        //	</div>

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