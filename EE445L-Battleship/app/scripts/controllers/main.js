'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
  .controller('MainCtrl', ['$interval','$scope', 'firebaseFactory', '$firebaseArray', '$firebase', '$firebaseObject',
    function($interval, $scope, firebaseFactory, $firebaseArray, $firebase, $firebaseObject) {
      var player1Ready = false;
      var player2Ready = false;
      $scope.activated = false;


      /****** Firebase Init Load ******/

      var ref = firebase.database().ref();
      $scope.data = $firebaseObject(ref);
      var player1Ref = 0;
      var player2Ref = 0;

      $scope.data.$loaded()
        .then(function() {
          player1Ref = $scope.data.players.player1;
          player2Ref = $scope.data.players.player2;
          if(player1Ref.ready == true && player2Ref.ready == true){
            player1Ready = true;
            player2Ready = true;
            $scope.activated = true;
            console.log("true");
          }
        })
        .catch(function(err) {
          console.error(err);
        });

      /********* Watch if both players have joined game ******/
      var player1Ready = firebase.database().ref('players/player1/ready');
      player1Ready.on('value', function(snapshot) {
        player1Ready = snapshot.val();
        checkIfBothPlayersReady();
      });

      var player2Ready = firebase.database().ref('players/player2/ready');
      player2Ready.on('value', function(snapshot) {
          player2Ready = snapshot.val();
          checkIfBothPlayersReady();
      });

      var checkIfBothPlayersReady = function(){
        if(player1Ready == true && player2Ready == true){
          $scope.activated = true;
          console.log("true");
        } else {
          $scope.activated = false;
          console.log("false");
        }
      }


      /**** Progress Circle *****/
      $scope.determinateValue = 30;

      // Iterate every 100ms, non-stop and increment
      // the Determinate loader.
      $interval(function() {

        $scope.determinateValue += 1;
        if ($scope.determinateValue > 100) {
          $scope.determinateValue = 30;
        }

      }, 100);

      /**************************/



      /****** Firebase WATCH variables *****/
      // var RPRef = firebase.database().ref('/lessons/lesson' + $scope.currLessons + '/numRP');
      // RPRef.on('value', function(snapshot) {
      //   RPadded = snapshot.val() + 1;
      // });

      /****** Firebase SET  *****/
      // firebase.database().ref('/lessons/lesson' + lessonCnt + '/').set({
      //   name: result,
      //   numRP: 0
      // });

      /****** Firebase UPDATE  *****/
      // var updateNumLesson = {};
      // updateNumLesson['/lessons/numLessons/'] = lessonCnt;
      // firebase.database().ref().update(updateNumLesson);
      // console.log(result);
      // window.location.reload();

    }
  ]);


  // function(firebaseFactory, $location, $firebaseArray, $firebase, $firebaseObject, $scope){
  //   this.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  //
  //   // $scope.data.$loaded()
  //   //   .then(function() {
  //   //     lessonRef = $scope.data.lessons;
  //   //     lessonCnt = lessonRef.numLessons;
  //   //
  //   //     for(var i = 1; i <= lessonCnt; i++){
  //   //       var nameRef = firebase.database().ref('/lessons/lesson' + i + '/name');
  //   //       nameRef.on('value', function(snapshot) {
  //   //         $scope.lessons.push({'name': snapshot.val(), 'num': i});
  //   //       });
  //   //     }
  //   //   } )
  //   //   .catch(function(err) {
  //   //     console.error(err);
  //   //   });
  //
  //
  //     /****** Firebase WATCH variables *****/
  //     // var RPRef = firebase.database().ref('/lessons/lesson' + $scope.currLessons + '/numRP');
  //     // RPRef.on('value', function(snapshot) {
  //     //   RPadded = snapshot.val() + 1;
  //     // });
  //
  //     /****** Firebase SET  *****/
  //     // firebase.database().ref('/lessons/lesson' + lessonCnt + '/').set({
  //     //   name: result,
  //     //   numRP: 0
  //     // });
  //
  //     /****** Firebase UPDATE  *****/
  //     // var updateNumLesson = {};
  //     // updateNumLesson['/lessons/numLessons/'] = lessonCnt;
  //     // firebase.database().ref().update(updateNumLesson);
  //     // console.log(result);
  //     // window.location.reload();
  // });
