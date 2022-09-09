const axios = require('axios').default;
const catchAsync = require('../../utils/catchAsync');
const { createMatch, queryMatches } = require('../services/Matches.Service');
const pick = require('../../utils/pick');

const ApiFootball = axios.create({
    baseURL: 'https://api.football-data.org/v4/competitions/WC/',
    headers: { 'X-Auth-Token': 'aef6b8804667451fa8d18d29eacfb93a' }
})

const initMatches = catchAsync(async (req, res) => {
    const { data } = await ApiFootball.get('/matches?season=2022');
    const createdMatches = await Promise.allSettled(data.matches.map(async match => await createMatch({
        ...match,
        externalMatchId: match.id,
        score: {
            ...match.score,
            ...match.score.fullTime
        }
    })
    ))
    res.send({ createdMatches });
});

const getMatches = catchAsync(async (req, res) => {
    const options = pick(req.query, ['limit', 'sortBy', 'page'])
    const filter = pick(req.query, ['stage', 'status', 'group'])
    const matches = await queryMatches(filter, options)
    res.send(matches);
});

module.exports = {
    initMatches,
    getMatches
};