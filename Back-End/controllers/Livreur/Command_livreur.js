const CommandRepas = require("../../models/Command-reapas");
const Command = require("../../models/Command");
const nodemailer =require('nodemailer')


const show_command_repas = async (req, res) => {
  const Idcommand = req.params.commandId;

  try {
    const command_repas = await CommandRepas.find({ command_id: Idcommand })
      .populate("command_id").populate("repas_id");
    res.status(200).json({ success: true, data: command_repas });
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error });
  }
};

const show_command = async (req, res) => {
  try {
    const command = await Command.find().populate("user_id").populate("livreur_id");

    res.status(200).json({ success: true, data: command });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, data: [], error: error });
  }
};

const order_delivery = async (req, res) => {
  const id_command = req.params.command_id;
  const id_livreur = req.body.livreur_id;

  console.log('id_livreur',id_livreur);
  console.log('id_command',id_command);

  const command_id = await Command.find({ _id: id_command });
  if (command_id[0].livreur_id === null) {
    try {
      await Command.updateOne(
        { _id: id_command },
        {
          $set: {
            livreur_id: id_livreur,
          },
        }
      );

      res.status(200).json({ success: true, data: command_id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, data: [], error: error });
    }
  } else {
    res
      .status(404)
      .json({
        success: false,
        data: [],
        error: "c'est command deja reserv par autre livreur",
      });
  }
};

const order_delivery_id = async (req, res) => {
  const id_livreur = req.params.user_id;

  console.log('id_livreur',id_livreur);

  try {
    const order_delivery_id = await Command.find({ livreur_id: id_livreur });
    res.status(200).json({ success: true, data: order_delivery_id });
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error });
  }

};

const status_command = async (req, res) => {
  const id_command = req.params.command_id;
  const id_livreur = req.body.livreur_id;
  const during_preparation = req.body.during_preparation;
  const during_delivery = req.body.during_delivery;
  const delivery = req.body.delivery;

  const command_id = await Command.findOne({
    _id: id_command,
    livreur_id: id_livreur,
  });

  if (command_id.status == "new") {
    console.log(command_id.status);
    try {
      await Command.updateOne(
        { _id: id_command },
        {
          $set: {
            status: during_preparation,
          },
        }
      );
      res.status(200).json({ success: true, data: command_id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, data: [], error: error });
    }
  } else if (command_id.status == "during_preparation") {
    console.log(command_id.status , 'status');

    await Command.updateOne(
      { _id: id_command },
      {
        $set: {
          status: during_delivery,
        },
      }
    );
    res.status(200).json({ success: true, data: command_id });
  } else if ((command_id.status == "during_delivery")) {
    await Command.updateOne(
      { _id: id_command },
      {
        $set: {
          status: delivery,
        },
      }
    );
    res.status(200).json({ success: true, data: command_id });
  }else if (command_id.status == "delivery") {

    let transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"",
        pass: "",

      },
      tls :{
        rejectUnauthorized : false
      }
    });
    let mailOptions={
      from : "" ,
      to : "",
      subject : "test ",
      text : "marhaba app testinge ",
    };
    transporter.sendMail(mailOptions, function(err,success){
      if(err){
        console.log(err);
      }else{
        console.log("email send success");
      }
    })

    console.log(command_id.status , 'status');
   
    
  }else {
    res.status(200).json({ success: true, data:command_id  });
  }
};

module.exports = {
  show_command_repas,
  show_command,
  order_delivery,
  status_command,
  order_delivery_id,
};
