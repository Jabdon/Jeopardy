class Round {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
        this.enabled = true;
    }

    getQuestion(){
        return this.question;
    }
    getAnswer(){
        return this.answer;
    }
    isItEnabaled(){
        return this.enabled;
    }

}