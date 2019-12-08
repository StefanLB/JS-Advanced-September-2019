const SoftUniFy = require('./03. Softunify_Ресурси').SoftUniFy;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('SoftUniFy tests',() => {
    it('creates an instance with string param', () => {
        let playlist = new SoftUniFy('test');
        assert.deepEqual(playlist.allSongs,{});
    });
    it('test',() =>{
        let sofunify = new SoftUniFy();

        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        assert.equal(sofunify.songsList,'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ');
    });
    it('test', () => {
        let sofunify = new SoftUniFy();

        assert.equal(sofunify.rateArtist('Eminem'),'The Eminem is not on your artist list.');
        assert.equal(sofunify.rateArtist('Eminem, 50'),'The Eminem, 50 is not on your artist list.');
    });
    it('test', () =>{
        let sofunify = new SoftUniFy();

        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        assert.equal(sofunify.rateArtist('Eminem'),'0');
        assert.equal(sofunify.rateArtist('Eminem, 50'),'The Eminem, 50 is not on your artist list.');
    });
    it('test', () => {
        let sofunify = new SoftUniFy();

        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        assert.deepEqual(sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...'), sofunify);
    });
    it('is the song empty', () => {
        let myClass = new SoftUniFy();
        assert.equal(myClass.playSong('song'), "You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!");
    })

});