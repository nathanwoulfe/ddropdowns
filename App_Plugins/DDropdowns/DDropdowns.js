angular.module('umbraco').controller('DDropdownsController', ['$scope', 'contentResource', function ($scope, contentResource) {

    var dds = ['ddOne', 'ddTwo'];
    angular.forEach(dds, function (dd) {

        var config = $scope.model.config[dd];

        if (typeof config === 'object') {
            populateSelectFromConfig(dd, config.alias, config.id);
        }
        else {
            $scope[dd] = $scope.model.config[dd].split(',');
        }
    });

    $scope.add = function () {
        $scope.model.value.push({});
    }

    $scope.remove = function (index) {
        $scope.model.value.splice(index, 1);
    };

    // check for an empty model
    if ($scope.model.value.length === 0) {
        $scope.model.value = [];
        $scope.add();
    }
    
    function populateSelectFromConfig(dd, alias, id) {
        contentResource.getById(id).then(function (resp) {
            var matched = false,
                val = [];

            angular.forEach(resp.tabs, function (tab) {
                if (matched === false) {
                    angular.forEach(tab.properties, function (prop) {
                        if (prop.alias === alias && matched === false) {
                            val = parseMultiTextstring(prop.value);
                            matched = true;
                        }
                    });
                }
            });

            if (val.length > 0) {
                $scope[dd] = val;
            }
        });
    }

    function parseMultiTextstring(v) {
        var arr = [];
        angular.forEach(v, function (o) {
            arr.push(o.value);
        });
        return arr;
    }

    
}]);
