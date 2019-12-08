function solve(input){
    [...new Set(input)]
        .sort((a,b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length)
        .forEach(x => console.log(x));
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);
solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);