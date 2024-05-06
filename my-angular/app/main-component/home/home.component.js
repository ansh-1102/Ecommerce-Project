angular.module('myApp').component('myHome', {
    templateUrl: 'app/main-component/home/home.component.html',
    controller: HomeController
});

function HomeController($http) {
    var self = this;

    self.images = [
        'app/data/img1.jpg',
        'app/data/img2.jpg',
        'app/data/img3.jpg',
        'app/data/img4.jpg'
    ];

    // Fetching data from men_jeans.json
    $http.get('app/data/Men/men_jeans.json').then(function(response) {
        self.mensJeans = response.data.slice(0, 5);
    }).catch(function(error) {
        console.error('Error fetching data:', error);
    });

    $http.get('app/data/Gouns/gouns.json').then(function(response) {
        self.womensGouns = response.data.slice(0, 5);
    }).catch(function(error) {
        console.error('Error fetching data:', error);
    });

    $http.get('app/data/Women/lehangacholi2.json').then(function(response) {
        self.lehangaCholi = response.data.slice(0, 5);
    }).catch(function(error) {
        console.error('Error fetching data:', error);
    });

    $http.get('app/data/Men/men_kurta.json').then(function(response) {
        self.mensKurta = response.data.slice(0, 5);
    }).catch(function(error) {
        console.error('Error fetching data:', error);
    });

    $http.get('app/data/shoes/shoes.json').then(function(response) {
        self.shoes = response.data.slice(0, 5);
    }).catch(function(error) {
        console.error('Error fetching data:', error);
    });

    
}
