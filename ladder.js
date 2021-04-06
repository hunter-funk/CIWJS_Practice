let ladder = {
    step: 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep(){
        console.log(ladder['step']);
        alert(`You are one the ${this.step} step.`);
    }
};
ladder.showStep();