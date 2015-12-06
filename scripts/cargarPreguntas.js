var client = require('../dbConnection').getInstance().getClient();
var Pregunta = require('../models/Pregunta');

client.sync().then(function() {

	var preguntas = [
		{
      descripcion: '¿Cuál es el proceso de minado de la labor?',
      estado:'A',
      posicion:0,
      tipo: 'Opciones',
			alternativas: ['SIN PERSONAL', 'LIMPIEZA', 'DEST/SOST', 'PERF']
		},
    {
      descripcion: '¿El personal Realizó el IPERC?',
      estado:'A',
      posicion:1,
      tipo: 'Check'

    },
    {
      descripcion: '¿Se cumplieron los controles propuestos en el IPERC?',
      estado:'A',
      posicion:2,
      tipo: 'Check'

    },
    {
      descripcion: '¿El supervisor liberó la labor firmando el IPERC?',
      estado:'A',
      posicion:3,
      tipo: 'Check'

    },
    {
      descripcion: '¿Existe 2 juegos de barretillas de : 6,8,10,12?',
      estado:'A',
      posicion:4,
      tipo: 'Check'

    },
    {
      descripcion: '¿Las Barretillas están en buenas condiciones.?',
      estado:'A',
      posicion:5,
      tipo: 'Check'
    },
    {
      descripcion: '¿Está desatado el techo, hastiales y/o frente de la labor?',
      estado:'A',
      posicion:6,
      tipo: 'Check'
    },
    {
      descripcion: '¿El sostenimiento está hasta el tope?',
      estado:'A',
      posicion:7,
      tipo: 'Check'
    },
    {
      descripcion: '¿Cuál es la altura del ultimo elemento de sostenimiento (perno/malla)?',
      estado:'A',
      posicion:8,
			tipo: 'Compuesto'
    },
    {
      descripcion: '¿Están pintados las placas de los Pernos de Anclaje?',
      estado:'A',
      posicion:9,
      tipo: 'Check'
    },
    {
      descripcion: '¿Las mallas estan traslapadas en la tercera cocada?',
      estado:'A',
      posicion:10,
      tipo: 'Check'
    },
    {
      descripcion: '¿Las mallas estan sobrecargadas de bancos y/o rocas sueltas?',
      estado:'A',
      posicion:11,
      tipo: 'Check'
    },
    {
      descripcion: '¿Existen tramos con mallas rotas?',
      estado:'A',
      posicion:12,
      tipo: 'Check'
    },
    {
      descripcion: '¿El ancho de labor y la altura están de acuerdo al diseño?',
      estado:'A',
      posicion:13,
      tipo: 'Check'
    },
    {
      descripcion: '¿Se realizó voladura controlada, se evidencia las cañas?',
      estado:'A',
      posicion:14,
      tipo: 'Check'
    },
    {
      descripcion: '¿El panel informativo se encuentra actualizado?',
      estado:'A',
      posicion:15,
      tipo: 'Compuesto'
    },

	];

  preguntas.forEach(function(item) {
    Pregunta.create({
     	descripcion: item.descripcion,
			tipo: item.tipo,
			alternativas: item.alternativas,
			posicion: item.posicion
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
