class Round {
    constructor(question, answer, id){
        this.question = question;
        this.answer = answer;
        this.enabled = true;
        this.id = id; // topic-1-100
    }

    getQuestion(){
        return this.question;
    }
    getId(){
        return this.id;
    }
    getAnswer(){
        return this.answer;
    }
    isItEnabaled(){
        return this.enabled;
    }

}