var assert = chai.assert
import * as api from '../js/api.js'
import { generateName } from './helpers.js'

describe('Example', function() {
    it('Should return the test array', function () {
        const response = api.example()
        const actual = response[1].uuid
        const expect = '54321'

        assert.equal(actual, expect)
    })
})

describe('User', function() {
    let user = {
        name: generateName(),
        email: 'test@me.com',
        title: 'Test users wedding',
        date: '29-01-2023'
    }

    it('getUsers should return an array', function () {
        const response = api.getUsers()

        const actual = Array.isArray(response)
        const expect = true

        assert.equal(actual, expect)
    })

    it('addUser should add a user object and we should be able to see that user on the array returned by getUsers', function () {
        api.addUser(user)

        const response = api.getUsers()
        const actual = response?.[(response?.length ?? 0) - 1] // last user

        assert.equal(user.name, actual.name)
    })

    it('User should have a uuid', function () {
        const response = api.getUsers()
        const actual = response?.[(response?.length ?? 0) - 1] // last user

        assert.isOk(actual.uuid)
        user = actual
    })


    describe('User gifts', function() {
        it('getGifts should return an array of the users gifts', function () {
            const response = api.getGifts(user.uuid)

            const actual = Array.isArray(response)
            const expect = true

            assert.equal(actual, expect)
        })

        it('addGift should add a gift to the users object', function () {
            const expected = {
                name: 'linen',
                description: "soft stuff"
            }
            api.addGift(expected)

            const response = api.getGifts()
            const actual = response?.[(response?.length ?? 0) - 1] // last gift

            assert.equal(expected.name, actual.name)
        })
    })
})
