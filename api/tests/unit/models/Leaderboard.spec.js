const Leaderboard = require('../../../models/Leaderboard')

const pg = require('pg');
const { jest } = require('@jest/globals');
jest.mock('pg')
const db = require('../../../dbConfig/init');

describe('Leaderboard', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    //test for all leaderboards

    describe('all', () => {
        test('it resolves with all leaderboards on successful db query ', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}] });
            const all = await Leaderboard.all;
            expect(all).toHaveLength(3);
        })
    })

    //test for create

    describe('create', () => {
        test('it creates a new user on successful db query', async () => {
            let user = {
                username: 'tesTbob',
                score: 5,
                room: 5,
                socket_id: 'asdfasf3124124'
            }
            let socketId = { socket_id: asdfasf3124124 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{ ...user, id: 1 }] })
            const result = await Leaderboard.create(user, socketId)
            expect(result).toBeInstanceOf(Leaderboard);
        })
    })




})

