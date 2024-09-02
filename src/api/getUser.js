const getUserById = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const res = await response.json();
    return res;

}

export default getUserById;