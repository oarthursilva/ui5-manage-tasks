sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("pt.com.booklog.custom.ScrollContainer", {

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
			aggregations: {
				content: {
					type: "sap.ui.core.Control",
					multiple: true,
					singularName: "content"
				}
			}
		},

		/** 
		 * Called when object is being created 
		 * @public 
		 */
		init: function () {},

		onBeforeRendering: function () {},

		onAfterRendering: function () {
			// <!-- Initialize Swiper -->
			/**
			var swiper = new Swiper(".swiper-container", {
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: true,
				scrollbar: {
					el: ".swiper-scrollbar"
				},
				mousewheel: true
			});
			**/
		},

		onswipeleft: function () {},

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

				// <!-- Swiper -->
				oRm.write("<div");
				oRm.addClass("scrollbar-wrapper");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<div");
				oRm.addClass("scrollbar-content");
				oRm.writeClasses();
				oRm.write(">");

				//oRm.write("<div");
				//oRm.addClass("scrollbar-slide");
				//oRm.writeClasses();
				//oRm.write(">");

				var oContent = oControl.getAggregation("content");
				if (!oContent || oContent.length === 0) {
					// no data found on images aggregation
						
				} else {
					for (var i = 0; i < oContent.length; i++) {
						oRm.renderControl(oContent[i]);
					}
				}

				// swiper-slide
				//oRm.write("</div>");

				// swiper-wrapper
				oRm.write("</div>");
				
				/**
				// swiper scrollbar
				oRm.write("<div");
				oRm.addClass("swiper-scrollbar");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write("</div>");
				**/
				
				// swiper-container
				oRm.write("</div>");
			}
		}
	});
});