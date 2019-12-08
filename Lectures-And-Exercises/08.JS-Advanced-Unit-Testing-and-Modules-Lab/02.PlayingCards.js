function solve(face, suit){
    const faceMap = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 'J',
        'Q': 'Q',
        'K': 'K',
        'A': 'A'
    };

    const suitMap = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    class Card{
        constructor(face, suit){
            this.suit = suitMap[suit];
            this.face = faceMap[face];
        };

        get suit(){
            return this._suit;
        }

        set suit(input){
            if (typeof input === 'undefined'){
                throw new Error('Error');
            }

            this._suit = input;
        }

        get face() {
            return this._face;
        }

        set face(input){
            if (typeof input === 'undefined'){
                throw new Error('Error');
            }

            this._face = input;
        }


        toString(){
            return this.face + this.suit;
        }
    }

    return new Card(face,suit).toString();
}

//console.log(solve('A', 'S'));
//console.log(solve('10', 'H'));
console.log(solve('1', 'C'));
