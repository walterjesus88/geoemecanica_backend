var client = require('../dbConnection').getInstance().getClient();
var Labor = require('../models/Labor');
var Sequelize = require('sequelize');


client.sync().then(function() {
  
  var labores = 

  [
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 s"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Rpa. 7299"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Rpa. 347"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp. 325"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N. 660"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3020
    ,"codigo":"Rpa 119"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Rpa 102"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 990 w"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 810 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 8261"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 8262"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 8264"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 82611"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 82"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"Rpa 82000"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"AA"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"RRRRR"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"RRRRR"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 023"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"Cro 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2860
    ,"codigo":"Cro 160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Rpa. 7499"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stop. 613"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 679 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa.7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"Cro. 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Rpa. 347"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Cro. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp. 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 928"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Gal. 765 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 102"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro. 023"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa. 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa. 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stope 720"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2960
    ,"codigo":"RPA 869"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"CRO 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"CRO 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"RPA 102"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 801 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7879"
    ,"ancho_pro":4.1
    ,"alto_pro":4.1
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro 682"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 N"
    ,"ancho_pro":8
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160N "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 441"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 928"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa.031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa.869"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Cr 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Cr 160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro  147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro  119"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 801"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 102"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rp 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rp 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RP 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 N"
    ,"ancho_pro":8
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 147"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 102"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Rpa 119"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2860
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3660
    ,"codigo":"Stp 299"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 22 Sur"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Rpa 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"St. 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal. 765 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"S/N  720"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cx 782"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Gl.612"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 682"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp. 335"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7879"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Spa. 7879 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Cro. 7839"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Sto. 660 (7779)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro. 7898"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro 436 N."
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro 436 S."
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 682 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Gal. 7244"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Cro. 7039  N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Stp. 7244"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp. 425"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Cro. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa. 990 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"S/N 331 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2840
    ,"codigo":"Rpa. 990w"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2840
    ,"codigo":"S/N 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rap 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Rap. 175 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 666 (7779)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 666 (7879)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa.7898"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 8107"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Tunel Portaro"
    ,"ancho_pro":3.5
    ,"alto_pro":3.3
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cr. 160 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa. 990"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 w "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Cro. 7039 "
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp.687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp.810"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp.8089"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp.7879"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Tunel Portaro"
    ,"ancho_pro":3.5
    ,"alto_pro":3.3
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp.  425"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4280
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 023"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro. 037 "
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa.  7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp.  660  (7879)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7774"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 682"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 687"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 037"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Sn 331N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Rpa 175W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2860
    ,"codigo":"Cro 160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Sn331W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Sn116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Sn116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa175W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa990"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 119"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa. 175 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro.037"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Rpa. 102 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa. 990 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Stp. 4299"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp. 335"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 8089"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 426 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3040
    ,"codigo":"Cro 023"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Gal 984 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 037"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/Niv 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Gal. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 691"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Tunel Portaro Lado E"
    ,"ancho_pro":3.5
    ,"alto_pro":3.3
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Gal 984 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"S/N 324 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/N 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 8089 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 436 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Tunel Portaro"
    ,"ancho_pro":3.5
    ,"alto_pro":3.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 995 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 995 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 440 E "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 441"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/N 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rap 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 023 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 037"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Cro. 7249 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 8089"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7039"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"s/n 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"Cro 7239 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 691"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/n 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro692"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal. 981 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro. 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rap. 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 023 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro 436 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp 325"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Gal. 347"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Gal. 347"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro 436 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3950
    ,"codigo":"cro 7249"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7039"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 8089"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/N 116"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 018 E "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Stp. 335"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"cro 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Cro 375"
    ,"ancho_pro":3.5
    ,"alto_pro":3.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa.7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/N 116"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 031"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Rpa 018"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3000
    ,"codigo":"CX. 436S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3000
    ,"codigo":"CX. 436N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"SN. 8086"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"SN. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"RPA 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"RPA 018"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"RPA 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"RPA 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"GAL 981"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp 996"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Rpa.  996"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 441"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 928 lado izquierdo"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 928 lado derecho"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3000
    ,"codigo":"CX. 436S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3000
    ,"codigo":"CX. 436N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"SN. 8086"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"SN. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"RPA 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"RPA 018"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"RPA 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"RPA 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"GAL 981"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp 996"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Rpa.  996"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 441"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 928 lado izquierdo"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 928 lado derecho"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2860
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Gal 981"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869 "
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2860
    ,"codigo":"Rpa 990"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"Cro 160 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"STOP. 335"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"OB-MIGUEL"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"SN. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RP. 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STOP. 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STOP. 687"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160-breasting"
    ,"ancho_pro":4.5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160-lado derecho"
    ,"ancho_pro":4.5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996"
    ,"ancho_pro":4.5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 928 lado derecho"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3180
    ,"codigo":"Gal - 981"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"S/N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"S/N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro: 682"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 613"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 652"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Sn. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 764-N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 999"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765-n"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765-S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 999"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160 N -Gal.116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 N "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 E "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 E-W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440S (SUPERIOR)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa: 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa 679"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa 7839"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Sn. 7779"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Rpa. 7731"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Cro 7766 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp. 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 24 Rpa. 7880"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Sn. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 999"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765-S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Sn.7779 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"TUNEL PORTARO"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 999"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"160 -E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa.7839"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 13)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 679"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa.869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 999"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"CRO 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"CRO 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"GAL 771 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa: 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 679"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp. 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3540
    ,"codigo":"RPA. 7750 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3540
    ,"codigo":"RPA. 7731 _E"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3540
    ,"codigo":"RPA. 7731 E CAM. DE RED."
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP. 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP. 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 679 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 732"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (Piso 13)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440_E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440_W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 441_E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 441_W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (Piso 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (Piso 11)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Stp. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"Stp. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"Stp. 116 "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2860
    ,"codigo":"Stp. 440 E (Rpa. 175)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP. 154(STP. 6139"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (Piso 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"Rpa. 7839 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 869"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Rpa 802"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP.24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"ST 660"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"SN 732"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"RPA 7839"
    ,"ancho_pro":5
    ,"alto_pro":6
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 679"
    ,"ancho_pro":4.5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 660"
    ,"ancho_pro":9
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA. 7750 w"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA. 7731 "
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stp 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Cro 160 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 175"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"stp 660"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"stp 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"stp 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"Rpa 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 870"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 723"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 390"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"CRO 436 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 24"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996"
    ,"ancho_pro":4.8
    ,"alto_pro":4.4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Rpa 996"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"stp 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"stp 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":" Stp 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":" Stp 440 E "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":" Stp 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":" Stp  765- N"
    ,"ancho_pro":4.5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":" Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":" Cro 160-E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":" Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Cro. 723"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 372"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 390"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3540
    ,"codigo":"Rpa. 7760"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440 E (RPA.175)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP. 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP. 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 372"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 390"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 870"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 151"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 - E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 151"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 870"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N. 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 691"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP. 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP. 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"RPA. 7750"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"RPA. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"RPA. 7731"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA. 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 11)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 390"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 - E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 870"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3040
    ,"codigo":"Cro 151"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP. 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3000
    ,"codigo":"RPA. 116"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440 E (AC.ANT.)"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP.  160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP.  116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3040
    ,"codigo":"Cro 119"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3040
    ,"codigo":"Cro 151"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 372"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 11)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7858"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"S/N. 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 691"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 690"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 119-S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"RPA. 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO. 889 E(TALLER)"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"RPA. 119 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7884 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765-S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3040
    ,"codigo":"Cro 119-s"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 151"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP. 869"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"RPA. 810"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 440 E-ACCESO ANTIGUO"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 11)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 2)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"RP. 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Cro 705 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CRO 7869"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 PISO 14"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 7779 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 7779  S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 660"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7884"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa. 7884"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (piso 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (piso 2)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (piso 11)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Cro. 436 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stop. 440 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop. 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 691"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA. 7884"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2830
    ,"codigo":"Stop. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2830
    ,"codigo":"Stop. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2830
    ,"codigo":"Stop. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop. 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop. 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro. 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3000
    ,"codigo":"Cro 119"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 2)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro. 7912"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa. 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 N "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 14)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro 7921"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7884"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 314W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CRO 7840S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 765 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 826 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CRO 7840"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7880"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 826 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp. 896 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp. 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160-S7N_N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 14"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 826 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRP 413 N "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 369"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 14"
    ,"ancho_pro":4
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"STP 355"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 ACCESO AN."
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 709 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 752"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4.4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 389 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"ST. 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"ST. 996 BAY PASS"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP. 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 709 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 826 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4200
    ,"codigo":"STP 369 - PISO 14"
    ,"ancho_pro":4
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 2"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 2"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 598 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 709"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"CRO 7873"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 314"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4218
    ,"codigo":"CRO 7109 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"STP 369 PISO 2"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 "
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 350 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7880 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stop 116 S/NV_N2"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stop 116 S/NV_S3"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stop 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 709 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"STP 425"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 314 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4218
    ,"codigo":"CRO 7709"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7880"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7880"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"STP 425"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rp 910 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Gl. 624 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gl. 709 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rp. 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 709 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 314"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840 OB18"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 660 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4218
    ,"codigo":"CRO 7709"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gl. 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gl. 598 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Cro 996 "
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 24"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 116N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 175"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 698 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP. 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4218
    ,"codigo":"CRO 7709"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 335 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 2"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4218
    ,"codigo":"CRO 7709"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 335"
    ,"ancho_pro":5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 615 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 598 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"440 E "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"160 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"25-abr-00"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"23-jun-00"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 11"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal  615 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4218
    ,"codigo":"CRO 7709"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Crob 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 660 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544  E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 724"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":360
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - 15"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 450"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":""
    ,"nivel":null
    ,"codigo":""
    ,"ancho_pro":null
    ,"alto_pro":null
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":""
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 n"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 340"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 732"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389 - BRAZO"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CRO 340"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CRO 732"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP 441 "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"7840 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"STP 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 314"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 910 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7840 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 314"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7840"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 314"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"IESA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"CRO 404 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 24"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"stp 660 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"stp 660 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"STP 369 - 15 - SN E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"CRO 404 W"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 734"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 735"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 816"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 732"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 - VAS"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996-S/N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 816"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"GAL 624"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 896 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"STP 441 N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"STP 660 "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"cro 816"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"CRO 544"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Cx.350 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Rp.403 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369-P.12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154-S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp. 996-S/N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3060
    ,"codigo":"Stp. 896 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"Stp. 928"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - 15 - SN"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 603 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP 928"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP 896 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 824 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"CRO 404 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 369"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP. 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP. 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 S/N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP. 160 Vs"
    ,"ancho_pro":4
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 857 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"GaL 602"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"stp 369 - piso 15 - sn"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 816"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stp 160 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stp 116"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stp 175"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":2890
    ,"codigo":"Stp 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 387"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 726"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 816 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 816 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 734 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 602 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 389 (-)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"STP 369 - 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RPA 387"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STP 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 602 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 857 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 440 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"S/N 160 S "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 160 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp 175"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CRO 756"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"SN 289"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cx 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 859 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cx 456 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cx 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cx 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cx 857 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4154
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 - PISO 15"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"RPA 782"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4
    ,"codigo":"CRO 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cx 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 857 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 815 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 624 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"cro. 671"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Rpa. 782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa: 7854"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Cro. 350 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro. 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro. 746 N"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 857 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3540
    ,"codigo":"Cro 809"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stop 996 S/N"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stop 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stop 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stop 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 643 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 815 S (+)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 857 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"Cro 756"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa 782 (+)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369-Piso 12"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Cro. 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp. 441"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2980
    ,"codigo":"Stp. 440 - Com"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2980
    ,"codigo":"Stp. 440  W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2980
    ,"codigo":"Stp. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"Stp. 928"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CX 671"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"CX 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"STP 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"857 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp 995"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp 996"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"SN 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CX 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369 (12)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa (-) 815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa (+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"SN 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CX 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"RPA 403"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(-)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+) 815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 404"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"SN 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"SN 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CX 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa 815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 602 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"S/N 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"RPA 404"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CRO 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"RPA 7854"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(-)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"RPA782"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"SN 154"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"CX 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP 369"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"STP 996 S/N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"CX 809 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4.5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"cro  761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"cro  727"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Stp. 369(piso 12)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"S/N 154S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(-)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 404"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro. 727"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro. 7838 w"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(-)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2940
    ,"codigo":"STP 896"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 440 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 116 "
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"STP 175"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"STOP 765 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal 602 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(-)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Rpa. 404"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369(PISO 12)"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Cro. 761"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3420
    ,"codigo":"CX. 727"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP. 369"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":4050
    ,"codigo":"RP. 389"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro. 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 816 "
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"stp 996"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"stp 896 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2960
    ,"codigo":"stp 896 N"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"stp 175 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"stp 175 E"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"stp 440W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 456 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro 816"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Rpa(+)815 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3420
    ,"codigo":"Rpa 727 w"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp.369 PISO 12"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp.154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4154
    ,"codigo":"Cro. 350"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3600
    ,"codigo":"STP. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"STP. 369  (PISO12)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 456 S"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Cro 544 E"
    ,"ancho_pro":4.5
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"A"
    ,"nivel":3300
    ,"codigo":"Rpa. 910 S"
    ,"ancho_pro":5
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Gal. 602 W"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro.642 E"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Cro. 816"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3300
    ,"codigo":"Stop. 765 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"MCEISA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3540
    ,"codigo":"Stp. 996"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 660"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 W"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 440 E (Rpa. 175)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":2890
    ,"codigo":"Stp. 160 S"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"CMA"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 N"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":4050
    ,"codigo":"Stp. 369 (PISO 12)"
    ,"ancho_pro":4
    ,"alto_pro":5
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  },
  {
     "tipoTipoId":"E"
    ,"nivel":3600
    ,"codigo":"Stp. 154 S"
    ,"ancho_pro":4
    ,"alto_pro":4
    ,"createdAt":"2015-12-31"
    ,"updatedAt":"2015-12-31"
    ,"empresaEmpresaid":"COPSEM"
  }];

  labores.forEach(function(item) {

    console.log(item.Labor);
    
    Labor.find({
        where: Sequelize.or({ codigo: item.codigo })
    }).then(function (labor) {
        if (!labor) 
        {
            console.log('kklo');
            Labor.create
            ({ 
                codigo: item.codigo,
                nombre: item.nombre,       
                nivel: item.nivel, 
                ancho_pro:item.ancho_pro,
                alto_pro:item.alto_pro,
                empresaEmpresaid:item.empresaEmpresaid, 
                tipoTipoId:item.tipoTipoId,
            })
        }
        else
        {
            console.log('existe labor');
        }

    });

    // Labor.create({
    //     codigo: item.id,
    //     nombre: item.nombre,       
    //     nivel: item.nivel, 
    //     ancho_pro:item.ancho_pro,
    //     alto_pro:item.alto_pro,
    //     tipoTipoId:item.tipoTipoId,
    //     empresaEmpresaid:item.empresaEmpresaid,
    // })
    // .then(function(tipo) {
    //   console.log('tipo ' + item.nombre + ' creado');
    // })
    // .catch(function(err) {
    //   console.log(err);
    // })

  })
})
.catch(function(err) {
  console.log(err);
});

