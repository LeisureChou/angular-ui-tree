(function() {
  'use strict';

  angular.module('treeApp', ['ui.tree'])
  .controller('treeCtrl', function($scope) {

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.moveLastToTheBegginig = function () {
      var a = $scope.data.pop();
      $scope.data.splice(0,0, a);
    };

    $scope.newSubItem = function(scope) {
      // console.log('scope', scope);
      // console.log('this', this);
      // console.log('mv', scope.$modelValue);
      var nodeData = scope.$modelValue;
      var index = ""; 
           var newIndex = function(){
               if(!nodeData.children) {
                 index = 0;
                 console.log("if",index)
                 return index;
               }
               else{
                 index = nodeData.children.length;
                 console.log("else", index)
               }
           };
      newIndex();
      nodeData.children.push({
        id: scope.$modelValue.id + "." + parseInt(scope.$modelValue.children.length),
        title: "Enter Title",
        parentId: scope.$modelValue.id,
        description: "Enter Description",
        children: [],
        index: index
      });
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    $scope.collapseAll = function() {
      var scope = getRootNodesScope();
      scope.collapseAll();
    };

    $scope.expandAll = function() {
      var scope = getRootNodesScope();
      scope.expandAll();
    };

    // function parentId(arr) {

    // }

    $scope.data = [
    {    
          "children":[  
             {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Pandora",
                "url":"http://www.pandora.com/",
                "children": []
             }],
      "dateAdded":1433434097840,
      "id":"0",
      "title":"Squire's BookMarks"
    }];

  });

})();