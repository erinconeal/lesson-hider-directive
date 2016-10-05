angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, mainSrv) {
      $scope.getSchedule = mainSrv.getSchedule();
    },
    link: function(scope, element, attributes) {
      scope.getSchedule
      .then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(day) {
          if (day.lesson === scope.lesson) {
            scope.lessonDay = scope.weekday
            element.css('text-decoration', 'line-through');
            return;
          }
        });
      });
    }
  }
});
