import deleteTodo from '../../apis/deleteTodo.js';

const deleteHandler = async (id) => {
    document.getElementById(id).remove();
    await deleteTodo(id);
};

export default deleteHandler;
