
var nodemailer = require('nodemailer');
var email = require('mailer');

exports.index = function(req, res) {

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

	// email.send({
	//     host : "smtp.gmail.com",
	//     port : "465",
	//     ssl : true,
	//     domain : "i-visionblog.com",
	//     to : "wjesus88@gmail.com",
	//     from : "wjesus88@gmail.com",
	//     subject : "Mailer library Mail node.js",
	//     text: "Mail by Mailer library",
	//     html: "<span> Hello World Mail sent from  mailer library" ,
	//     authentication : "login",        // auth login is supported; anything else $
	//     username : 'wjesus88@gmail.com',
	//     password : "informaticos"
	//     },
	//     function(err, result){
	//       if(err){ console.log(err); res.send("error occured"); }
	//       else { console.log('hurray! Email Sent'); 
	//       res.send("Email Sent")}
	// });

}

exports.store = function(req, res, next) {
	var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	   auth: {
	       user: "theosys.pe@gmail.com",
	       pass: "5Y5T3MCR4FT"
	   }
	});

	smtpTransport.sendMail({
	    from: req.body.email, // sender address
	    to: req.body.email, // comma separated list of receivers
	    subject: req.body.asunto, // Subject line
	    text: req.body.texto // plaintext body   
	    // html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+text+
	    //      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'

	}, function(error, response){
	   if(error){
	       console.log(error);
	   }else{
	       console.log("Mail sent: " + response.message);
	   }
	});
}