import provaiderModel from "../../models/products/provaiderModel.js";
import {deleteImage, uploadImage} from "../../database/cloudinary.js";
import fs from 'fs-extra';

export const getProvaider = async (req, res) => {
    try {
        const provaider = await provaiderModel.find();
        if (provaider.length === 0) {
            return res.status(404).json({ message: 'No se encontrĂ³ el proveedor' });
        }
        res.status(200).json({message: 'Proveedores encontrados', provaider});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 




export const createProvaider = async (req, res) => {
    try {
        const { name, email, phone, address,city } = req.body;
        const provaider = new provaiderModel({ name, email, phone, address,city });
        if (req.files?.image) {
            const image = await uploadImage(req.files.image.tempFilePath);
            provaider.image = {
                public_id: image.public_id,
                secure_url: image.secure_url
            }
            fs.unlinkSync(req.files.image.tempFilePath);
        }
        await provaider.save();
        res.json({ message: "provaider created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const deleteProvaider = async (req, res) => {
    try {
        const provaider = await provaiderModel.findByIdAndDelete(req.params.id);
        if (!provaider) {
            return res.status(404).json({ message: 'No se encontrĂ³ el proveedor' });
        }
        if(provaider.image.public_id){
            await deleteImage(provaider.image.public_id);
        }
        res.status(200).json({ message: 'Proveedor eliminado', provaider });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


