function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          // Add more players...
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          // Add more players...
        }
      }
    };
  }


  function numPointsScored(playerName) {
    let game = gameObject();
    
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
  }
  console.log(numPointsScored("Alan Anderson")); // 22



  function shoeSize(playerName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
  }
  console.log(shoeSize("Bismak Biyombo")); // 16



  function teamColors(teamName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  console.log(teamColors("Charlotte Hornets")); // ["Turquoise", "Purple"]



  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]



  function playerNumbers(teamName) {
    let game = gameObject();
    
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
  }
  console.log(playerNumbers("Brooklyn Nets")); // [0, 30, ...]



  function playerStats(playerName) {
    let game = gameObject();
    
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
  }
  console.log(playerStats("Reggie Evans"));



  function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > biggestShoe) {
          biggestShoe = game[team].players[player].shoe;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  console.log(bigShoeRebounds());



  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          bestPlayer = player;
        }
      }
    }
    return bestPlayer;
  }
  console.log(mostPointsScored());


  function winningTeam() {
    let game = gameObject();
    let teamScores = { home: 0, away: 0 };
  
    for (let team in game) {
      for (let player in game[team].players) {
        teamScores[team] += game[team].players[player].points;
      }
    }
    return teamScores.home > teamScores.away ? game.home.teamName : game.away.teamName;
  }
  console.log(winningTeam());


  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log(playerWithLongestName());

  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let bestDefender = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
          bestDefender = player;
        }
      }
    }
    return longestName === bestDefender;
  }
  console.log(doesLongNameStealATon());