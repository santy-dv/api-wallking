import Wall from "../models/WallsModel.js";

const crearWall = async (req, res) => {
    const body = req.body;
    const nuevoWall = new Wall(body);
    const wall = await nuevoWall.save();
    res.json({ msg: "Wall creado", data: wall });
};

const listarWalls = async (req, res) => {
    try {
        const { nombre, color, estilo, painter } = req.query;
        const filtros = {};
        if (nombre) filtros.nombre = { $regex: nombre, $options: 'i' };
        if (color) filtros.color = color;
        if (estilo) filtros.estilo = estilo;
        if (painter) filtros.painter = painter; // buscar por id de painter

        const walls = await Wall.find(filtros).populate('painter');
        res.json({ data: walls });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getWallById = async ( request, response) => {
    const id = request.params.id;
    const wall = await Wall.findById(id);
    if( wall){
        response.status(200).json( {data: wall});
    } else {
        response.status(404).json({ msg: 'Pared no Encontrada'});
    }
}

const deleteWallById = async ( request, response) => {
    const id = request.params.id;
    const wall = await Wall.findByIdAndDelete(id);
    if( wall){
        response.status(200).json( {data: wall});
    } else {
        response.status(404).json({ msg: 'Pared no Encontrada'});
    }
}
const updateWallById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const wall = await Wall.findByIdAndUpdate(id, body);
    if( wall){
        response.status(200).json( {data: wall});
    } else {
        response.status(404).json({ msg: 'Pared no Encontrada'});
    }
}

export { crearWall, listarWalls, getWallById, deleteWallById, updateWallById};
