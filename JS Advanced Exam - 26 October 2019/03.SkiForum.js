class Forum {
    constructor(){
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email){
        if(!username || !password || !repeatPassword || !email){
            throw Error('Input can not be empty');
        }

        if(password !== repeatPassword){ // may have to be !=
            throw Error('Passwords do not match');
        }

        if(this._users.filter(x => x.username === username).length !==0 || this._users.filter(x => x.email === email).length !==0){
            throw Error('This user already exists!');
        }

        this._users.push({
            username: username,
            password: password,
            email: email,
            loggedIn: false
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password){
        if(this._users.filter(x => x.username === username).length === 0){
            throw new Error('There is no such user');
        }

        let thisUser = this._users.filter(x => x.username === username)[0];

        if (thisUser.password === password){
            thisUser.loggedIn = true;
            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password){
        if(this._users.filter(x => x.username === username).length === 0){
            throw new Error('There is no such user');
        }

        let thisUser = this._users.filter(x => x.username === username)[0];

        if (thisUser.password === password){
            thisUser.loggedIn = false;
            return 'You have logged out successfully';
        }
    }

    postQuestion(username, question){
        if(this._users.filter(x => x.username === username).length === 0){
            throw Error('You should be logged in to post questions');
        }

        let thisUser = this._users.filter(x => x.username === username)[0];

        if(!thisUser.loggedIn){
            throw Error('You should be logged in to post questions');
        }

        if(question.length === 0){
            throw Error('Invalid question');
        }

        this._questions.push({
            id: this._id++,
            username: username,
            question: question,
            answers: []
        });

        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer){
        if(this._users.filter(x => x.username === username).length === 0){
            throw Error('You should be logged in to post answers');
        }

        let thisUser = this._users.filter(x => x.username === username)[0];

        if(!thisUser.loggedIn){
            throw Error('You should be logged in to post answers');
        }

        if(answer.length === 0){
            throw Error('Invalid answer');
        }

        if(this._questions.filter(x => x.id === questionId).length === 0){
            throw Error('There is no such question');
        }

        let thisQuestion = this._questions.filter(x => x.id === questionId)[0];

        thisQuestion.answers.push({
           username: username,
           answer: answer
        });

        return 'Your answer has been posted successfully';
    }

    showQuestions(){
        let result = '';

        this._questions.forEach(q => {
            result += `Question ${q.id} by ${q.username}: ${q.question}\n`;

            q.answers.forEach(a => {
                result += `---${a.username}: ${a.answer}\n`;
            });
        });

        return result.trim();
    }

}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());
