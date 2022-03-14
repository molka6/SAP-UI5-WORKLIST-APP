sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict";
      return Controller.extend("worklist.controller.test", {
            onInit : function () {

    
            },
   
onNavBack: function () {
    var oHistory = History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();
   if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("test", true);
    }
}

    
    
    
        });
    });
    
    