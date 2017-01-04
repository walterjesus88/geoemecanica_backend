
var nodemailer = require('nodemailer');
var email = require('mailer');
var path = require('path');
var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var fs = require('fs');
var config = require('../config.json');
var json2csv = require('json2csv');

var Labor = require('../models/Labor');
var Tipo = require('../models/Tipo');
var Empresa = require('../models/Empresa');
var Inspeccion = require('../models/Inspeccion');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');
var Respuesta = require('../models/Respuesta');
var User = require('../models/User');

var User = require('../models/User');


//console.log(path.join(process.cwd(), 'static', /hola.txt));

exports.index = function(req, res) {

	name=req.query.nom;
	fIni=req.query.fIni;
	console.log('*******');
	console.log(name);
	console.log(fIni);
	console.log('*******');

	var condicion = {};
	if (req.query.nivel) {
		condicion.nivel_riesgo = req.query.nivel;
	}
	if (req.query.fIni && req.query.fFin) {
		condicion.fecha = {$between: [req.query.fIni, req.query.fFin]};
	}	

	var doc = new PDFDocument( {
	    size: 'LEGAL',
	    layout: 'landscape'
	});

	var stream = doc.pipe(blobStream());
	doc.pipe(fs.createWriteStream( path.join(process.cwd(), 'pdf',"/"+req.query.fIni+".pdf")));	


	Inspeccion.findAll(				
		{
	      where: condicion,
	      include: [
	        {model: Labor, attributes: ['nivel', 'alto_pro', 'ancho_pro']},
	        {model: Roca, attributes: ['codigo', 'porcentaje']},
	        {model: Sostenimiento, attributes: ['codigo', 'descripcion']},
	        {model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta']}
	      ]
	    }
	)
	.then(function(inspecciones) {	
		
  		//var  inspeccionjson=JSON.stringify(inspecciones);
  		//console.log(inspeccionjson);  	
		var a = 0;  			
  		
		var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';  
		var user='req.user.uid';
		doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(user, 600,80,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

		var desde = req.query.fIni;
		var hasta = req.query.fFin;

		d=desde.split('T');
		h=hasta.split('T');	
		//doc.y = 320;
		doc.fillColor('black')
		doc.text('Desde', -710,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(d[0],-580,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Hasta',-710,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(h[0], -580,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

		doc.text('Geomecanica', -690,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Jefe de Guardia', -300,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Seguridad', 100,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Spte Mina', 500,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

			doc.fillColor('black')
			doc.fontSize(10)
			doc.text('LABOR',-940,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('PROG.',-840,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('Anch/Alt',-840,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('NIVEL',-740,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('PROGRES.',-660,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('Inicio/Fin',-660,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 		 
			doc.text('GSI',-540,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('COND GEOMECANICA',-465,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('RECOMENDACION GEOMECANICA',-220,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('SOSTENIMIENTO',180,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			doc.text('TURNO',370,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			doc.text('%_EXCAV', 450,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
				doc.text('Ancho/Alto', 450,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 		
			doc.text('RIESGO', 570,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('COMENTARIO', 700,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});   	



	    inspecciones.forEach(function(inspeccion) {	 

	    	doc.moveTo(90, 560).lineTo(200, 560).stroke()  
		    doc.moveTo(290, 560).lineTo(400, 560).stroke() 
		    doc.moveTo(490, 560).lineTo(600, 560).stroke() 
		    doc.moveTo(690, 560).lineTo(800, 560).stroke()  
		    //tabla 
		    doc.moveTo(40, 145).lineTo(40, 500).stroke() 
		    doc.moveTo(90, 145).lineTo(90, 500).stroke() 
		    doc.moveTo(140, 145).lineTo(140, 500).stroke() 
		    doc.moveTo(180, 145).lineTo(180, 500).stroke() 
		    doc.moveTo(240, 145).lineTo(240, 500).stroke() 
		    doc.moveTo(280, 145).lineTo(280, 500).stroke() 
		    doc.moveTo(395, 145).lineTo(395, 500).stroke() 
		    doc.moveTo(580, 145).lineTo(580, 500).stroke() 
		    doc.moveTo(700, 145).lineTo(700, 500).stroke() 	
		    doc.moveTo(740, 145).lineTo(740, 500).stroke() 
		    doc.moveTo(792, 145).lineTo(792, 500).stroke()
		    doc.moveTo(852, 145).lineTo(852, 500).stroke() 
		    doc.moveTo(980, 145).lineTo(980, 500).stroke()
		    //lineas horizontales//
		    doc.moveTo(40, 145).lineTo(980, 145).stroke()
		    doc.moveTo(40, 190).lineTo(980, 190).stroke()  
	   
	    	var det_inspeccion=[];	 
	    	var nivel=inspeccion['labor']['nivel'];
	    	var descripcion_sosten=inspeccion['sostenimiento']['descripcion'];
	    	var nivel_riesgo=inspeccion['nivel_riesgo'];
	    	var ancho_real=inspeccion.ancho_real;
	    	var alto_real=inspeccion.alto_real;
	    	var alto_pro=inspeccion['labor']['alto_pro'];
	    	var ancho_pro=inspeccion['labor']['ancho_pro'];
	    	var porcentaje=inspeccion['roca']['porcentaje'];
	    	var gsi=inspeccion['roca']['codigo'];
	    	var exc_ancho=(((ancho_real-ancho_pro)/ancho_pro)*100).toFixed(2);;
	    	var exc_alto=(((alto_real-alto_pro)/alto_pro)*100).toFixed(2);;
	    	porc_exc_ancho = Math.abs(exc_ancho);
	    	porc_exc_alto = Math.abs(exc_alto); 

			doc.fillColor('black')
			doc.fontSize(9)
			doc.text(inspeccion.laborCodigo,-940,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(ancho_pro,-840,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(alto_pro,-810,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(nivel,-740,a+200, { paragraphGap: 100,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_inicio,-660,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_fin,-620,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(gsi,-540,a+200, { paragraphGap: -660,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.condicion_geomecanica,282,a+200,{ paragraphGap: 10,indent: 40,align: 'justify',columns: 1,lineGap:5,height:110,width:110}); 
			doc.text(inspeccion.recomendacion,405,a+200,{ paragraphGap: 10,indent: 40,align: 'justify',columns: 1,lineGap:5,height:110,width:150	}); 
			doc.text(descripcion_sosten,580,a+200, { paragraphGap: 10,indent:40,align: 'justify',columns: 1,lineGap:5,height:110,width:110}); 
			doc.text(inspeccion.guardia,390,a+200, { paragraphGap: 10,indent:40,align: 'justify',columns: 2,lineGap:5,height:5}); 
			doc.text(porc_exc_ancho, 460,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text(porc_exc_alto, 510,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(nivel_riesgo, 570,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 			
			doc.text(inspeccion.comentario, 820,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 1,lineGap:5,height:110,width:150	}); 			
			a = a + 40;
			if (a > 200) {
		        a = 0;
		        doc.addPage({
				    size: 'LEGAL',
				    layout: 'landscape'
				});
				
				doc.fontSize(12)
				var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';  
				var user= 'req.user.uid';

				doc.fillColor('black')
				doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(user, 600,90,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Desde', -710,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(d[0],-580,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Hasta',-710,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(h[0], -580,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

				doc.text('Geomecanica', -690,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Jefe de Guardia', -300,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Seguridad', 100,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Spte Mina', 500,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});


				doc.fillColor('black')
				doc.fontSize(10)
				doc.text('LABOR',-940,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('PROG.',-840,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
					doc.text('Anch/Alt',-840,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('NIVEL',-740,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('PROGRES.',-660,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('Inicio/Fin',-660,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 		 
				doc.text('GSI',-540,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('COND GEOMECANICA',-465,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('RECOMENDACION GEOMECANICA',-220,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('SOSTENIMIENTO',180,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
				doc.text('TURNO',370,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
				doc.text('%_EXCAV', 450,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
					doc.text('Ancho/Alto', 450,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 		
				doc.text('RIESGO', 570,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
				doc.text('COMENTARIO', 700,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});  
		    }
	    })

	doc.pipe( res );
	doc.end();

	})
    .catch(function(err) {
    	res.status(500).send(err);
  	});


    var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	   auth: {
	       user: config.email.correo,
	       pass: config.email.password
	   }
	});


		smtpTransport.sendMail({
		    from: 'wjesus88@gmail.com', // sender address
		    to:  'wjesus88@gmail.com', // comma separated list of receivers
		    subject: 'req.body.asuntoxx', // Subject line
		    text: 'req.body.texto',
		    attachments: [
	        {   // utf-8 string as an attachment
	            fileName: "Inspeccion"+req.query.fIni,
	            filePath: path.join(process.cwd(), 'pdf',"/"+req.query.fIni+".pdf")       
	        }
	        ]

		}, function(error, response){
		   if(error){
		       console.log(error);
		   }else{
		       console.log("Mail sent: " + response.message);

				res.setHeader('content-type','application/pdf');
				res.sendfile('pdf/'+name+'.pdf');

		       //console.log("../"+__dirname+"/pdf/hola.txt");
		       console.log(path.join(process.cwd(), 'pdf',"/"+req.query.fIni+".pdf"));
		   }
		});

	// res.setHeader('content-type','application/pdf');
	// res.sendfile('pdf/'+name+'.pdf');
	//res.sendfile(path.join(process.cwd(), 'pdf',"/"+req.query.fIni+".pdf")));	

}

exports.store = function(req, res, next) {

	var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	   auth: {
	       user: config.email.correo,
	       pass: config.email.password
	   }
	});

	var condicion = {};
	if (req.body.nivel) {
		condicion.nivel_riesgo = req.body.nivel;
	}
	if (req.body.fIni && req.body.fFin) {
		condicion.fecha = {$between: [req.body.fIni, req.body.fFin]};
	}

	//generacion del PDF//
	var doc = new PDFDocument( {
	    size: 'LEGAL',
	    layout: 'landscape'
	});

	var stream = doc.pipe(blobStream());
	doc.pipe(fs.createWriteStream( path.join(process.cwd(), 'pdf',"/"+req.body.fecha+".pdf")));


	Inspeccion.findAll(
		{
	      where: condicion,
	      include: [
	        {model: Labor, attributes: ['nivel', 'alto_pro', 'ancho_pro']},
	        {model: Roca, attributes: ['codigo', 'porcentaje']},
	        {model: Sostenimiento, attributes: ['codigo', 'descripcion']},
	        {model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta']}
	      ]
	    }
	)
	.then(function(inspecciones) {

  		var  inspeccionjson=JSON.stringify(inspecciones);

		var a = 0;

		var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';
		var user=req.user.uid;

		doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(user, 600,80,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

		var desde = req.body.fIni;
		var hasta = req.body.fFin;

		d=desde.split('T');
		h=hasta.split('T');
		//doc.y = 320;
		doc.fillColor('black')
		doc.text('Desde', -710,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(d[0],-580,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Hasta',-710,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(h[0], -580,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

		doc.text('Geomecanica', -690,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Jefe de Guardia', -300,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Seguridad', 100,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Spte Mina', 500,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

			doc.fillColor('black')
			doc.fontSize(10)
			doc.text('LABOR',-940,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('PROG.',-840,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('Anch/Alt',-840,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('NIVEL',-740,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('PROGRES.',-660,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('Inicio/Fin',-660,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('GSI',-540,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('COND GEOMECANICA',-465,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('RECOMENDACION GEOMECANICA',-220,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('SOSTENIMIENTO',180,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
			doc.text('TURNO',370,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
			doc.text('%_EXCAV', 450,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
				doc.text('Ancho/Alto', 450,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
			doc.text('RIESGO', 570,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text('COMENTARIO', 700,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});



	    inspecciones.forEach(function(inspeccion) {

	    	doc.moveTo(90, 560).lineTo(200, 560).stroke()
		    doc.moveTo(290, 560).lineTo(400, 560).stroke()
		    doc.moveTo(490, 560).lineTo(600, 560).stroke()
		    doc.moveTo(690, 560).lineTo(800, 560).stroke()
		    //tabla
		    doc.moveTo(40, 145).lineTo(40, 500).stroke()
		    doc.moveTo(90, 145).lineTo(90, 500).stroke()
		    doc.moveTo(140, 145).lineTo(140, 500).stroke()
		    doc.moveTo(180, 145).lineTo(180, 500).stroke()
		    doc.moveTo(240, 145).lineTo(240, 500).stroke()
		    doc.moveTo(280, 145).lineTo(280, 500).stroke()
		    doc.moveTo(395, 145).lineTo(395, 500).stroke()
		    doc.moveTo(580, 145).lineTo(580, 500).stroke()
		    doc.moveTo(700, 145).lineTo(700, 500).stroke()
		    doc.moveTo(740, 145).lineTo(740, 500).stroke()
		    doc.moveTo(792, 145).lineTo(792, 500).stroke()
		    doc.moveTo(852, 145).lineTo(852, 500).stroke()
		    doc.moveTo(980, 145).lineTo(980, 500).stroke()
		    //lineas horizontales//
		    doc.moveTo(40, 145).lineTo(980, 145).stroke()
		    doc.moveTo(40, 190).lineTo(980, 190).stroke()


	    	var det_inspeccion=[];
	    	var nivel=inspeccion['labor']['nivel'];
	    	var descripcion_sosten=inspeccion['sostenimiento']['descripcion'];
	    	var nivel_riesgo=inspeccion['nivel_riesgo'];
	    	var ancho_real=inspeccion.ancho_real;
	    	var alto_real=inspeccion.alto_real;
	    	var alto_pro=inspeccion['labor']['alto_pro'];
	    	var ancho_pro=inspeccion['labor']['ancho_pro'];
	    	var porcentaje=inspeccion['roca']['porcentaje'];
	    	var gsi=inspeccion['roca']['codigo'];
	    	var exc_ancho=(((ancho_real-ancho_pro)/ancho_pro)*100).toFixed(2);;
	    	var exc_alto=(((alto_real-alto_pro)/alto_pro)*100).toFixed(2);;
	    	porc_exc_ancho = Math.abs(exc_ancho);
	    	porc_exc_alto = Math.abs(exc_alto);

			doc.fillColor('black')
			doc.fontSize(9)
			doc.text(inspeccion.laborCodigo,-940,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(ancho_pro,-840,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(alto_pro,-810,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(nivel,-740,a+200, { paragraphGap: 100,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(inspeccion.progresiva_inicio,-660,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(inspeccion.progresiva_fin,-620,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(gsi,-540,a+200, { paragraphGap: -660,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(inspeccion.condicion_geomecanica,282,a+200,{ paragraphGap: 10,indent: 40,align: 'justify',columns: 1,lineGap:5,height:110,width:110});
			doc.text(inspeccion.recomendacion,405,a+200,{ paragraphGap: 10,indent: 40,align: 'justify',columns: 1,lineGap:5,height:110,width:150	});
			doc.text(descripcion_sosten,580,a+200, { paragraphGap: 10,indent:40,align: 'justify',columns: 1,lineGap:5,height:110,width:110});
			doc.text(inspeccion.guardia,390,a+200, { paragraphGap: 10,indent:40,align: 'justify',columns: 2,lineGap:5,height:5});
			doc.text(porc_exc_ancho, 460,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text(porc_exc_alto, 510,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(nivel_riesgo, 570,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
			doc.text(inspeccion.comentario, 820,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 1,lineGap:5,height:110,width:150	});
			a = a + 40;
			if (a > 200) {
		        a = 0;
		        doc.addPage({
				    size: 'LEGAL',
				    layout: 'landscape'
				});

				doc.fontSize(12)

				var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';
				var user= req.user.uid;


				doc.fillColor('black')
				doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(user, 600,90,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Desde', -710,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(d[0],-580,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Hasta',-710,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text(h[0], -580,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

				doc.text('Geomecanica', -690,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Jefe de Guardia', -300,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Seguridad', 100,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
				doc.text('Spte Mina', 500,570,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});


				doc.fillColor('black')
				doc.fontSize(10)
				doc.text('LABOR',-940,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('PROG.',-840,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
					doc.text('Anch/Alt',-840,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
				doc.text('NIVEL',-740,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('PROGRES.',-660,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('Inicio/Fin',-660,180, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('GSI',-540,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('COND GEOMECANICA',-465,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('RECOMENDACION GEOMECANICA',-220,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('SOSTENIMIENTO',180,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
				doc.text('TURNO',370,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
				doc.text('%_EXCAV', 450,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
					doc.text('Ancho/Alto', 450,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 });
				doc.text('RIESGO', 570,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});
				doc.text('COMENTARIO', 700,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	});

		    }

	    })

	doc.pipe( res );
	doc.end();

	//res.setHeader('content-type','application/pdf');
	//res.sendfile('pdf/'+name+'.pdf');	
	//res.sendfile('pdf/2016-01-15T05:00:00.000Z.pdf');	

	})
    .catch(function(err) {
    	res.status(500).send(err);
  	});

	//FIN DE GENERAR EL PDF//

	if(req.body.condicion!=1)
	{
		smtpTransport.sendMail({
		    from: req.body.from, // sender address
		    to: req.body.email, // comma separated list of receivers
		    subject: req.body.asunto, // Subject line
		    text: req.body.texto,
		    attachments: [
	        {   // utf-8 string as an attachment
	            fileName: "Inspeccion"+req.body.fecha,
	            filePath: path.join(process.cwd(), 'pdf',"/"+req.body.fecha+".pdf")       
	        }
	        ]

		}, function(error, response){
		   if(error){
		       console.log(error);
		   }else{
		       console.log("Mail sent: " + response.message);
		       //console.log("../"+__dirname+"/pdf/hola.txt");
		       console.log(path.join(process.cwd(), 'pdf',"/"+req.body.fecha+".pdf"));
		   }
		});
	}




}



exports.getCSV = function(req, res, next) {
	var insps = [];
	var fields = ['Labor', 'Nivel', 'AnchoPro', 'AltoPro', 'Empresa', 'Tipo',
	'Fecha', 'Guardia', 'AnchoReal', 'AltoReal', 'CumplimientoRecomendacion',
	'NivelRiesgo', 'Condicion', 'Recomendacion', 'Sostenimiento', 'GSI', 'PorcentajeTabla',
	'TipoSostenimiento', 'Responsable', 'Operaciones', 'Seguridad', 'Geomecanico', 'Registro',
	'ProcesoMinado', 'SostenimientoTope', 'HastialDerecho', 'HastialIzquierdo', 'MallasTraslapadas',
	'MallasRotas'];
	Inspeccion.findAll(
		{
			include: [
				{model: Labor, attributes: ['codigo', 'nivel', 'ancho_pro', 'alto_pro'], include: [
					{model: Empresa, attributes: ['nombre']},
					{model: Tipo, attributes: ['nombre']},
				]},
				{model: Roca, attributes: ['codigo', 'porcentaje']},
				{model: Sostenimiento, attributes: ['codigo', 'descripcion']},
				{model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta']},
				{model: User, as: 'Responsable', attributes: ['nombre']},
				{model: User, as: 'Operaciones', attributes: ['nombre']},
				{model: User, as: 'Seguridad', attributes: ['nombre']},
				{model: User, as: 'Geomecanico', attributes: ['nombre']},
				{model: User, as: 'Registro', attributes: ['nombre']}
			]
		}
	).then(function(inspecciones) {
		console.log(inspecciones[0]);
		for (var i = 0; i < inspecciones.length; i++) {
			var json = {
				Labor: inspecciones[i].labor.codigo,
				Nivel: inspecciones[i].labor.nivel,
				AnchoPro: inspecciones[i].labor.ancho_pro,
				AltoPro: inspecciones[i].labor.alto_pro,
				Empresa: inspecciones[i].labor.empresa.nombre,
				Tipo: inspecciones[i].labor.tipo.nombre,
				Fecha: inspecciones[i].fecha,
				Guardia: inspecciones[i].guardia,
				AnchoReal: inspecciones[i].ancho_real,
				AltoReal: inspecciones[i].alto_real,
				CumplimientoRecomendacion: inspecciones[i].estado_recomendacion,
				NivelRiesgo: inspecciones[i].nivel_riesgo,
				Condicion: inspecciones[i].condicion_geomecanica,
				Recomendacion: inspecciones[i].recomendacion,
				Sostenimiento: inspecciones[i].estado_sostenimiento,
				GSI: inspecciones[i].roca.codigo,
				PorcentajeTabla: inspecciones[i].roca.porcentaje,
				TipoSostenimiento: inspecciones[i].sostenimiento.descripcion
			};
			if (!inspecciones[i].Responsable) inspecciones[i].Responsable = {};
			json.Responsable = inspecciones[i].Responsable.nombre;
			if (!inspecciones[i].Operaciones) inspecciones[i].Operaciones = {};
			json.Operaciones = inspecciones[i].Operaciones.nombre;
			if (!inspecciones[i].Seguridad) inspecciones[i].Seguridad = {};
			json.Seguridad = inspecciones[i].Seguridad.nombre;
			if (!inspecciones[i].Geomecanico) inspecciones[i].Geomecanico = {};
			json.Geomecanico = inspecciones[i].Geomecanico.nombre;
			if (!inspecciones[i].Registro) inspecciones[i].Registro = {};
			json.Registro = inspecciones[i].Registro.nombre;
			for (var key in inspecciones[i].respuesta) {
				if (inspecciones[i].respuesta[key].preguntumPreguntaid === 1) {
					json.ProcesoMinado = inspecciones[i].respuesta[key].respuesta.opcion;
				}
				if (inspecciones[i].respuesta[key].preguntumPreguntaid === 8) {
					if (inspecciones[i].respuesta[key].respuesta.check) {
						json.SostenimientoTope = 'Si';
					} else {
						json.SostenimientoTope = 'No';
					}
				}
				if (inspecciones[i].respuesta[key].preguntumPreguntaid === 9) {
					json.HastialDerecho = inspecciones[i].respuesta[key].respuesta['HASTIAL DERECHO'];
					json.HastialIzquierdo = inspecciones[i].respuesta[key].respuesta['HASTIAL IZQUIERDO'];
				}
				if (inspecciones[i].respuesta[key].preguntumPreguntaid === 11) {
					if (inspecciones[i].respuesta[key].respuesta.check) {
						json.MallasTraslapadas = 'Si';
					} else {
						json.MallasTraslapadas = 'No';
					}
				}
				if (inspecciones[i].respuesta[key].preguntumPreguntaid === 12) {
					if (inspecciones[i].respuesta[key].respuesta.check) {
						json.MallasRotas = 'Si';
					} else {
						json.MallasRotas = 'No';
					}
				}
			}
			if (!json.ProcesoMinado) json.ProcesoMinado = 'S/D';
			if (!json.SostenimientoTope) json.SostenimientoTope = 'S/D';
			if (!json.HastialDerecho) json.HastialDerecho = 'S/D';
			if (!json.HastialIzquierdo) json.HastialIzquierdo = 'S/D';
			if (!json.MallasTraslapadas) json.MallasTraslapadas = 'S/D';
			if (!json.MallasRotas) json.MallasRotas = 'S/D';
			insps.push(json);
		}
		json2csv({data: insps, fields: fields}, function(err, csv) {
			if (err) res.status(500).send(err);
			fs.writeFile('pdf/datos.csv', csv, function(err) {
				if (err) res.status(500).send(err);
				res.download('pdf/datos.csv');
			})
		});
	})
	.catch(function(err) {
		res.status(500).send(err);
	});
}
