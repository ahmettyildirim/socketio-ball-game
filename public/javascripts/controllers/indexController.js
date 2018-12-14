app.controller('indexController',['$scope','indexFactory', ($scope, indexFactory) => {
    indexFactory.connectSocket('http://localhost:3000', {
        reconnectionAttempts :3 ,
        reconnectionDelay: 600
    }).then((socket) => {
        console.log('connected successfully',socket);
    }).catch((err) => {
        console.log(err);
    });
}]);