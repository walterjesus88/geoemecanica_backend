var client = require('../dbConnection').getInstance().getClient();
var Pregunta = require('../models/Pregunta');

client.sync().then(function() {
  
	var preguntas = [
		{			
      descripcion: '¿Cuál es el proceso de minado de la labor?',
      estado:'A',
      posicion:0
		},
    {     
      descripcion: '¿El personal Realizó el IPERC?',
      estado:'A',
      posicion:1

    },  
    {     
      descripcion: '¿Se cumplieron los controles propuestos en el IPERC?',
      estado:'A',
      posicion:1

    },  
    {     
      descripcion: '¿El supervisor liberó la labor firmando el IPERC?',
      estado:'A',
      posicion:1

    },  
    {     
      descripcion: '¿Existe 2 juegos de barretillas de : 6,8,10,12?',
      estado:'A',
      posicion:1

    },  
    {     
      descripcion: '¿Las Barretillas están en buenas condiciones.?',
      estado:'A',
      posicion:1
    },     
    {     
      descripcion: '¿Está desatado el techo, hastiales y/o frente de la labor?',
      estado:'A',
      posicion:1
    },  
    {     
      descripcion: '¿El sostenimiento está hasta el tope?',
      estado:'A',
      posicion:1
    },  
    {     
      descripcion: '¿Cuál es la altura del ultimo elemento de sostenimiento (perno/malla)?',
      estado:'A',
      posicion:0
    },  
    {     
      descripcion: '¿Están pintados las placas de los Pernos de Anclaje?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿Las mallas estan traslapadas en la tercera cocada?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿Las mallas estan sobrecargadas de bancos y/o rocas sueltas?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿Existen tramos con mallas rotas?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿El ancho de labor y la altura están de acuerdo al diseño?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿Se realizó voladura controlada, se evidencia las cañas?',
      estado:'A',
      posicion:2
    },  
    {     
      descripcion: '¿El panel informativo se encuentra actualizado?',
      estado:'A',
      posicion:2      
    },  

	];

  preguntas.forEach(function(item) {
    Pregunta.create({
      preguntaid: item.preguntaid,
     	descripcion: item.descripcion
    })
    .then(function(pregunta) {
      console.log('tipo ' + pregunta.descripcion + ' creado');
    })
    .catch(function(err) {
      console.log(err);
    })
  })
})
.catch(function(err) {
  console.log(err);
});

