module.exports.brandsController = {
    getBrands: (req, res) => {
      res.json("Бренды")
    },
  
    createBrands: (req, res) => {
      res.json("Создал Бренд")
    },
  
    deleteBrands: (req, res) => {
      res.json("Удалил Бренд")
    },
  };