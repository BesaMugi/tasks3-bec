module.exports.productsController = {
    getProducts: (req, res) => {
      res.json("продукты")
    },
    
    getProductsId: (req, res) => {
      res.json(`продукт с ID${req.params.id} просрочен`)
    },

    createProducts: (req, res) => {
      res.json('создал продукт')
    },

    deleteProducts: (req, res) => {
      res.json('удалил продукт')
    },

    
  };