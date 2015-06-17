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
                  "children":[],    
                  "dateAdded":1427840916950,
                  "dateGroupModified":1433275274589,
                  "id":"27",
                  "index":13,
                  "parentId":"1",
                  "title":"DevMountain",
                  "image": 'https://www.fashionphile.com/includes/images/thumb/BD80397/BD80397-CHANEL-Vintage-Lambskin-XL-Jumbo-Flap-Black-0.jpg'
               },  
             {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BB88593/BW82113-Givenchy-Sugar-Goatskin-Leather-Mini-Antigona-Silver-0.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BB66318/AD65772-BALENCIAGA_A%20(1).jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW85959/BW85959-HERMES-Epsom-Sellier-Kelly-32-Brique-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW76415/BW76415-ALEXANDER-MCQUEEN-Saffiano-Heroine-Open-Tote-Red-NEW-0.jpg',
                "children": []
             }
             ],
      "dateAdded":1433434097840,
      "id":"0",
      "title":"Available Images",
      "folder": true
    },
        {    
          "children":[
                    {
                  "children":[],    
                  "dateAdded":1427840916950,
                  "dateGroupModified":1433275274589,
                  "id":"27",
                  "index":13,
                  "parentId":"1",
                  "title":"DevMountain",
                  "image": 'https://www.fashionphile.com/includes/images/thumb/BW74793/CW74793-LANVIN-Elaphe-Snakeskin-Large-Happy-Shoulder-Bag-Bleu-Nuit--0.jpg'
               },  
             {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW85134/BW85134-CHANEL-Lambskin-Quilted-Boy-Wallet-On-Chain-WOC-Navy-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW87074/BW87074-GIVENCHY-Sugar-Goatskin-Medium-Antigona-Midnight-00.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BB84316/BD54384-01.jpg',
                "children": []
             },
                          {  
                "dateAdded":1411165752765,
                "id":"14",
                "index":0,
                "parentId":"1",
                "title":"Dev",
                "image": 'https://www.fashionphile.com/includes/images/thumb/BW86919/BW86919-FENDI-Vitello-Elite-Medium-2Jours-Tote-Turquoise-NEW-00.jpg',
                "children": []
             }
             ],
      "dateAdded":1433434097840,
      "id":"0",
      "title":"Carousel Images",
      "folder": true
    }
    ];

  });

})();