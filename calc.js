let calculator = {

    sum(){
        return this.x + this.y;
    },

    mul(){
        return this.x * this.y;
    },

    read(){
        this.x = +prompt('what is x?', 0);
        this.y = +prompt('what is y?', 0);
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());