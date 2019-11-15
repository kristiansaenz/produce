const nodemailer = require('nodemailer')

module.exports = {
  sendMessage: function(req, res) {

    const transport = {
      host: 'smtp.gmail.com',
      auth: {
        user: 'producefarmapp',
        pass: 'peanutbutt1224'
      }
    }

    const transporter = nodemailer.createTransport(transport)

    const mail = {
      from: req.body.email,
      to: 'producefarmapp@gmail.com',
      subject: 'Produce Farm App',
      text: 'From: ' + req.body.email + '\n\n' + req.body.message
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: err,
        })
      } else {
        res.json({
          msg: 'success',
          data: mail
        })
      }
    })
  }
}