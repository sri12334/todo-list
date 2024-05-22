const deleteTodo = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            throw new Error(`Faild to delete todo with status: ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export default deleteTodo;