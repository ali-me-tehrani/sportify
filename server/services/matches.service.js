const Match = require("../models/Match")

/**
 * 
 * @param {Object} match 
 * @returns {Promise<Match>}
 */
const createMatch = async (matchBody) => {
    if (await Match.isMatchExist(matchBody.externalMatchId)) {
        throw new Error('Match already exist');
    }
    return Match.create(matchBody);
}

/**
 * Query for matches
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMatches = async (filter, options) => {
    const matches = await Match.paginate(filter, options);
    return matches;
};

module.exports = {
    createMatch,
    queryMatches
};