var Sostenimiento = require('../models/Sostenimiento');

var sostenimientos = [
  {
    codigo: 'A',
    color: 'YELLOW',
    descripcion: 'Perno Helicoidal a 1.50 x 1.50 m. Malla electrosoldada.',
    tiempo_colocacion: '1 semana',
    tipo: 'A'
  },
  {
    codigo: 'B',
    color: 'GREEN',
    descripcion: 'Perno Helicoidal a 1.20 x 1.20 m. Malla electrosoldada.',
    tiempo_colocacion: '3 dias',
    tipo: 'A'
  },
  {
    codigo: 'C',
    color: 'CYAN',
    descripcion: 'Shotcrete con fibra (2"). Perno Helicoidal a 1.20 x 1.20 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'A'
  },
  {
    codigo: 'D',
    color: 'BLUE',
    descripcion: 'Shotcrete con fibra (2"). Perno Helicoidal a 1.20 x 1.20 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'A'
  },
  {
    codigo: 'E',
    color: 'PURPLE',
    descripcion: 'Shotcrete con fibra (3"). Perno Helicoidal a 1.00 x 1.00 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'A'
  },
  {
    codigo: 'F',
    color: 'RED',
    descripcion: 'Cimbras, espaciadas a 1.00 m. Marchavantes como guardacabeza.',
    tiempo_colocacion: '',
    tipo: 'A'
  },
  {
    codigo: 'A',
    color: 'YELLOW',
    descripcion: 'Split Set a 1.50 x 1.50 m. Malla electrosoldada.',
    tiempo_colocacion: '1 semana',
    tipo: 'E'
  },
  {
    codigo: 'B',
    color: 'GREEN',
    descripcion: 'Split Set a 1.20 x 1.20 m. Malla electrosoldada.',
    tiempo_colocacion: '3 dias',
    tipo: 'E'
  },
  {
    codigo: 'C',
    color: 'CYAN',
    descripcion: 'Split Set a 1.00 x 1.00 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'E'
  },
  {
    codigo: 'D',
    color: 'BLUE',
    descripcion: 'Shotcrete con fibra (2"). Split Set a 1.20 x 1.20 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'E'
  },
  {
    codigo: 'E',
    color: 'PURPLE',
    descripcion: 'Shotcrete con fibra (3"). Split Set a 1.00 x 1.00 m. Malla electrosoldada.',
    tiempo_colocacion: 'inmediato',
    tipo: 'E'
  }
];

Sostenimiento.sync({force: true}).then(function() {
  sostenimientos.forEach(function(item) {
    Sostenimiento.findOne({where: {codigo: item.codigo, tipoTipoId: item.tipo}})
    .then(function(sostenimiento) {
      if (!sostenimiento) {
        Sostenimiento.create({
          codigo: item.codigo,
          color: item.color,
          descripcion: item.descripcion,
          tiempo_colocacion: item.tiempo_colocacion,
          tipoTipoId: item.tipo
        })
        .then(function() {
          console.log('sostenimiento ' + item.codigo + ' tipo ' + item.tipo + ' creado');
        })
        .catch(function(err) {
          console.log(err);
        });
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  });
})
.catch(function(err) {
  console.log(err);
})
