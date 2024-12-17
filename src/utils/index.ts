const randomNumber =  () => {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}
export const delay = () => new Promise(res => setTimeout(res, randomNumber() * 1000));