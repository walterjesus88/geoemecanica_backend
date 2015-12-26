
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

	doc = new PDFDocument
	var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "classd": "child-of-10"}];
	// for(var i=0;i<arr.length;i++){
	//     var obj = arr[i];
	//     //console.log(obj);

	//     for(var key in obj){
	//         var attrName = key;
	//         var attrValue = obj[key];

	//         doc.addPage()
	// 		   .fontSize(25)
	// 		   .text(attrValue, 100, 100)

	// 	    console.log(attrValue);
	//     }

	// }
	Inspeccion.findAll(		
		//{include: [{model: Tipo, attributes: ['nombre']}, {model:Empresa, attributes: ['nombre']}]}
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
		doc = new PDFDocument
	    //console.log(inspecciones);

	    inspecciones.forEach(function(inspeccion) {
	    	// ret_users.push({
	     //                 id:lab.nombre                   
	     //    });	
			doc.pipe(fs.createWriteStream('theosys.pdf'));

			doc.save()
			   .moveTo(100, 150)
			   .lineTo(100, 250)
			   .lineTo(200, 250)
			   .fill("#FF3300")

			doc.scale(0.6)
			   .translate(470, -380)
			   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
			   .fill('red', 'even-odd')
			   .restore()

			console.log(inspeccion.nivel_riesgo);

	    	doc.addPage()
			   .fillColor("blue")	    		
			   .text(inspeccion.nivel_riesgo, 100, 150)
			   .text(inspeccion.laborCodigo, 200, 150)
			   .text(inspeccion.recomendacion, 300, 150)
			   .text(inspeccion.sostenimientoSostenimientoid, 400, 150)
			   .text(inspeccion.comentario, 500, 150);
	
	  
	    })

		doc.end();		


	})
    .catch(function(err) {
    	res.status(500).send(err);
  	});

	// // Create a SMTP transport object
	// var transport = nodemailer.createTransport("SMTP", {
	//         service: 'gmail',
	//         //host: 'smtp.gmail.com',
	//         //secureConnection: true,
 // 			//port: 465,
	//         //port: 587, // port for secure SMTP
	//         auth: {
	//             user: "wjesus88@gmail.com",
	//             pass: "xxx"
	//         },
	//      //    tls: {
	// 	    //     ciphers:'SSLv3'
	// 	    // }
	//     });

	// console.log('SMTP Configured');
	// var message = {
	//     from: 'Sender Name <walter_js56@outlook.com>',
	//     to: '"Receiver Name" <walter_js56@outlook.com>',
	//     subject: 'Nodemailer is unicode friendly ✔',
	//     text: 'Hello to myself!',
	//     html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
	//          '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
	// };

	// console.log('Sending Mail');
	// transport.sendMail(message, function(error){
	// 	if(error){
	// 	    console.log('Error occured');
	// 	    console.log(error.message);
	// 	    return;
	// 	}
	// 	else
	// 	{
	// 		console.log('Message sent successfully!');
	// 	}

	// });

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

	smtpTransport.sendMail({
	    from: req.body.from, // sender address
	    to: req.body.email, // comma separated list of receivers
	    subject: req.body.asunto, // Subject line
	    text: req.body.texto,
	    attachments: [
        {   // utf-8 string as an attachment
            fileName: req.body.asunto,
            filePath: path.join(process.cwd(), 'pdf',"/"+req.body.fecha)
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
	       console.log(path.join(process.cwd(), 'pdf',"/"+req.body.fecha));
	   }
	});
}
