var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var result = 0;
for (const key in fruit) {
    if (fruit.hasOwnProperty(key)) {
        const element = fruit[key];
        result += element;
    }
}
console.log(result);