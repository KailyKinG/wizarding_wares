const Products=require('../models/Product.model')
const Purchases = require('../models/Purchase.model')
const Users = require('../models/Users.model')
const Address = require('../models/Address.model')
const Status = require('../models/Status.model')

const getAllPurchase= async (req,res)=>{

  try {
    const purchases = await Purchases.findAll({
      include: [
        {
          model: Users,
          attributes: ['userId', 'name'],
          include : {
            model:Address,
            attributes: ['street','number']
          }
        },
        {
          model: Products,
          attributes: ['name', 'description', 'image', 'price'],
          through: {
            attributes: []
          }
        },
        {
          model: Status,
          attributes: ['name']
        }
      ]
    });
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({message:error.message});
  }

}

module.exports=getAllPurchase;