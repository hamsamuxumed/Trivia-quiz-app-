const Leaderboard = require('../../../models/Leaderboard')

const pg = require('pg');
const { jest } = require('@jest/globals');
jest.mock('pg')
const db = require('../../../dbConfig/init');

describe('Leaderboard', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.clearAllMocks())

    //test for all leaderboards

    describe('all', () => {
        test('it resolves with all leaderboards on successful db query ', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}] });
            const all = await Leaderboard.all;
            expect(all).toHaveLength(3);
        })
    })




})