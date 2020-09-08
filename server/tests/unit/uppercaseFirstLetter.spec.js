const upperCaseAllFirstLetter = require('../../src/utils/upperCaseAllFirstLetter');

describe('Uppercase All First Letter', () => {
    it('Should make all letters lower case and just the first one of each word uppercase', () => {
        const entryWords = ['home', 'HOME', 'hOME', 'Home'];
        const returnWord = 'Home';
        // const entryWords = ['home', 'HOME', 'hOME', 'Home', 'sweet home', '4u', '6675', 'SWEET 23 HOME', 'a casa de papel'];
        // const returnWords = ['Home', 'Home', 'Home', 'Home', 'Sweet Home', '4u', '6675', 'Sweet 23 Home', 'A Casa De Papel'];
        // entryWords.map(word => upperCaseAllFirstLetter(word));
        entryWords.map(word => expect(upperCaseAllFirstLetter(word)).toBe(returnWord));
    });
});