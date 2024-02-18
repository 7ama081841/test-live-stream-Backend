const router = require("express").Router()
const liveStream = require("../controllers/liveStreamContrl")

router.post( "/createlive" , liveStream.addLive )
router.patch( "/like/:liveId" , liveStream.liveLike )
router.get( "/allLives" , liveStream.getLives )
router.patch( "/updateLive" , liveStream.updateLive )
router.delete( "/deleteLive" , liveStream.deleteLive )

module.exports = router