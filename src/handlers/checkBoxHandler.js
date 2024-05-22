import updateTodo from '../../apis/updataTodo.js';

const checkBoxHandler = async (todoData) => {
    const newData = {
        ...todoData,
        completed: !todoData.completed,
    };

    const { id } = todoData;

    await updateTodo(id, newData);
};

export default checkBoxHandler;
