import dom from '../dom.js';
import addTodoHandler from '../handlers/addTodoHandler.js';

const entreEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addTodoHandler();
        }
    });
};

export default entreEvent;