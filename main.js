function searchgal()
{
    var gal = document.getElementById("text-gal").value;
    document.getElementById("output-gal").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://tcg.pokemon.com/en-us/galleries/"+gal+"/'>Click To See Gallery</a></button>";
}

function searchpoke()
{
    var poke = document.getElementById("text-poke").value;
    document.getElementById("output-poke").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://pokemondb.net/pokedex/"+poke+"'>Click To See Pokemon</a></button>";
}

function searchmoves()
{
    var moves = document.getElementById("text-moves").value;
    document.getElementById("output-moves").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://pokemondb.net/move/"+moves+"'>Click To See Move</a></button>";
}

function searchabil()
{
    var abil = document.getElementById("text-abil").value;
    document.getElementById("output-abil").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://pokemondb.net/ability/"+abil+"'>Click To See Ability</a></button>";
}

function searchloca()
{
    var loca = document.getElementById("text-loca").value;
    document.getElementById("output-loca").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://pokemondb.net/location/"+loca+"'>Click To See Location</a></button>";
}

function searchitems()
{
    var items = document.getElementById("text-items").value;
    document.getElementById("output-items").innerHTML = "<button class='btn btn-success'><a target='blank' href='https://pokemondb.net/item/"+items+"'>Click To See Item</a></button>";
}