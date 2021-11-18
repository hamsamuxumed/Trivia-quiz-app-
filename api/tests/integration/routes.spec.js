// const { response } = require("express");
// const request = require("supertest");

describe('leaderboard endpoint', () => {
    let api;

    beforeEach(async () => {
        await resetTestDB()
        console.log("reset")
    });


    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })



    it('should display all users', async () => {
        const res = await request(api)
            .get('/leaderboard/users')
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(4);
    });






})