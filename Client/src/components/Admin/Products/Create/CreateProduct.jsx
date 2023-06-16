import "./CreateProduct.module.css"
import { useState } from "react"
import CurrencyInput from 'react-currency-input-field';

const CreateProduct = () => {

    
    const [input, setInput] = useState({
        name: "",
        description: "",
        image: "",
        price: 0,
        stock: 0,
        category:"",
        isActive: true
    })

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        image: "",
        price: 0,
        stock: 0,
        category:"",
        isActive: true
    })

    const handleChange = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value,
          });

          setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }));
    }

    const handleSelect = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value,
          });

    }

    const handleCurrencyChange = (event) => {
        setInput({
            ...input,
            price: event.target.value
        })

        setErrors(validate({
            ...input,
            price: event.target.value
        }));

        console.log(input.price);
    }

    const validate = (input) => {
        let errors = {}; 
        const { name, description, image, price, stock } = input
        if(!name.trim() ||
        !/^[a-zA-Z áéíóúÁÉÍÓÚñÑ\s]*$/.test(name)){
            errors.name = 'El nombre debe contener únicamente letras' 
        }else if ( name.length < 3) { errors.name = 'El nombre debe tener al menos tres caractéres de longitud!'
        }
        return errors
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //aca va el dispatch
        setInput({
            name: "",
            description: "",
            image: "",
            price: 0,
            stock: 0,
            category: "",
            isActive: true
        })
    }    

    return(
        <div className="flex justify-center items-center h-screen">
        <div>
            <h2>Acá se crean los productos</h2>
            
            <div className="">
                <form onSubmit={(event) => handleSubmit(event)} className="border-2 border-gray-300 rounded py-4 px-20 w-full shadow">

                    <div className="formBox">

                        <div className="mb-4 md:mt-6 lg:mt-8">
                            <label htmlFor="name">
                                <span>Nombre</span>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Nombre del producto" 
                                    onChange={(event) => handleChange(event)} 
                                    value={input.name}
                                    className="border rounded py-2 px-4 m-2 shadow w-full"
                                    required 
                                />
                                
                                {errors.name && (<span >{errors.name}</span>)}
                            </label>
                        </div>
                        
                        <div className="mb-4 md:mt-6 lg:mt-8 ">
                            <label htmlFor="description">
                                <span>Descripción</span>
                                <textarea type="text" value={input.description}
                                onChange={(event) => handleChange(event)} name="description"
                                className="border rounded py-2 px-4 m-2 w-full shadow" rows="3" placeholder="Escriba una descripción del producto"  />
                            </label>
                        </div>

                        <div className="mb-4 md:mt-6 lg:mt-8">
                            <label htmlFor="image">
                                <span>Imágen</span>
                                <input type="url" name="image" placeholder="Pegue su URL para cargar una imágen" className="border rounded py-2 px-4 m-2 shadow w-full"
                                value={input.image} onChange={(event) => handleChange(event)} required />
                            </label>
                        </div>

                        <div className="mb-4 md:mt-6 lg:mt-8">
                            <label> Categoría
                                {/* <div className="mt-4 border rounded py-2 px-4 shadow">
                                <label className="ml-1 mr-1" >Libros</label>
                                <input
                                className="ml-1 mr-1"
                                type="radio"
                                value= 'Libros'
                                id="1" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                />
                                <label className="ml-1 mr-1" >Varitas</label>
                                <input
                                className="ml-1 mr-1"
                                type="radio"
                                value= 'Varitas'
                                id="2" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                />
                                <label className="ml-1 mr-1" >Indumentaria</label>
                                <input
                                type="radio"
                                className="ml-1 mr-1"
                                value= 'Indumentaria'
                                id="3" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                />
                                <label className="ml-1 mr-1" >Golosinas</label>
                                <input
                                className="ml-1 mr-1"
                                type="radio"
                                value= 'Golosinas'
                                id="4" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                />
                                <label className="ml-1 mr-1" >Quidditch</label>
                                <input
                                className="ml-1 mr-1"
                                type="radio"
                                value= 'Quidditch'
                                id="5" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                />
                                <label className="ml-1 mr-1" >Misceláneas</label>
                                <input
                                className="ml-1 mr-1"
                                type="radio"
                                value= 'Misceláneas'
                                id="6" 
                                name = 'category'
                                onChange={(event) => handleSelect(event)}
                                required
                                /> */}
                                <select name="category" value={input.category} onChange={(event) => handleSelect(event)} required className="border rounded py-2 px-4 m-2 shadow w-full">
                                    <option value="Libros">Libros</option>
                                    <option value="Varitas">Varitas</option>
                                    <option value="Indumentaria">Indumentaria</option>
                                    <option value="Golosinas">Golosinas</option>
                                    <option value="Quidditch">Quidditch</option>
                                    <option value="Misceláneas">Misceláneas</option>
                                </select>
                                {/* </div> */}
                            </label>
                        </div>

                        <div className="mb-4 md:mt-6 lg:mt-8 ">
                            <label htmlFor="price">
                                <span>Precio</span>
                                <CurrencyInput
                                    id="validation-example-2-field"
                                    placeholder="$0"
                                    prefix="$"
                                    allowDecimals={2}
                                    step={10}
                                    required
                                    className="border rounded py-2 px-4 m-2 shadow w-2/4"
                                    onChange={(event) => handleCurrencyChange(event)}
                                />
                            </label>

                            <label htmlFor="stock">
                                <span>Stock</span>
                                <input type="number" className="border rounded py-2 px-4 m-2 shadow w-2/4" value={input.stock} onChange={(event) => handleChange(event)} name="stock" min="0" required />
                            </label>
                        </div>

                        <div className="mb-4 md:mt-6 lg:mt-8">
                            <label htmlFor="isActive">
                                <span>Estado</span>
                                <select name="isActive"  className="border rounded py-2 px-4 m-2 shadow" value={input.value} onChange={(event) => handleSelect(event)} required>
                                    <option value= {true} >Activado</option>
                                    <option value= {false} >En pausa</option>
                                </select>
                            </label>
                        </div>

                    </div>

                    <div className="boton">
                        <button class="bg-violet-500 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-2 focus:ring focus:ring-violet-300 w-40 h-10 shadow">
                            Crear
                            {console.log(input)}
                        </button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}

export default CreateProduct;