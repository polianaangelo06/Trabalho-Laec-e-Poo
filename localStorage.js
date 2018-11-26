class Usuario
{
	constructor(nome, email, telefone, dia, atividade)
	{
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		this.dia = dia;
		this.atividade = atividade;
		
	}
}
function cadastrar()
{
	var nome, email,  login, senha, c_senha;
	nome = document.getElementById('nome').value;
	email = document.getElementById('email').value;
	telefone = document.getElementById('telefone').value;
	dia = document.getElementById('dia').value;
	atividade = document.getElementById('atividade').value;
   

		if (this.nome.length == '' || this.email.length == '' || this.telefone.length == ''  || this.dia.length == ''  || this.atividade.length == '') 
			{
	           alert("Preencha todos os campos!")
	           return false;
	   		}

			else
			{
					alert("Fixa enviada com sucesso! Aguardamos a sua visita!")

			  }			    
		
		var user = new Usuario(nome, email, telefone, dia, atividade);
		var bd = new Banco();
		bd.inserir(user);
		limpar();
	   }

function limpar()
{
	document.getElementById('nome').value = "";
	document.getElementById('nome').focus();
	document.getElementById('email').value = "";
	document.getElementById('telefone').value = "";
	document.getElementById('dia').value = "";
	document.getElementById('atividade').value = "";
	   
}