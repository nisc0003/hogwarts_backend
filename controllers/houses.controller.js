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
