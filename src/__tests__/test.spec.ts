import df from '../serializer'

describe('test', () => {
    it('should pass', () => {
        expect(1 + 1).toBe(2)
        expect(df).toBeInstanceOf(Object)
    })
})
