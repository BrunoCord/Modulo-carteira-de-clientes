angular.module('moduloClientes', ['ngMaterial']).config(function ($mdThemingProvider) {

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
    var data = JSON.stringify({
      nome: $scope.usuario.nome,
      senha: $scope.usuario.senha,
      email: $scope.usuario.email,
      dtNascimento: $scope.usuario.dtNascimento,
      telefone: $scope.usuario.telefone,
      cpf: $scope.usuario.cpf,
      cnpj: $scope.usuario.cnpj
    });

    $http({
      method: 'POST',
      url: 'http://localhost:3001/login',
      data: data
    }).then(function (response) {
      //console.log(JSON.stringify(response.status));
      alert('ola '+JSON.stringify(response.status));
    });
  }

}])