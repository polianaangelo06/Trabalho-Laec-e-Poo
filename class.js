class Banco
{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem("fixa-voluntario")) || [];
	}
	inserir(semana)
	{
		// JSON.parse(localStorage.getItem("cadastro"));
		this.dados.push(semana);
		localStorage.setItem("fixa-voluntario", JSON.stringify(this.dados));		
	}
	
}


