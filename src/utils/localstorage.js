export const addToLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}

export const removeFromLocalStorage = (name) => {
    localStorage.removeItem(name);
}

export const getFromLocalStorage = (name) => {
    const result = localStorage.getItem(name);
    return result ? JSON.parse(result) : null;
}
