sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict";
      return Controller.extend("worklist.controller.test2", {
            onInit : function () {
            },

    
    onTableSettings: function(oEvent) { 
        // Open the Table Setting dialog 
        this._oDialog = sap.ui.xmlfragment("worklist.view.SettingsDialog", this);
        this._oDialog.open();
      },


      opendialog : function(oEvent) { 
        // Open the Table Setting dialog 
        this._oDialog = sap.ui.xmlfragment("worklist.view.Dialog", this);
        this._oDialog.open();
      },



      onConfirm: function(oEvent) {
        var oView = this.getView();
        var oTable = oView.byId("idTable");
        var mParams = oEvent.getParameters();
        var oBinding = oTable.getBinding("items");
        // apply grouping 


        var aSorters = [];
        if (mParams.groupItem) {
          var sPath = mParams.groupItem.getKey();
          var bDescending = mParams.groupDescending;
          var vGroup = function(oContext) {
            var name = oContext.getProperty("ShipperID");
            return {
              key: name,
              text: name
            };
          };
          aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
        }



        // apply sorter 
        var sPath = mParams.sortItem.getKey();
        var bDescending = mParams.sortDescending;
        aSorters.push(new sap.ui.model.Sorter(sPath, bDescending));
        oBinding.sort(aSorters);




        // apply filters 
        var aFilters = [];
        for (var i = 0, l = mParams.filterItems.length; i < l; i++) {
          var oItem = mParams.filterItems[i];
          var aSplit = oItem.getKey().split("___");
          var sPath = aSplit[0];
          var vOperator = aSplit[1];
          var vValue1 = aSplit[2];
          var vValue2 = aSplit[3];
          var oFilter = new sap.ui.model.Filter(sPath, vOperator, vValue1, vValue2);
          aFilters.push(oFilter);
        }
        oBinding.filter(aFilters);
      },



      
      onConfirm2: function(oEvent) {
        var oView = this.getView();
        var oTable = oView.byId("idTable");
        var mParams = oEvent.getParameters();
        var oBinding = oTable.getBinding("items");
        // apply grouping 


        var aSorters = [];
        if (mParams.groupItem) {
          var sPath = mParams.groupItem.getKey();
          var bDescending = mParams.groupDescending;
          var vGroup = function(oContext) {
            var name = oContext.getProperty("ShipperID");
            return {
              key: name,
              text: name
            };
          };
          aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
        }



        // apply sorter 
        var sPath = mParams.sortItem.getKey();
        var bDescending = mParams.sortDescending;
        aSorters.push(new sap.ui.model.Sorter(sPath, bDescending));
        oBinding.sort(aSorters);




    
       
      }
    
    
    
    
        });
    });
    
    