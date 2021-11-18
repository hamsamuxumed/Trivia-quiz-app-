const leaderboardController = require('../../../controllers/leaderboard')
const Leaderboard = require('../../../models/Leaderboard')
const server = require('../../../server');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(() => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus };



describe('leaderboard controller', () => {


    beforeAll((done) => {
        server.listen(3002, () => done());
    })

    beforeEach(() => {
        jest.clearAllMocks()

    })
    afterAll((done) => {
        jest.resetAllMocks()
        server.listening ? server.close(() => done()) : done();
    })


    describe('index', () => {
        test('it should give all users and a status code pf 200', async () => {
            jest.spyOn(Leaderboard, 'all', 'get')
                .mockResolvedValue(['user1', 'user2', 'user3']);
            await leaderboardController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200)
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2', 'user3'])
        })
    })
})