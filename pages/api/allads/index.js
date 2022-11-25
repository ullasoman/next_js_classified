import data from '../data'

export default function hanlder(req, res) {
    const { Allads } = data;
    if (Allads) return res.status(200).json(Allads);

    return res.status(404).json({ error: "Data Not Found" })
}