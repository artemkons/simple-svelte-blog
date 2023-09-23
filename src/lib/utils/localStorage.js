export function saveArrayToLocalStorage(key, array) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(array));
    }
}

export function getArrayFromLocalStorage(key) {
    if (typeof window !== 'undefined') {
        const storedArray = localStorage.getItem(key);
        return JSON.parse(storedArray) || [];
    }
}

