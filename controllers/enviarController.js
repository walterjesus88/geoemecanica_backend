
var nodemailer = require('nodemailer');
var email = require('mailer');
var path = require('path');
var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var fs = require('fs');

var Labor = require('../models/Labor');
var Tipo = require('../models/Tipo');
var Empresa = require('../models/Empresa');
var Inspeccion = require('../models/Inspeccion');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');
var Respuesta = require('../models/Respuesta');



//console.log(path.join(process.cwd(), 'static', /hola.txt));

exports.index = function(req, res) {
	// var pdf = require('html-pdf');

	// var html = fs.readFileSync(path.join(process.cwd(), 'pdf',"/hola.html"), 'utf8');
	// var options = { format: 'Letter' };

	// pdf.create(html, options).toFile(path.join(process.cwd(), 'pdf',"/hola.pdf"), function(err, res) {
	//   if (err) return console.log(err);
	//   console.log(res);
	// });

// var loremIpsum = 'Lorem ipsum dolor or sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.';  

// doc.y = 20;
// doc.fillColor('black')
// doc.text(loremIpsum, {
//    paragraphGap: 10,
//    indent: 20,
//    align: 'justify',
//    columns: 2
// })



	doc = new PDFDocument
	doc.addPage({
	    size: 'LEGAL',
	    layout: 'landscape'
	})
	doc.pipe(fs.createWriteStream('theosys.pdf'));
					
	Inspeccion.findAll(				
		{
	      //where: condicion,
	      include: [
	        {model: Labor, attributes: ['nivel', 'alto_pro', 'ancho_pro']},
	        {model: Roca, attributes: ['codigo', 'porcentaje']},
	        {model: Sostenimiento, attributes: ['codigo', 'descripcion']},
	        {model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta']}
	      ]
	    }
	)
	.then(function(inspecciones) {

  		console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');  		
  		var  inspeccionjson=JSON.stringify(inspecciones);
  		console.log(inspeccionjson);
  		console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');	

		var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';  
		doc.y = 320;
		doc.fillColor('black')
		doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1	});

			doc.fillColor('black')
			doc.text('labor',-920,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('nivel',-810,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('prog_inicio/fin',-750,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			//doc.text('prog_fin',-710,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('gsi',-590,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('cond_geomecanica',-500,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('recomendacion geomecanica',-215,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('sostenimiento',315,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5}); 
			doc.text('%_excav', 600,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			doc.text('ancho_alto', 600,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			//doc.text('%_exc_alto', 410,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('riesgo', 740,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 

		var a = 0;

	    inspecciones.forEach(function(inspeccion) {
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

	    	console.log(porc_exc_ancho);
	    	console.log(gsi);
			doc.fillColor('black')
			doc.text(inspeccion.laborCodigo,-920,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(nivel,-810,a+200, { paragraphGap: 100,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_inicio,-730,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_fin,-670,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(gsi,-590,a+200, { paragraphGap: -660,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.condicion_geomecanica,-500,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.comentario,-215,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(descripcion_sosten,380,a+200, { paragraphGap: 10,indent:40,align: 'left',columns: 2,lineGap:5,height:5,width:420}); 
			doc.text(porc_exc_ancho, 610,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(porc_exc_alto, 680,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(nivel_riesgo, 735,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 			
			a = a + 40;
	    })
	
	doc.pipe( res );
	doc.end();		
		
	})
    .catch(function(err) {
    	res.status(500).send(err);
  	});

}

exports.store = function(req, res, next) {

	// email.send({
	//     host : "smtp.gmail.com",
	//     port : "465",
	//     ssl : true,
	//     domain : "i-visionblog.com",
	//     to : "wjesus88@gmail.com",
	//     from : "walter_js56@gmail.com",
	//     subject : "Mailer library Mail node.js",
	//     text: "Mail by Mailer library",
	//     html: "<span> Hello World Mail sent from  mailer library" ,
	//     authentication : "login",        // auth login is supported; anything else $
	//     username : 'theosys.pe@gmail.com',
	//     password : "5Y5T3MCR4FT"
	//     },
	//     function(err, result){
	//       if(err){ console.log(err); res.send("error occured"); }
	//       else { console.log('hurray! Email Sent');
	//       res.send("Email Sent")}
	// });

	var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	   auth: {
	       user: "theosys.pe@gmail.com",
	       pass: "5Y5T3MCR4FT"
	   }
	});

	//generacion del PDF//
	doc = new PDFDocument
	doc.addPage({
	    size: 'LEGAL',
	    layout: 'landscape'
	})
	doc.pipe(fs.createWriteStream( path.join(process.cwd(), 'pdf',"/"+req.body.fecha+".pdf")));
					
	var condicion = {};
	if (req.body.nivel) {
		condicion.nivel_riesgo = req.body.nivel;
	}
	if (req.body.fIni && req.body.fFin) {
		condicion.fecha = {$between: [req.body.fIni, req.body.fFin]};
	}				
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

  		console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');  		
  		var  inspeccionjson=JSON.stringify(inspecciones);
  		console.log(inspeccionjson);
  		console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');	

  		// console.log(req.body.fIni);
  		// console.log(req.body.fFin);
  		// console.log(req.body.nivel);

		var titulo = 'REPORTE GEOMECANICA DE ESTAB DE LABORES';  
		var desde = req.body.fIni;
		var hasta = req.body.fFin;

		d=desde.split('T');
		h=hasta.split('T');

		doc.moveTo(100, 120)                       
	    .lineTo(190, 120)                            
	  	// .quadraticCurveTo(130, 200, 150, 120)        # draw a quadratic curve
	  	// .bezierCurveTo(190, -40, 200, 200, 300, 150) # draw a bezier curve
	    //.lineTo(400, 90)                             
	    .stroke()    

		doc.y = 320;
		doc.fillColor('blue')
		doc.text(titulo, 10,60,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Desde', -710,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(d[0],-580,85,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Hasta',-710,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text(h[0], -580,105,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

		doc.text('Geomecanica', -700,505,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('V.G', -300,505,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Seguridad', 200,505,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});
		doc.text('Spte Mina', 700,505,{ paragraphGap: 10,indent: 40,align: 'center',columns: 1,lineGap:5,height:5	});

			doc.fillColor('black')
			doc.text('labor',-920,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text('nivel',-810,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('prog_inicio/fin',-750,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			//doc.text('prog_fin',-710,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('gsi',-590,160, { paragraphGap: -190,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('cond_geomecanica',-500,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('recomendacion geomecanica',-215,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('sostenimiento',315,160, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5}); 
			doc.text('%_excav', 600,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			doc.text('ancho_alto', 600,180,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5 }); 
			//doc.text('%_exc_alto', 410,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text('riesgo', 740,160,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 

		var a = 0;

	    inspecciones.forEach(function(inspeccion) {
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
			doc.text(inspeccion.laborCodigo,-920,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5});
			doc.text(nivel,-810,a+200, { paragraphGap: 100,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_inicio,-730,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.progresiva_fin,-670,a+200, { paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(gsi,-590,a+200, { paragraphGap: -660,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.condicion_geomecanica,-500,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(inspeccion.comentario,-215,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(descripcion_sosten,380,a+200, { paragraphGap: 10,indent:40,align: 'left',columns: 2,lineGap:5,height:5,width:420}); 
			doc.text(porc_exc_ancho, 610,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(porc_exc_alto, 680,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 
			doc.text(nivel_riesgo, 735,a+200,{ paragraphGap: 10,indent: 40,align: 'left',columns: 2,lineGap:5,height:5	}); 			
			a = a + 40;
	    })
	
	doc.pipe( res );
	doc.end();		
		
	})
    .catch(function(err) {
    	res.status(500).send(err);
  	});

	//FIN DE GENERAR EL PDF//


	smtpTransport.sendMail({
	    from: req.body.from, // sender address
	    to: req.body.email, // comma separated list of receivers
	    subject: req.body.asunto, // Subject line
	    text: req.body.texto,
	    attachments: [
        {   // utf-8 string as an attachment
            fileName: "Inspeccion"+req.body.fecha,
            filePath: path.join(process.cwd(), 'pdf',"/"+req.body.fecha+".pdf")
            //filePath:  path.join(process.cwd(), 'static', /hola.txt);
        }
        ]
        //console.log(__dirname+"./inspecciones_pdf/hola.txt");
	    // html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+text+
	    //      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
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
