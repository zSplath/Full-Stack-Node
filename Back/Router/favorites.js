const {Router} = require("express")
const { getFavorites, getFavorite, postFavorite, patchFavorite, deleteFavorite } = require("../Controller/favorites")

const router = Router()

router.get("/", getFavorites)

router.get("/:id", getFavorite)

router.post("/:id", postFavorite)

router.patch("/:id", patchFavorite)

router.delete("/:id", deleteFavorite)

module.exports = router