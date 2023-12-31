const Product = require("../models/Product.model");
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const createProduct = async (req, res) => {
  //obtenemos el path del file
   const filePath = req.file.path;
   const pathFileDel=`tempUploads/${req.file.filename}`

  // Subir la imagen a Cloudinary desde el archivo guardado en el disco
  const result = await cloudinary.uploader.upload(filePath);
  const imageUrl = result.secure_url;
  let id=0
  //
  const categorias=["Libros","Varitas","Indumentaria","Golosinas","Quidditch","Misceláneas"]
  for(i of categorias){
    if(req.body.categoryId===i) id=categorias.indexOf(i)+1
  }

  try {
    const createdProduct = await Product.create({
    name: req.body.name,
    description: req.body.description,
    image: imageUrl,
    price: req.body.price,
    stock: req.body.stock,
    categoryCategoryId: id
  })

    fs.unlink(pathFileDel, (error) => {
      if (error) {
        console.error('Error al borrar el archivo:', error);
      } else {
        console.log('Archivo borrado exitosamente.');
      }
    });

    res.status(200).send({product:createdProduct,message:'Product created'})

  } catch (error) {
    res.status(404).send({message:error.message})
  }
}

module.exports = createProduct
