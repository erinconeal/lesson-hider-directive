angular.module('directivePractice')
.service('mainSrv', function($http) {

  this.getSchedule = function() {
    return $http.get('schedule.json');
  }

})
