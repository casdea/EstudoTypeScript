console.log("Teste");

type Heroi = {
    name : string;
    vulo: string;
};

function printaObjeto(pessoa : Heroi)
{
    console.log(pessoa);
}

printaObjeto({name: "Teste", vulo: "teste1"});