import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  try {
    const allHouses = await housesRepository.getAllHouses();
    res.json(allHouses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error", code: err.code });
  }
};

export const getHouseById = async (req, res) => {
  try {
    const house = await housesRepository.getHouseById(req.params.id);
    if (!house) {
      return res.status(404).json({ error: "House not found" });
    }
    res.status(200).json(house);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
