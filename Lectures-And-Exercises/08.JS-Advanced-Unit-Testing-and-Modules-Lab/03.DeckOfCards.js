function solve(arrInput){
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
            try{
                this.suit = suitMap[suit];
                this.face = faceMap[face];
            } catch {
                console.log(`Invalid card: ${face}${suit}`);
            }

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

    let resultArr = [];

    arrInput
        .forEach(x => {
            resultArr
                .push(
                    new Card(x.toString().slice(0,x.toString().length-1),
                             x.toString().slice(x.toString().length-1))
                                .toString()
                )
        });

    console.log(resultArr.join(' '));
}

console.log(solve(['AS', '10D', 'KH', '2C']));
console.log(solve(['5S', '3D', 'QD', '1C']));
