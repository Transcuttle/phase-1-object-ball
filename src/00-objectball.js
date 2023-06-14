function gameObject(){
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            player: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            player: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return game;
}

//Recursive Iterator. Step through each key!!! and if one equals the 'name' argument, return the value assigned to key 'request'

function gameIterator(target, request, name){
    let value;
    if (typeof target === 'object'){
        for (let key in target){
            
            if (key === name){
                value = target[key][request];
                break
            }else if (target[key] === name){
                
                value = target[request];
            }else if (value === undefined){

                value = gameIterator(target[key], request, name);
            }
        }
    }
    return value;
}

function numPointsScored(name){
    const value = gameIterator(gameObject(), 'points', name);
    
    console.log(`${name} Scored: ${value} points`);
    return value;
}

function shoeSize(name){
    const value = gameIterator(gameObject(), 'shoe', name);
    
    console.log(`${name} shoe size: size ${value}`);
    return value;
}

function teamColors(team){
    const value = gameIterator(gameObject(), 'colors', team);
    
    console.log(`${team}'s colors: ${value[0]} and ${value[1]}`);
    return value;
}

function teamNames(){
    const teams = [gameIterator(gameObject(), 'teamName', 'home'), gameIterator(gameObject(), 'teamName', 'away')];

    console.log(`The teams: ${teams[0]} and ${teams[1]}`);
    return teams;
}

numPointsScored('Alan Anderson');
numPointsScored('Reggie Evans');
numPointsScored('Brook Lopez');
numPointsScored('Ben Gordon');
numPointsScored('Bismak Biyombo');

console.log('');

shoeSize('Alan Anderson');
shoeSize('Reggie Evans');
shoeSize('Brook Lopez');
shoeSize('Ben Gordon');
shoeSize('Bismak Biyombo');

console.log('');

teamColors('Brooklyn Nets');
teamColors('Charlotte Hornets');

console.log('');

teamNames();