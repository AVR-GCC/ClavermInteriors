export const wait = (miliseconds) => new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
});