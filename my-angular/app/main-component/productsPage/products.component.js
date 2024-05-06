angular.module('myApp').component('productsPage', {
    templateUrl: 'app/main-component/productsPage/products.component.html',
    controller: ProductsController
});

function ProductsController($location, filterService, singleFilterService, productCardService) {
    var vm = this;
    vm.filterData = null;
    vm.singlefilterData = null;
    // vm.mensPant = null;
    vm.selectedOption = null;
    vm.mensPant = null;
    // vm.mensPant = productCardService.menPantsData;
    vm.$onInit = function() {
        vm.filterData = filterService.filterData;
        vm.singlefilterData = singleFilterService.singlefilterData;
        
         vm.mensPant = productCardService.menPantsData;

    };

    vm.handleMultipleSelectFilter = function(value,sectionId) {
        
        //  console.log("Selected value:", value, "Section ID:", sectionId);

         var queryParams = angular.copy($location.search());
         var filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];
         var valueIndex = filterValues.indexOf(value);

         console.log(queryParams);
        //  console.log(filterValues);
        //  console.log('value');
        //  console.log(value);

         if (valueIndex !== -1) {
             filterValues.splice(valueIndex, 1);
         } else {
             filterValues.push(value);
         }
 
         if (filterValues.length > 0) {
             queryParams[sectionId] = filterValues.join(',');
         } else {
             delete queryParams[sectionId];
         }
 
         $location.search(queryParams);
        
    };
    vm.handleSingleSelectFilter = function(value, sectionId) {
        var queryParams = angular.copy($location.search());
        console.log(queryParams);
        queryParams[sectionId] = value;
        $location.search(queryParams);
    };
    

}
