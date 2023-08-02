const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const teamSchema = mongoose.Schema({
    id: String,
    name: String,
    shortName: String,
    tla: String,
    crest: String
})

const scoreSchema = mongoose.Schema({
    winner: String,
    duration: String,
    home: String,
    away: String
})

const matchSchema = mongoose.Schema({
    externalMatchId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    utcDate: String,
    status: String,
    matchDay: String,
    stage: String,
    group: String,
    lastUpdated: String,
    homeTeam: teamSchema,
    awayTeam: teamSchema,
    score: scoreSchema
});
matchSchema.set("timestamps", true);

// add plugin that converts mongoose to json
matchSchema.plugin(toJSON);
matchSchema.plugin(paginate);

/**
 * Check if match exist 
 * @param {string} externalMatchId - The match id
 * @param {ObjectId} [excludeMatchId] - The id of the match to be excluded
 * @returns {Promise<boolean>}
 */
matchSchema.statics.isMatchExist = async function (externalMatchId, excludeMatchId) {
    const match = await this.findOne({ externalMatchId, _id: { $ne: excludeMatchId } });
    return !!match;
};

module.exports = mongoose.model("Match", matchSchema);
