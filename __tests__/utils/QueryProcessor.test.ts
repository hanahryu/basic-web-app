import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return andrew id', () => {
        const query1 = "What is your Andrew id?";
        const response2: string = QueryProcessor(query1);
        console.log(response2)
        expect(response2).toBe((
            "hanahr"
          ));
    });
    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });
    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 58 minus 52?")).toEqual("6");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });

    test('should return largest number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 36, 69, 47?")).toEqual("69");
        expect(QueryProcessor("Which of the following numbers is the largest: 3, 7, 31?")).toEqual("31");
    });

});