var imagenes = [];
imagenes["Cauchin"]   = "cerdo.png";
imagenes["Pokacho"]   = "vaca.png";
imagenes["Tocinauro"] = "pollo.png";


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
                            // pakin es una variable cualquiera,
                            // realemte es el indice
for ( var pakin of coleccion) //para cada variable pakin colocar coleccion
{
    pakin.mostrar();

}
