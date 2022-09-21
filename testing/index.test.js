const renderDOM = require('./helpers')

let dom, document;
describe('index.html', () =>{
    beforeEach( async() => {
        dom = await renderDOM('index.html');
        document = await dom.window.document;
    })

    test('it has a title', () => {
        let title = document.querySelector('title');
        expect(title).toBeTruthy();
    })
    test('if a user hovers over a h2 tag replace the words inside it to contain a greeting', () => {
        const subHeaderTogreating = document.querySelector('h2');
        expect(subHeaderTogreating.innerHTML).toContain("We are")
        subHeaderTogreating.dispatchEvent(new dom.window.Event('mouseover'));
        expect(subHeaderTogreating.innerHTML).toContain("Any word")
    })
})