new Vue({
	el:"#app",

    data: {
        setores: [],
        funcionario : [],
        vfsetor: '',
        vfnome: '',
        vfsalario: '',
        vfemail: '',
        vfidade: ''
    },

    mounted: function(){
        axios.get('/funcionarios/rs/funcionarios/setor')
        .then(response => {this.setores = response.data;
        }).catch(function(error) {
            alert('Ocorreu um erro: ' + error);
        });


        axios.get("/funcionarios/rs/funcionarios/"+(new URL(location.href).searchParams.get('id'))).then(response => {
            funcionario = response.data;
            document.querySelector("input[name=fnome]").value = funcionario.nome;
            document.querySelector("input[name=fsalario]").value = funcionario.salario;
            document.querySelector("input[name=femail]").value = funcionario.email;
            document.querySelector("input[name=fidade]").value = funcionario.idade;
            document.querySelector("select[name=fsetor]").selectedIndex = funcionario.setor.id;


        }).catch(function (error) {
            vm.mostraAlertaErro("Erro interno", "Não foi possível acessar o funcionario");
        }).finally(function() {
        });
    },

    methods: {
        editar: function(fnome, fsetor, fsalario, femail, fidade) {

            set = { id: document.querySelector("select[name=fsetor]").selectedIndex, nome: document.querySelector("select[name=fsetor]").options[document.querySelector("select[name=fsetor]").selectedIndex].text }
            axios.put('/funcionarios/rs/funcionarios/' + (new URL(location.href).searchParams.get('id')), {
              id: (new URL(location.href).searchParams.get('id')),
              nome: document.querySelector("input[name=fnome]").value,
              setor: set,
              salario: document.querySelector("input[name=fsalario]").value,
              email: document.querySelector("input[name=femail]").value,
              idade: document.querySelector("input[name=fidade]").value
            })
            .then((response) => {
              alert('Usuário editado com sucesso!')
              window.location.href = '/funcionarios/';
            }, (error) => {
              alert('Erro ao editar funcionário.')
            });
        }
    }
});
