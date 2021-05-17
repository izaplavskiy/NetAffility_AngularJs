// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import {AppComponent} from "../components/start-app/start-app.component.ts";

"use strict";

let app = angular.module('netaffinityApp', ['ngMaterial', 'ngSanitize', 'ngAnimate']);

// theme disabling
// app.config(function($mdThemingProvider) {$mdThemingProvider.disableTheming();})

app.controller("menuCtrl", function ($scope) {
  $scope.menuitems = [
    {
      icon: 'mdi-view-dashboard',
      content: 'Dashboard'
    },
    {
      icon: 'mdi-bed',
      content: 'Rooms'
    },
    {
      icon: 'mdi-star',
      content: 'Package'
    },
    {
      icon: 'mdi-palette',
      content: 'Design'
    }
    {
      icon: 'mdi-credit-card-outline',
      content: 'Billing'
    },
    {
      icon: 'mdi-cog',
      content: 'Settings'
    }
  ];

  $scope.setMaster = function(section) {
    $scope.selected = section;
  }

  $scope.isSelected = function(section) {
      return $scope.selected === section;
  }
})

app.controller("dialogCtrl", function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvanced = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'src/components/dialogs/dialog.html',
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application to prevent interaction outside of dialog
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
    })
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };
  }
})

app.controller("recentTableCtrl", function ($scope) {
  $scope.rows = [
    {
      date: '30/01/2021',
      name: 'Miss Mathilde Stamm',
      amount: '€118',
      status: 'Active',
    },
    {
      date: '20/12/2020',
      name: 'Amber Feeney PhD',
      amount: '€132',
      status: 'Inative',
    },
    {
      date: '30/01/2021',
      name: 'Mr. Sammie Hirthe',
      amount: '€91',
      status: 'Active',
    },
    {
      date: '30/01/2021',
      name: 'Conor Littel',
      amount: '€113',
      status: 'Inative',
    },
    {
      date: '06/06/2017',
      name: 'Reba Doyle',
      amount: '€314',
      status: 'Active',
    },
    {
      date: '20/04/2017',
      name: 'Karelle Murazik',
      amount: '€284',
      status: 'Inative',
    },
    {
      date: '30/01/2021',
      name: 'Miss Mathilde Stamm',
      amount: '€113',
      status: 'Active',
    },
    {
      date: '30/01/2021',
      name: 'Amber Feeney PhD',
      amount: '€113',
      status: 'Active',
    },
  ];
})

// Register all of our components
.component(AppComponent.componentName, AppComponent.componentConfig)


