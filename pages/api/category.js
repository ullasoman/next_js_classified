import { categories } from "./data/category";

export default function handler(req, res) {
    res.status(200).json(categories)
}