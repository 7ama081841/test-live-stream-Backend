const LiveStream = require("../model/liveStream")

const addLive = async (req , res) => {
    
    try {
        const newLive = new LiveStream({
            ...req.body
        })

        await newLive.save()

        res.status(201).json(newLive)
    } catch (error) {
        res.status(500).send("Internal Server Error ")
    }
}

const liveLike = async (req, res) => {
    const { liveId } = req.params;
    const { useId } = req.body;

    try {
        const findLive = await LiveStream.findById(liveId);

        const isLike = findLive.likes.some(likeUser => likeUser.toString() === useId);

        if (isLike) {
            await LiveStream.findByIdAndUpdate(liveId, { $pull: { likes: useId } });
            return res.status(200).send("is disliked");
        }

        await LiveStream.findByIdAndUpdate(liveId, { $push: { likes: useId } }, { upsert: true });
        return res.status(200).send("is liked");

    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const getLives = async (req , res) => {
    try {
        const allLives = await LiveStream.find()
        .select("-__v")
        // .populate( "user" , "-_id -__v " )
        
        res.status(200).json(allLives);
        
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

const updateLive = async (req , res ) => {
    const { liveId , title  ,description } = req.body

    console.log({ liveId , title  ,description })

    try {
        
        const live = await LiveStream.findByIdAndUpdate( liveId , {
            $set : {
                title ,
                description
            }

        }, {new : true} )

        res.status(200).send(live);
        
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

const deleteLive = async (req , res ) => {
    const {liveId} = req.body

    try {
        const selectLive =  await LiveStream.findByIdAndDelete(liveId , {new: true} )
        res.status(200).send(selectLive);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    addLive,
    liveLike,
    getLives ,
    updateLive,
    deleteLive
}