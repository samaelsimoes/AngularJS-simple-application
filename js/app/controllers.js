angular.module("meuModulo")
.controller("indexController", function($scope) {
    $scope.titulo = "Home";
    $scope.editando = false;
    var alunoEditar;
    var contar2 = 0;

    $scope.alunos = [
        {nome: "Jeniffer", email: "Jenifer@gmail.com", idade:"22", nota1: 76, nota2:88, nota3: 77},
        {nome: "Camila", email: "camila@gmail.com", idade:"22", nota1: 65, nota2:80, nota3: 76},
        {nome: "Jean", email: "Jean@gmail.com", idade:"34", nota1: 88, nota2:88, nota3: 44},
        {nome: "Samael", email: "Samael@gmail.com", idade:"27", nota1: 90, nota2:98, nota3: 77},
        {nome: "Julio", email: "Julio@gmail.com", idade:"22", nota1: 77, nota2:88, nota3: 77},
        {nome: "Micon", email: "Maico@gmail.com", idade:"44", nota1: 90, nota2:99, nota3: 100}
    ]

    var init = function () {
        $scope.alunos.forEach((aluno) => {
            aluno.media = media(aluno);
        });
        limpaForm();
    };

    var media = function(Aluno) {
        return ((parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3).toFixed(2);
    }       
    $scope.abreAddAluno = () => {
        $scope.editando = false;
        limpaForm();

        $('.modal').open();
    }

    $scope.addAluno = (Aluno) => {
        if(Aluno) {
            Aluno.media = media(Aluno);
            $scope.alunos.push(Aluno);

            $('.modal').close();
            limpaForm();
        } else {
            M.toast({html: 'Por favor informar os campos!'});
        }                
    };
    
    $scope.editarAluno = (Aluno) => {
        $scope.editando = true;
        angular.copy(Aluno,  $scope.Aluno);


        $('.modal').open();
        alunoEditar = Aluno;
    }

    $scope.deletarAluno = (Aluno) => {
        for(var index in $scope.alunos) {
            var aux = $scope.alunos[index];

            if (Aluno === aux) {
                $scope.alunos.splice(index, 1);
                M.toast({html: 'Aluno Removido com sucesso!'});
            }
        }
    }

    $scope.salvarAluno = (Aluno) => {
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno);
        $('.modal').close();
    }

    var limpaForm = () => {
        $scope.Aluno = {nome: "", email: "", nota1: '', nota2:'', nota3: '', media: ''};
    }

    init();
})
.controller("contatoController",function($scope){
	$scope.titulo = "Contato";
})
