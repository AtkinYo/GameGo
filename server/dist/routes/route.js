const router = express.Router();
const getGamesByInt = require('../controllers/gameController/getGamesByInt');
// Define routes
router.get('/home/:id', async (req, res) => {
    const gameId = req.params.id;
    const gameDetails = await getGamesByInt(gameId);
    res.send(gameDetails);
});
module.exports = router;
//# sourceMappingURL=route.js.map