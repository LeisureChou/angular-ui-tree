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
                 console.log("newSubItem else", index)
               }
           };
      newIndex();
      nodeData.children.push({
        id: scope.$modelValue.id + "." + parseInt(scope.$modelValue.children.length),
        title: "Enter Title",
        parentId: scope.$modelValue.id,
        description: "Enter Description",
        children: [],
        index: index,
        folder: true
      });
    };

   $scope.newSubBookmark = function(scope) {
     var nodeData = scope.$modelValue;
     nodeData.children.push({
       dateAdded: new Date(),
       id: scope.$modelValue.id + "." + parseInt(scope.$modelValue.children.length),
       parentId: scope.$modelValue.id,
       title: "Enter Bookmark Title",
       description: "Enter Description",
       url: "Enter URL",
       index: index
     });
     var index = ""; 
          var newIndex = function(){
              if(!nodeData.children) {
                index = 0;
                console.log("if",index)
                return index;
              }
              else{
                index = nodeData.children.length;
                console.log("newSubBookmark else", index)
              }
          };
     newIndex();
   };
    $scope.social = true;
    // $scope.expanded = true;
    // $scope.toggleAllButtons = function(){
    //     $scope.expanded = !$scope.expanded;
    // }

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
          $scope.folder = false;
          $scope.test = function() {
            if($scope.$modelValue.folder) {
            $scope.folder = true;
          };
        }
    $scope.data = [
    {    
          "children":[
                    {
                      "children": [
                              {  
                        "dateAdded":1429249480134,
                        "id":"99",
                        "index":13,
                        "parentId":"27",
                        "title":"AngularJS SEO with Prerender.io | Scotch",
                        "url":"https://scotch.io/tutorials/angularjs-seo-with-prerender-io"
                     },
                     {  
                        "dateAdded":1427918042058,
                        "id":"7",
                        "index":14,
                        "parentId":"27",
                        "title":"A Complete Guide to Flexbox | CSS-Tricks",
                        "url":"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                     },
                     {  
                        "dateAdded":1428034189158,
                        "id":"8",
                        "index":15,
                        "parentId":"27",
                        "title":"HTML Special Symbols | Sabina Nore",
                        "url":"http://www.sabinanore.com/design/html-special-symbols/"
                     },
                     {  
                        "dateAdded":1428944143603,
                        "id":"18",
                        "index":16,
                        "parentId":"27",
                        "title":"AngularJS",
                        "url":"https://angularjs.org/"
                     }
                  ],
                  "dateAdded":1427840916950,
                  "dateGroupModified":1433275274589,
                  "id":"27",
                  "index":13,
                  "parentId":"1",
                  "title":"DevMountain",
                  "folder": true
               },  
             {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "folder": true,
                "children": [                     {  
                        "dateAdded":1428077231990,
                        "id":"95",
                        "index":9,
                        "parentId":"27",
                        "title":"Compositions | IDEAVIS",
                        "url":"http://alpha.ideavis.co/"
                     },
                     {  
                        "dateAdded":1429249342332,
                        "id":"96",
                        "index":10,
                        "parentId":"27",
                        "title":"Animating AngularJS Apps: ngView | Scotch",
                        "url":"https://scotch.io/tutorials/animating-angularjs-apps-ngview"
                     },
                     {  
                        "dateAdded":1429249430625,
                        "id":"97",
                        "index":11,
                        "parentId":"27",
                        "title":"Getting Started - Webmasters — Google Developers - SEO",
                        "url":"https://developers.google.com/webmasters/ajax-crawling/docs/getting-started"
                     },
                     {  
                        "dateAdded":1429249459602,
                        "id":"98",
                        "index":12,
                        "parentId":"27",
                        "title":"How do I create an HTML snapshot? - Webmasters — Google Developers - SEO",
                        "url":"https://developers.google.com/webmasters/ajax-crawling/docs/html-snapshot"
                     }]
             }],
      "dateAdded":1433434097840,
      "id":"0",
      "title":"Squire's BookMarks",
      "folder": true
    }];

  });

})();