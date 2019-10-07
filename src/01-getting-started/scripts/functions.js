
const functions = {
    
    size: (num) => {
        if (num < 10 && num >=0) return "small";
        if (num < 20 && num >=10) return "medium";
        if (num < 0) return "negative"
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    }

    
};

export default functions;
