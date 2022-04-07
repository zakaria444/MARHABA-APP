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
    const command = await Command.find().populate("user_id");

    res.status(200).json({ success: true, data: command });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, data: [], error: error });
  }
};

const order_delivery = async (req, res) => {
  const id_command = req.params.command_id;
  const id_livreur = req.body.livreur_id;
  const command_id = await Command.find({ _id: id_command });
  if (command_id.livreur_id === null) {
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
};
