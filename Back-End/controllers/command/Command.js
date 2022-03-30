const Command = require("../../models/Command");
const CommandRepas = require("../../models/Command-reapas");

const AddCommand = async (req, res) => {
  try {
    const user_id = req.params.userId;
    const adress = req.body.adress;

    const newCommand = new Command({
      adress: adress,
      user_id: user_id,
    });

    const saveCommand = await newCommand.save();
    if (saveCommand) {
      const products = req.body.products;
      let total = 0;
      products.map(async (reapas) => {
        // console.log(reapas.reapas_id);
        let subTotal = reapas.prix * reapas.quntity;
        const newCommandrepas = new CommandRepas({
          command_id: saveCommand._id,
          repas_id: reapas.repas_id,
          prix: reapas.prix,
          quntity: reapas.quntity,
          total: subTotal,
        });

        total += subTotal;
        await newCommandrepas.save();
      });

      await Command.updateOne({ _id: saveCommand._id  }, {
        $set: {
          total: total,
        }
      })
    }

    res.status(201).json({ success: true, data: "yeeeeeeeeeees" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, data: [], error: error });
  }
};

module.exports = {
  AddCommand,
};
