/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/tasks/Tasks/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});