<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1343.16">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Courier; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Courier; color: #000000; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><span class="s1">function MenuState(name) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.name = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var scene = new Scene(canvas.width, canvas.height),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx = scene.getContext();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var btns = [], angle = 0, frames = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var _yPos = 100;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>btns.push(new MenuButton("One Player Game", 20, _yPos, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.get("game").init(ONE_PLAYER);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.change("game");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>btns.push(new MenuButton("Two Player Game", 20, _yPos+70, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.get("game").init(TWO_PLAYER);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.change("game");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>btns.push(new MenuButton("About", 20, _yPos+140, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.change("about", true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>btns.push(new MenuButton("More Games", 20, _yPos+210, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.open("https://github.com/maxwihlborg/youtube-tutorials");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.update = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>frames++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>angle = 0.2*Math.cos(frames*0.02);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.render = function(_ctx) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.clearRect(0, 0, canvas.width, canvas.height);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.save();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.translate(190, 40);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.rotate(angle);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.font = "40px Helvetica";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillStyle = "skyblue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var txt = "Tic Tac Toe";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillText(txt, -ctx.measureText(txt).width/2, 18);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.restore();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = btns.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>btns[i].draw(ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (_ctx) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>scene.draw(_ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return scene.getCanvas();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var ONE_PLAYER = 1,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>TWO_PLAYER = 2;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function GameState(name) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.name = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var scene = new Scene(canvas.width, canvas.height),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx = scene.getContext();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var data, player, ai, isPlayer, aiMoved, mode, winner, winnerMsg, hastick;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>canvas.addEventListener("mousedown", function(evt) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (winnerMsg &amp;&amp; state.active_name === "game") {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.change("menu", true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (!isPlayer || winner || state.active_name !== "game" || !hastick) return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var px = mouse.x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var py = mouse.y;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (px % 120 &gt;= 20 &amp;&amp; py % 120 &gt;= 20) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var idx = Math.floor(px/120);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>idx += Math.floor(py/120)*3;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (data[idx].hasData()) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[idx].flip(player);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (mode &amp; ONE_PLAYER) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isPlayer = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>player = player === Tile.NOUGHT ? Tile.CROSS : Tile.NOUGHT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}, false);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.init = function(_mode, tile) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>mode = _mode || ONE_PLAYER;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = 0; i &lt; 9; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var x = (i % 3)*120 + 20;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var y = Math.floor(i/3)*120 + 20;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data.push(new Tile(x, y));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>player = tile || Tile.NOUGHT;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isPlayer = player === Tile.NOUGHT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>aiMoved = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winner = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winnerMsg = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hastick = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ai = new AIPlayer(data);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ai.setSeed(player === Tile.NOUGHT ? Tile.CROSS : Tile.NOUGHT);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (mode &amp; TWO_PLAYER) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>player = Tile.NOUGHT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isPlayer = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.update = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (winnerMsg) return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var activeAnim = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = data.length; i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[i].update();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>activeAnim = activeAnim || data[i].active();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (!activeAnim) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (!aiMoved &amp;&amp; !isPlayer) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var m = ai.move();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (m === -1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winner = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[m].flip(ai.getSeed());</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isPlayer = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (winner &amp;&amp; !aiMoved) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (winner === true) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winnerMsg = "The game was a draw!";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (winner === Tile.NOUGHT) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winnerMsg = "The Nought player won!";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winnerMsg = "The Cross player won!";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>aiMoved = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (aiMoved) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>winner = ai.hasWinner();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>aiMoved = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hastick = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.render = function(_ctx) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.clearRect(0, 0, canvas.width, canvas.height);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = data.length; i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[i].draw(ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (winnerMsg) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = 10, lw = 2, w = 300, h = 80;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>w -= lw;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>h -= lw;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.save();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.translate((canvas.width - w + lw)/2, (canvas.height - h + lw)/2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillStyle = "white";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.strokeStyle = "skyblue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.lineWidth = lw;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.font = "20px Helvetica";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.beginPath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(s, s, s, Math.PI, 1.5*Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(w-s, s, s, 1.5*Math.PI, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(w-s, h-s, s, 0, 0.5*Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(s, h-s, s, 0.5*Math.PI, Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.closePath();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fill();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.stroke();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillStyle = "skyblue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var txt = winnerMsg;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillText(txt, w/2 -ctx.measureText(txt).width/2, 45);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.restore();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (_ctx) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>scene.draw(_ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return scene.getCanvas();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function AboutState(name) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.name = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var scene = new Scene(canvas.width, canvas.height),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx = scene.getContext();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var text = "Tic-tac-toe (or Noughts and crosses, Xs and Os) is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var hastick = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>canvas.addEventListener("mousedown", function(evt) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (hastick &amp;&amp; state.active_name === "about") {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state.change("menu");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hastick = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}, false);</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>(function() {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.font = "20px Helvetica";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillStyle = "skyblue";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.translate(20, 20);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = 10,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>w = 340,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>h = 340,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>pi = Math.PI;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.beginPath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(s, s, s, pi, 1.5*pi);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(w-s, s, s, 1.5*pi, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(w-s, h-s, s, 0, 0.5*pi);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.arc(s, h-s, s, 0.5*pi, pi);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fill();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillStyle = "white";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var words = text.split(' '),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>line = '',</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>x = 20,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>y = 75,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>maxWidth = 300,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>lineHeight = 25;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for(var n = 0; n &lt; words.length; n++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var testLine = line + words[n] + ' ';</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var metrics = ctx.measureText(testLine);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var testWidth = metrics.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (testWidth &gt; maxWidth &amp;&amp; n &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillText(line, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>line = words[n] + ' ';</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>y += lineHeight;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>line = testLine;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.fillText(line, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>})();<span class="Apple-tab-span">	</span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.update = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hastick = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.render = function(_ctx) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (_ctx) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>scene.draw(_ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return scene.getCanvas();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
