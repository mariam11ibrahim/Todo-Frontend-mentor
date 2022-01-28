export const generateID = (task) => {
    let length = Math.round(task.length / 2);
    let id = new Date().getTime()
    for (let i = 0; i < length; i++) {
        const randomChar = task.charAt(Math.floor(Math.random() * task.length));
        id = randomChar !== " " ? randomChar + id : "s" + id;
    }
    return id
}



