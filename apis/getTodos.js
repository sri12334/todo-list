const getTodos = async () => {
    try {
        const res = await fetch('http://localhost:3000/todos');
        if (!res.ok) {
            throw new Error(`Faild to fetch todos with status ${res.status}`);
        }

        const todos = await res.json();
        return todos;
    } catch (err) {
        console.log(err);
    }
};

export default getTodos;
