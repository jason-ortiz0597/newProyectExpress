import provaiderModel from "../../models/products/provaiderModel.js";

export const getProvaider = async (req, res) => {
    try {
        const provaider = await provaiderModel.find();
        if (provaider.length === 0) {
            return res.status(404).json({ message: 'No se encontró el proveedor' });
        }
        res.status(200).json({message: 'Proveedores encontrados', provaider});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 

// export const getTypesProvaider = async (req, res) => {
//     try {
//         const provaider = await provaiderModel.find();
//         if (provaider.length === 0) {
//             return res.status(404).json({ message: 'No se encontró el proveedor' });
//         }
//         const typeProvider = provaider.map((provaider) => provaider.typeProvider);
//         res.status(200).json({message: 'Tipos de proveedores encontrados', typeProvider});
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }



export const createProvaider = async (req, res) => {
    try {
     const { name, email, phone, city, address } = req.body;
     const provaider = await provaiderModel.create({ name, email, phone, city, address });
     res.status(201).json({ message: 'Proveedor creado', provaider }); 
    } catch (error) {
          res.status(409).json({ message: error.message });   
    }
}

// export const createTypeProvider = async (req, res) => {
//     try {
//         const { name, description } = req.body;
//         const provaider = await provaiderModel.findById(req.params.id);
//         provaider.typeProvider.push({ name, description });
//         await provaider.save();
//         res.status(201).json({ message: 'Tipo de proveedor creado', provaider }); 
//     } catch (error) {
//         res.status(409).json({ message: error.message });   
//     }
// }

export const deleteProvaider = async (req, res) => {
    try {
        const provaider = await provaiderModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Proveedor eliminado', provaider });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const deleteTypeProvider = async (req, res) => {
//     try {
//         const provaider = await provaiderModel.findById(req.params.id);
//         provaider.typeProvider.pull(req.params.idType);
//         await provaider.save();
//         res.status(200).json({ message: 'Tipo de proveedor eliminado', provaider });
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
