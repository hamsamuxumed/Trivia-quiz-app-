const Leaderboard = require('../../../models/Leaderboard')
const db = require('../../../dbConfig/init');

const pg = require('pg');

const server = require('../../../server');



jest.mock('pg')

describe('Leaderboard', () => {


    beforeAll((done) => {
        server.listen(3001, () => done());
    })

    beforeEach(() => {
        jest.clearAllMocks()

    })
    afterAll((done) => {
        jest.resetAllMocks()
        server.listening ? server.close(() => done()) : done();
    })

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
            let socketId = { socket_id: "asdfasf3124124" }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{ ...user, id: 1 }] })
            const result = await Leaderboard.create(user, socketId)
            expect(result).toBeInstanceOf(Leaderboard);
        })
    })


    // test for update

    describe('update', () => {
        test('it updates a new user on successful db query', async () => {
            let user = {
                username: 'tesTbob',
                score: 6,
                room: 6,
                socket_id: 'zzziii'
            }
            let socketId = { socket_id: "zzziii" }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{ ...user, id: 1 }] })
            const result = await Leaderboard.update(user, socketId)
            expect(result).toBeInstanceOf(Leaderboard);
        })
    })

    // test for getRoomLeaderboard

    describe('getRoomLeaderboard', () => {
        test('it get leaderboards of a room on successful db query', async () => {
            let user = {
                username: 'tesTbob',
                score: 6,
                room: 6,
                socket_id: 'zzziii'
            }

            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [user] })
            const result = await Leaderboard.getRoomLeaderboard(1)
            expect(result).toBeInstanceOf(Array);
        })
    })


})

