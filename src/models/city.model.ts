import mongoose from "mongoose";
import { ICity } from "../types/city.interface";

const citySchema = new mongoose.Schema<ICity>({
    name: {
        type: String,
        require: true
    },
    province: {
        type: String,
        require: true,
    },
    center: {
        type: String,
        require: true,
    }
},{timestamps: true});

export const City = mongoose.model("City", citySchema);