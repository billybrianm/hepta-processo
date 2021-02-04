var inicio = new Vue({
	el:"#inicio",
    data: {
        listaFuncs: [],
    },
    created: function(){
        let vm =  this;
        vm.buscaFuncionarios();
    },
    methods: {
        buscaFuncionarios: function(){
			const vm = this;
			axios.get("/funcionarios/rs/funcionarios")
			.then(response => {vm.listaFuncs = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
		remFun: function (func_id) {
			axios.delete('/funcionarios/rs/funcionarios/' + func_id)
			.then( response => {
				alert('Usuário deletado com sucesso.')
				document.location.reload(true);
			})
			.catch( error => {
			   alert('Erro ao deletar.')
			})
	    },

		editarFuncionario: function(func_id) {
			window.location.href = 'editar-funcionario?id=' + func_id;
		}
    }
});
