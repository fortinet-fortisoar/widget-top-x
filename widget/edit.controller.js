'use strict';
(function () {
    angular
        .module('cybersponse')
        .controller('editTopX100Ctrl', editTopX100Ctrl);

    editTopX100Ctrl.$inject = ['$scope', '$uibModalInstance', 'config', 'appModulesService', 'Entity', 'modelMetadatasService'];

    function editTopX100Ctrl($scope, $uibModalInstance, config, appModulesService, Entity, modelMetadatasService) {
        $scope.cancel = cancel;
        $scope.save = save;
        $scope.config = config;
        $scope.onModuleChange = onModuleChange;
        $scope.onChangeModuleType = onChangeModuleType;
        $scope.moduleType = {
            type: ['Across Modules', 'Single Module']
        }
        $scope.jsonObjModuleList=[];
        $scope.config.eventName = $scope.config.eventName ? $scope.config.eventName : "";
        $scope.config.broadcastEvent = $scope.config.broadcastEvent ? $scope.config.broadcastEvent : false;
        $scope.toggleArrow = toggleArrow;
        $scope.pageConfig = [3, 5];
        $scope.config.queryLimit = $scope.config.queryLimit ? $scope.config.queryLimit : 3;

        function init() {
            if($scope.config.module){
                loadAttributes();
            }
            appModulesService.load(true).then(function (modules) {
                $scope.modules = modules;
                //Create a list of modules with atleast one JSON field
                modules.forEach((module, index) => {
                    var moduleMetaData = modelMetadatasService.getMetadataByModuleType(module.type);
                    for (let fieldIndex = 0; fieldIndex < moduleMetaData.attributes.length; fieldIndex++) {
                        //Check If JSON field is present in the module
                        if (moduleMetaData.attributes[fieldIndex].type === "object") {
                            $scope.jsonObjModuleList.push(module);
                            break;
                        }
                    }
                })
            })
            $scope.config.query = $scope.config.query ? $scope.config.query : [];
        }
        init();

        function onChangeModuleType() {
            delete $scope.config.module;
            delete $scope.config.query;
            delete $scope.config.groupByPicklistOrLookup;
        }

        function loadAttributes() {
            $scope.fields = [];
            $scope.fieldsArray = [];
            $scope.picklistOrLookup = [];
            $scope.jsonFields = [];
            var entity = new Entity($scope.config.module);
            entity.loadFields().then(function () {
                if ($scope.config.moduleType === 'Across Modules') {
                    for (var key in entity.fields) {
                        if (entity.fields[key].type === "picklist" || entity.fields[key].type === "lookup") {
                            $scope.picklistOrLookup.push(entity.fields[key]);
                        }
                    }
                }
                else {
                    for (var key in entity.fields) {
                        if (entity.fields[key].type === "object") {
                            $scope.jsonFields.push(entity.fields[key]);
                        }
                    }
                }
                $scope.config.fields = entity.getFormFields();
                angular.extend($scope.fields, entity.getRelationshipFields());
                $scope.config.fieldsArray = entity.getFormFieldsArray();
            });
        }

        function onModuleChange() {
            loadAttributes()
        }

        function toggleArrow() {
            $scope.toggle = $scope.toggle === undefined ? true : !$scope.toggle;
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            if ($scope.editTopXWidgetForm.$invalid) {
                $scope.editTopXWidgetForm.$setTouched();
                $scope.editTopXWidgetForm.$focusOnFirstError();
                return;
            }
            $uibModalInstance.close($scope.config);
        }

    }
})();
