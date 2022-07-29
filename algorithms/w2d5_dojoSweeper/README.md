# Week 2 Day 5 - Dojo Sweeper

Using the HTML, CSS, and JS provided complete the howMany(i, j, element) function so that it will alert (or console.log) the number of ninjas under the adjacent squares. You can either include or exclude the number of the clicked square in that value.

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dojo Sweeper</title>
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <h2>Dojo Sweeper<h2>
    <div id="the-dojo">still loading... there may be an error</div>
    <script src="game.js"></script>
</body>
</html>
```

## game.css

```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
* {
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', monospace;
}
    
h2 {
    text-align: center;
    margin: 20px 0;
}
    
#the-dojo {
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
    
.tatami {
    background-color: wheat;
    height: 32px;
    width: 32px;
    border: 2px solid #ccc;
    border-right: 2px solid #999;
    border-bottom: 2px solid #999;
}
    
.tatami:active {
    border: 2px solid #999;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
}
```

## game.js

```js
var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
  ];

var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

function howMany(i, j, element) {
  console.log({i, j});
  alert("TODO - determine how many ninjas are hiding in adjacent squares");
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);
```