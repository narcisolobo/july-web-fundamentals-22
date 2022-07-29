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