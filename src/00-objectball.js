const game = gameObject();

function gameObject(){
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
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
            players: {
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
    const value = gameIterator(game, 'points', name);
    
    console.log(`${name} Scored: ${value} points`);
    return value;
}

function shoeSize(name){
    const value = gameIterator(game, 'shoe', name);
    
    console.log(`${name} shoe size: size ${value}`);
    return value;
}

function teamColors(team){
    const value = gameIterator(game, 'colors', team);
    
    console.log(`${team}'s colors: ${value[0]} and ${value[1]}`);
    return value;
}

function teamNames(){
    const teams = [gameIterator(game, 'teamName', 'home'), gameIterator(gameObject(), 'teamName', 'away')];

    console.log(`The teams: ${teams[0]} and ${teams[1]}`);
    return teams;
}

function playerNumbers(team){
    let numbers = [];
    const players = gameIterator(game, 'players', team);
    
    for (let player in players){
        
        numbers.push(gameIterator(game, 'number', player));
    }
    console.log(`${team}'s numbers: ${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, and ${numbers[4]}`);
    return numbers;
}

function playerStats(player){
    let stats;
    const players = {
        ...gameIterator(game, 'players', 'home'), 
        ...gameIterator(game, 'players', 'away')
    };
    
    for (let athlete in players){
        if (athlete === player){
            stats = players[athlete];
        }
    }
    console.log(`${player}'s stats: `, stats);
    return stats;
}

function bigShoeRebounds(){
    let shoe = 0;
    let rebounds = 0;
    let player;
    const players = {
        ...gameIterator(game, 'players', 'home'), 
        ...gameIterator(game, 'players', 'away')
    };
    for (let athlete in players){
        let tempShoe = shoeSize(athlete);
        if (tempShoe > shoe)
            shoe = tempShoe;
            player = athlete;
            rebounds = gameIterator(game, 'rebounds', athlete);
    }
    console.log(`Player with the largest shoe size (${player}): ${rebounds} rebounds`)
    return rebounds;
}

function mostPointsScored(){
    let score = 0;
    let player;
    const players = {
        ...gameIterator(game, 'players', 'home'), 
        ...gameIterator(game, 'players', 'away')
    };
    for (let athlete in players){
        let tempScore = numPointsScored(athlete);
        if (tempScore > score){
            score = tempScore;
            player = athlete
        }
    }
    console.log(`Player with the most points: ${player} with ${score} points`);
    return player;
}

function winningTeam(){
    let homeScore = 0;
    let awayScore = 0;
    const homePlayers = gameIterator(game, 'players', 'home');
    const awayPlayers = gameIterator(game, 'players', 'away');
    
    for (let athlete in homePlayers){
        homeScore += numPointsScored(athlete);
    }
    for (let athlete in awayPlayers){
        awayScore += numPointsScored(athlete);
    }
    if (homeScore > awayScore){
        console.log(`${game.home.teamName} wins ${homeScore} to ${awayScore}`);
        return game.home.teamName;
    }else if (homeScore < awayScore){
        console.log(`${game.away.teamName} wins ${awayScore} to ${homeScore}`)
        return game.away.teamName;
    }else {
        console.log(`It's a tie at ${homeScore} to ${awayScore}`)
        return;
    }
}

function playerWithLongestName(){
    let length = 0;
    let player;
    const players = {
        ...gameIterator(game, 'players', 'home'), 
        ...gameIterator(game, 'players', 'away')
    };
    
    for (let athlete in players){
        console.log(`${athlete} has ${athlete.length} characters`)
        if (athlete.length > length){
            length = athlete.length;
            player = athlete;
        }
    }
    console.log(`Longest name: ${player} with ${length} characters`);
    return player;
}

function doesLongNameStealATon(){
    const player = playerWithLongestName();
    let steals = 0;
    let comparisonPlayer;
    const players = {
        ...gameIterator(game, 'players', 'home'), 
        ...gameIterator(game, 'players', 'away')
    };
    for (let athlete in players){
        let tempSteals = gameIterator(game, 'steals', athlete);
        if (tempSteals > steals){
            steals = tempSteals;
            comparisonPlayer = athlete;
        }
    }
    if (player === comparisonPlayer){
        console.log(`Yes, ${player} does steal the most`)
        return true;
    }else {
        console.log(`No, ${player} does not steal the most`);
        return false;
    }
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

console.log('');

playerNumbers('Brooklyn Nets');
playerNumbers('Charlotte Hornets');

console.log('');

playerStats('Alan Anderson');
playerStats('Reggie Evans');
playerStats('Brook Lopez');
playerStats('Ben Gordon');
playerStats('Bismak Biyombo');

console.log('');

bigShoeRebounds();

console.log('');

mostPointsScored();

console.log('');

winningTeam();

console.log('');

doesLongNameStealATon();