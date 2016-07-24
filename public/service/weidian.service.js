'use strict';

angular
    .module('shopApp')
    .factory('weidianService', weidianService);

weidianService.$inject = ['$http'];

function weidianService($http) {
  return {
    uploadProduct: uploadProduct,
    uploadImage: uploadImage,
    saveOrder: saveOrder
  };

  function uploadProduct(productDetail) {
    return $http.post('/api/uploadproduct', productDetail);
  };

  function uploadImage(imgFile) {
    return $http.post('/api/uploadimage', imgFile);
  };

  function saveOrder(weidianProductInfo) {
      return $http.post('api/saveorder', weidianProductInfo);
  };
};
