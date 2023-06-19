var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', function ($scope, $http) {
    $scope.employees = [];

    $scope.getEmployee = function () {
        $http.get('http://localhost:5000/employees').then(function (response) {
            $scope.employees = response.data;
            $scope.retrievedEmployees = response.data;
        });
    };

    $scope.addEmployee = function () {
        $http.post('http://localhost:5000/employees', $scope.employeeData).then(function (response) {
            $scope.getEmployee();
            $scope.resetEmployeeData();
        });
    };

    $scope.updateEmployee = function (id) {
        $http.put('http://localhost:5000/employees/' + id, $scope.employeeData).then(function (response) {
            $scope.getEmployee();
            $scope.resetEmployeeData();
        });
    };

    $scope.deleteEmployee = function (id) {
        $http.delete('http://localhost:5000/employees/' + id).then(function (response) {
            $scope.getEmployee();
        });
    };

    $scope.editEmployee = function (id) {
        $http.get('http://localhost:5000/employees/' + id).then(function (response) {
            $scope.employeeData = response.data;
        });
    };

    $scope.saveEmployee = function () {
     
            // Add new employee
            $scope.addEmployee();
        
    };
    
    $scope.resetEmployeeData = function () {
        $scope.employeeData = {
            id:'',
            firstName: '',
            lastName: '',
            role: ''
        };
    };

    $scope.resetEmployeeData();
    $scope.getEmployee();
});
