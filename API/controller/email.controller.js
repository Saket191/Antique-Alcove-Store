import nodemailer from 'nodemailer';
function sendMail(email,password)
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'saket1708@gmail.com',
          pass: 'mrdjcsigwxyafxxm'
        }
      });
      
      var mailOptions = {
        from: 'saket1708@gmail.com',
        to: email,
        subject: 'Pawnshop mailer',
        html: '<h1>Welcome to Node Mailer</h1><p>This is verification mail by pawnshop</p><h2>Username='+email+'<br> Password='+password+'</h2>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

export default sendMail;