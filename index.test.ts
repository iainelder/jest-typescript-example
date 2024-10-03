import { sum } from './index'

describe("describe1", () => {
    test("test1", () => {
        expect(true).toBeTruthy()
    })

    test("sum", () => {
        expect(sum(1,1)).toBe(2)
    })
})
