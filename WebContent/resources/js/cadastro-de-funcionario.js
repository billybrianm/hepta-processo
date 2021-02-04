new Vue({
      el: '#app',
      data: {
        setores: [],
        fsetor: '',
        fnome: '',
        fsalario: '',
        femail: '',
        fidade: '',
      },
      methods: {
          getSetores: function () {
            axios.get('/funcionarios/rs/funcionarios/setor')
            .then(response => {this.setores = response.data;
            }).catch(function(error) {
                alert('Ocorreu um erro: ' + error);
            });
        },

        cadastrar: function(fnome, fsetor, fsalario, femail, fidade) {

            axios.post('/funcionarios/rs/funcionarios', {
              nome: fnome,
              setor: fsetor,
              salario: fsalario,
              email: femail,
              idade: fidade
            })
            .then((response) => {
              alert('Usuário cadastrado com sucesso!')
              window.location.href = '/funcionarios/';
            }, (error) => {
              alert('Erro ao cadastrar funcionário.')
            });
        }
    }
});
