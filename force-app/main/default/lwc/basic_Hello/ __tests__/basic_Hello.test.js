import { createElement } from 'lwc';
import Hello from 'c/basic_Hello';

describe('c-basic_Hello', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('c-basic_Hello', {
            is: Hello
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('HelloWorld!');
    });
});