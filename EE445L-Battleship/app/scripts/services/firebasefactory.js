'use strict';

/**
 * @ngdoc service
 * @name battleshipApp.firebaseFactory
 * @description
 * # firebaseFactory
 * Factory in the battleshipApp.
 */
angular.module('battleshipApp')
  .factory('firebaseFactory', function ($http, $firebaseArray, $firebaseObject) {
    // var config = {
    //   apiKey: "AIzaSyC_MRDyUDbnBpjzRIzdjwJIP8LW4N4mq-s",
    //   authDomain: "ee445l-battleship.firebaseapp.com",
    //   databaseURL: "https://ee445l-battleship.firebaseio.com",
    //   projectId: "ee445l-battleship"
    // };
    var config = {
    apiKey: "AIzaSyC_MRDyUDbnBpjzRIzdjwJIP8LW4N4mq-s",
    authDomain: "ee445l-battleship.firebaseapp.com",
    databaseURL: "https://ee445l-battleship.firebaseio.com",
    projectId: "ee445l-battleship",
    storageBucket: "ee445l-battleship.appspot.com",
    messagingSenderId: "620353773899"
  };

    firebase.initializeApp(config);

    //
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(config);
    // }
    var rootRef = firebase.database().ref();

    return {
        ref: $firebaseArray(rootRef)
    };
  });
