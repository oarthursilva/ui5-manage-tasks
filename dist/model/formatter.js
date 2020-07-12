sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			userBookRead : function (iPagesRead, iPages ) {
				if (iPagesRead === iPages) {
					return "";
				}
				// book percentual read
				var percent = Math.floor((iPagesRead / iPages) * 100);
				
				return "You've read " + 
					iPagesRead + " of " + 
					iPages + " pages" +
					" (" + percent + "%)";
			},
			
			dateTextFormatter : function (sText, sDate) {
				return sText + " " + sDate;
				
			}

		};

	}
);