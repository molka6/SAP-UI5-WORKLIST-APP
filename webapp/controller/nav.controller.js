sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict";
      return Controller.extend("worklist.controller.nav", {
            onInit : function () {
            },


    NavTotest : function (oEvent) {
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("test");
        
    },



    CustomersLinkPress : function (oEvent) {
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("worklist");
        
    },


    EmployeesLinkPress : function (oEvent) {
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("worklist1");
        
    } ,
    
    NavTotest2 : function (oEvent) {
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("test2");
        
    },





   
        });
    });
    
    