
function desaparecer(sumir)
{
	switch(sumir){
	case 1:
	document.getElementById("home").className = "visivel";
    document.getElementById("footer").className = "visivel";
	document.getElementById("voluntario").className = "invisivel";
    document.getElementById("doacoes").className = "invisivel";
    document.getElementById("contato").className = "invisivel";
    document.getElementById("sobre").className = "invisivel";
	break;

	case 2:
	document.getElementById("voluntario").className = "visivel";
    document.getElementById("footer").className = "visivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("doacoes").className = "invisivel";
    document.getElementById("contato").className = "invisivel";
    document.getElementById("sobre").className = "invisivel";
	break;

	case 3:
	document.getElementById("doacoes").className = "visivel";
    document.getElementById("footer").className = "invisivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("voluntario").className = "invisivel";
    document.getElementById("contato").className = "invisivel";
    document.getElementById("sobre").className = "invisivel";
	break;

	case 4:
	document.getElementById("contato").className = "visivel";
    document.getElementById("footer").className = "invisivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("voluntario").className = "invisivel";
    document.getElementById("doacoes").className = "invisivel";
    document.getElementById("sobre").className = "invisivel";
	break;

	case 5:
	document.getElementById("sobre").className = "visivel";
    document.getElementById("footer").className = "invisivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("voluntario").className = "invisivel";
    document.getElementById("doacoes").className = "invisivel";
    document.getElementById("contato").className = "invisivel";
	break;

	case 6:
	document.getElementById("dimdim").className = "visivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("voluntario").className = "invisivel";
    document.getElementById("bem").className = "invisivel";

	break;

	case 7:
	document.getElementById("bem").className = "visivel";
    document.getElementById("home").className = "invisivel";
    document.getElementById("voluntario").className = "invisivel";
  	document.getElementById("dimdim").className = "invisivel";
	break;
}}