class Pakiman {
  constructor(nombre, v, a )
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida   = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];

  }
  hablar()
  {
    alert (this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }

}
