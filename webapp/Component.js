jQuery.sap.declare("com.sap.cd.fb4u.ui5.ess.choiceESS.HBR_ZESS_CHOICE2.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "com.sap.cd.fb4u.ui5.ess.choiceESS",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/FB4UUI/UI5_ESS_CHOICE2"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.com.sap.cd.fb4u.ui5.ess.choiceESS.Component.extend("com.sap.cd.fb4u.ui5.ess.choiceESS.HBR_ZESS_CHOICE2.Component", {
	metadata: {
		manifest: "json"
	}
});