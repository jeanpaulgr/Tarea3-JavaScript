var objeto = {
    lista: null,
    llamadaApi: function(){
        self = this;
        if(this.lista == null){
        fetch(
            'https://escalab-6b3e3.firebaseio.com/javascript.json',
            { method: 'GET' },
          ).then(function(respuesta){
            return respuesta.json()
          }).then(function(respuestaParseada){
            self.lista = (respuestaParseada)
            console.log("lista parseada: ",self.lista)
        })
          .catch(function(error){
            console.log("error: ",error)
          });
      }else{
        console.log("Fetch ya cargado: ")
      }
    },
    verDatoLista: function(posicion){
        if(this.lista[posicion] == undefined)
        {
            return "No existe ese elemento en la lista";
        }
        console.log('Item de lista',this.lista[posicion]);
        return this.lista[posicion];
    },
    vaciarLista: function(){
        self = this;
        // esperar 3 segundos
        setTimeout(function(){
            new Promise(function(resolve, reject){
            //Promesa eliminar lista
            resolve()
            }).then (function(){
            //consola lista eliminada
            console.log('Lista Eliminada');
            //eliminar lista 
            self.lista = null;
            })

          }, 1000 * 3)
           return 'Se eliminará la lista de forma asincrónica'; 
    
    },
    verPorPropiedad: function(posicion, Propiedad){
        if(this.lista[posicion][Propiedad] == undefined)
        {
            return "No existe ese elemento en la lista";

        }else{

            return this.lista[posicion][Propiedad];
        }
    }
}


//probar

function probar1(){
    var resultado = document.getElementById("resultados");
    objeto.llamadaApi();
    setTimeout(function(){
        resultado.innerText = 'llamarApi ok (ver consola): ' + objeto.lista;
    }, 1000 * 3)
}

function probar2(){
    var resultado = document.getElementById("resultados");
    var props = document.getElementById('Param1VerDatoLista');
    resultado.innerText = 'VerDatoLista ok (ver consola): ' + objeto.verDatoLista(props.value);

}

function probar3(){
    var resultado = document.getElementById("resultados");
        resultado.innerText = 'Objeto.lista: ' + objeto.vaciarLista();
    setTimeout(function(){
        resultado.innerText = 'vaciarLista ok (ver consola): ' + objeto.lista;
    }, 1000 * 5)
}


function probar4(){
    var resultado = document.getElementById("resultados");
    var props1 = document.getElementById('Param1VerPorPropiedad');
    var props2 = document.getElementById('Param2VerPorPropiedad');
    resultado.innerText = 'VerPorPropiedad: ' + objeto.verPorPropiedad(props1.value,props2.value);
}