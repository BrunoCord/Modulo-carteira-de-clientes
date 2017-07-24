angular.module('moduloClientes', ['ngMaterial', 'ui.utils.masks']).config(function ($mdThemingProvider) {

  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();
}).controller('cadastrar', ['$scope', '$http', function ($scope, $http) {
  $scope.tipoConta;
  $scope.usuario = {
    nome: '',
    senha: '',
    email: '',
    dtNascimento: '',
    telefone: '',
    cpf: '',
    cnpj: '',
  };

  $scope.cadastrar = function () {

        $scope.data = {
          nome: $scope.usuario.nome,
          senha: $scope.usuario.senha,
          email: $scope.usuario.email,
          dtNascimento: $scope.usuario.dtNascimento,
          telefone: $scope.usuario.telefone,
          cpf: $scope.usuario.cpf,
          cnpj: $scope.usuario.cnpj
        };
    $http.post('http://localhost:8081/login', $scope.data).success(function (data, status) {
      console.log("Success");
    })
    /*

    */
    /*
        $http({
          method: 'POST',
          url: 'http://localhost:8081/login',
          data: $scope.jsondata,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }).then(function (response, error) {
          console.log(JSON.stringify(response + " " + error));
        });
        */
  }

}])