const { home, search, category, list, genres } = require('../controllers/neko_home_controller')
const { detail } = require('../controllers/neko_details_controller');

var router = require("express").Router();
var appRouter = require("express").Router();

router.get("/home/:page", home);
router.get("/search/:page/", search);
router.get("/category/:category/:page/", category);
router.get("/lists/:list", list)
router.get("/genres/:genre/:page", genres)
router.get("/details/", detail)

appRouter.use("/api", router);

module.exports = { appRouter };