var client = require('../dbConnection').getInstance().getClient();
var Labor = require('../models/Labor');

client.sync().then(function() {
  
	var labores = [
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Glory_Hole",
    "zona2":"Glory_Hole",
    "nivel":4263,
    "Cuerpo":"OB_10",
    "Tajeo":"Glory_Hole",
    "nombre":"Brecha",
    "Suma - Redondeado":"35.000,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"",
    "id":"Glory_Hole Glory_Hole",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"Alta",
    "nivel":4154,
    "Cuerpo":"V_LIND",
    "Tajeo":"335",
    "nombre":"Brecha",
    "Suma - Redondeado":"- ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"339 ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"0",
    "id":"Stp 335",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":4050,
    "Cuerpo":"V_LIND",
    "Tajeo":"369",
    "nombre":"Brecha",
    "Suma - Redondeado":"9.670,00 ",
    "Suma - Ton Pase Desmonte":"1.194 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"148,7692307692",
    "id":"Stp 369",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":4050,
    "Cuerpo":"OB_M",
    "Tajeo":"OB_M_4050",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"0",
    "id":"Stp OB_M_4050",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":3950,
    "Cuerpo":"OB_10",
    "Tajeo":"406",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"0",
    "id":"Stp 406",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"Ata Interm",
    "nivel":3600,
    "Cuerpo":"VLA_27",
    "Tajeo":"V_27_154",
    "nombre":"Veta",
    "Suma - Redondeado":"4.310,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"66,3076923077",
    "id":"Stp V_27_154",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"SB Interm",
    "nivel":3600,
    "Cuerpo":"OB_17",
    "Tajeo":"995 S",
    "nombre":"Brecha",
    "Suma - Redondeado":"3.250,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"50",
    "id":"Stp 995 S",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":3540,
    "Cuerpo":"OB_17",
    "Tajeo":"996 S",
    "nombre":"Brecha",
    "Suma - Redondeado":"7.320,00 ",
    "Suma - Ton Pase Desmonte":"938 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"112,6153846154",
    "id":"Stp 996 S",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":3540,
    "Cuerpo":"OB_SB",
    "Tajeo":"24",
    "nombre":"Brecha",
    "Suma - Redondeado":"8.000,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"123,0769230769",
    "id":"Stp 24",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":3420,
    "Cuerpo":"OB_18",
    "Tajeo":"660",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"6.560,00 ",
    "Suma - Ton Pase Desmonte":"1.471 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"100,9230769231",
    "id":"Stp 660",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"Ata Baja",
    "nivel":3360,
    "Cuerpo":"OB_13",
    "Tajeo":"475",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"4.000,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"61,5384615385",
    "id":"Stp 475",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":3300,
    "Cuerpo":"OB 23",
    "Tajeo":"765",
    "nombre":"Veta",
    "Suma - Redondeado":"7.010,00 ",
    "Suma - Ton Pase Desmonte":"327 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"107,8461538462",
    "id":"Stp 765",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":2960,
    "Cuerpo":"OB_13",
    "Tajeo":"441",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"6.450,00 ",
    "Suma - Ton Pase Desmonte":"2.999 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"99,2307692308",
    "id":"Stp 441",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":2960,
    "Cuerpo":"",
    "Tajeo":"928",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"1.390,00 ",
    "Suma - Ton Pase Desmonte":"850 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"21,3846153846",
    "id":"Stp 928",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":2960,
    "Cuerpo":"OB_13_R8",
    "Tajeo":"896",
    "nombre":"Veta",
    "Suma - Redondeado":"3.790,01 ",
    "Suma - Ton Pase Desmonte":"1.725 ",
    "Suma - Ton Batido":"1.740 ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"58,3078461538",
    "id":"Stp 896",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"Ata Prof",
    "nivel":2890,
    "Cuerpo":"OB_13_R4",
    "Tajeo":"160",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"9.030,00 ",
    "Suma - Ton Pase Desmonte":"920 ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"138,9230769231",
    "id":"Stp 160",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Stp",
    "zona2":"",
    "nivel":2890,
    "Cuerpo":"OB_13",
    "Tajeo":"440",
    "nombre":"Cuerpo",
    "Suma - Redondeado":"11.350,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"174,6153846154",
    "id":"Stp 440",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  },
  {
    "empresaEmpresaid":"CMA",
    "Tipo":"Avance",
    "zona2":"Ata Baja",
    "nivel":3300,
    "Cuerpo":"V27",
    "Tajeo":"V27 (Cro. 734 N)",
    "nombre":"Veta",
    "Suma - Redondeado":"3.000,00 ",
    "Suma - Ton Pase Desmonte":"- ",
    "Suma - Ton Batido":"- ",
    "Suma - Hr. Sc. 6 yd3 Mineral":"46,1538461538",
    "id":"Avance V27 (Cro. 734 N)",
    "FIELD13":" ",
    "tipoTipoId":"E",
    "ancho_pro":4,
    "alto_pro":5
  }
];

  labores.forEach(function(item) {
    Labor.create({
      codigo: item.id,
     	nombre: item.nombre,       
      nivel: item.nivel, 
      ancho_pro:item.ancho_pro,
      alto_pro:item.alto_pro,
      tipoTipoId:item.tipoTipoId,
      empresaEmpresaid:item.empresaEmpresaid,
    })
    .then(function(tipo) {
      console.log('tipo ' + item.nombre + ' creado');
    })
    .catch(function(err) {
      console.log(err);
    })
  })
})
.catch(function(err) {
  console.log(err);
});
