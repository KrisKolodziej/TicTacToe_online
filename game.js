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
<p class="p1"><span class="s1">function StateManager() {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var state = {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>next = null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active = null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anim = 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>right = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.active_name = null;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.add = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = arguments.length; i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var arg = arguments[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state[arg.name] = arg;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.set = function(name) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active = state[name];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.active_name = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.get = function(name) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return state[name];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.change = function(name, _right) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anim = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>right = _right || false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>next = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.active_name = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.tick = function(ctx) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (next) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (anim &lt;= 1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anim += 0.02;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active.update();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state[next].update();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var c1 = active.render(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c2 = state[next].render(),</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c1w = c1.width,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c1h = c1.height,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c2w = c2.width,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c2h = c2.height,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>res = 2,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>t = anim;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p = t &lt; 0.5 ? 2*t*t : -2*(t*(t - 2)) - 1;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (right) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p = 1 - p;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var t = c2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c2 = c1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c1 = t;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = 0; i &lt; c1w; i += res) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.drawImage(c1, i, 0, res, c1h,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>i - p*i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(c1w - i)*p*0.2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>res,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c1h - (c1w - i)*p*0.4</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p = 1 - p;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = 0; i &lt; c2w; i += res) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.drawImage(c2, i, 0, res, c2h,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>i - (i - c2w)*p,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>i*p*0.2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>res,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>c1h - i*p*0.4</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active = state[next];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>next = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active.update();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active.render(ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active.update();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>active.render(ctx);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function Tile(x, y) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var x = x, y = y;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var tile = Tile.BLANK;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var anim = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if (tile == null) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var _c = document.createElement("canvas");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_c.width = _c.height = 100;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var _ctx = _c.getContext("2d");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillStyle = "skyblue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.lineWidth = 4;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.strokeStyle = "white";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.lineCap = "round";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Blank</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillRect(0, 0, 100, 100);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.BLANK = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.BLANK.src = _c.toDataURL();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Nought</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillRect(0, 0, 100, 100);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.beginPath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.arc(50, 50, 30, 0, 2*Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.stroke();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.NOUGHT = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.NOUGHT.src = _c.toDataURL();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Cross</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillRect(0, 0, 100, 100);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.beginPath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.moveTo(20, 20);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.lineTo(80, 80);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.moveTo(80, 20);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.lineTo(20, 80);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.stroke();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.CROSS = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Tile.CROSS.src = _c.toDataURL();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>})();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tile = Tile.BLANK;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.active = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return anim &gt; 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.equals = function(_tile) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return tile === _tile;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.hasData = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return tile !== Tile.BLANK;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.set = function(next) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tile = next;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.flip = function(next) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tile = next;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anim = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.update = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (anim &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anim -= 0.02;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.draw = function(ctx) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (anim &lt;= 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.drawImage(tile, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var res = 2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var t = anim &gt; 0.5 ? Tile.BLANK : tile;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var p = -Math.abs(2*anim - 1) + 1;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p *= p;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = 0; i &lt; 100; i += res) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var j = 50 - (anim &gt; 0.5 ? 100 - i : i);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.drawImage(t, i, 0, res, 100,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>x + i - p*i + 50*p,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>y - j*p*0.2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>res,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>100 + j*p*0.4</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function AIPlayer(data) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var data = data, seed, oppSeed;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.setSeed = function(_seed) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>seed = _seed;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>oppSeed = _seed === Tile.NOUGHT ? Tile.CROSS : Tile.NOUGHT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.getSeed = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return seed;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.move = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return minimax(2, seed)[1];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>function minimax(depth, player) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var nextMoves = getValidMoves();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var best = (player === seed) ? -1e100 : 1e100,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>current,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bestidx = -1;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (nextMoves.length === 0 || depth === 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>best = evaluate();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = nextMoves.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var m = nextMoves[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[m].set(player);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (player === seed) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>current = minimax(depth-1, oppSeed)[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (current &gt; best) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>best = current;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bestidx = m;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>current = minimax(depth-1, seed)[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (current &lt; best) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>best = current;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bestidx = m;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data[m].set(Tile.BLANK);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return [best, bestidx];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>function getValidMoves() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var nm = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (hasWon(seed) || hasWon(oppSeed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return nm;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = data.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (!data[i].hasData()) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nm.push(i);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return nm;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>function evaluate() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(0, 1, 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(3, 4, 5);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(6, 7, 8);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(0, 3, 6);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(1, 4, 7);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(2, 5, 8);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(0, 4, 8);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s += evaluateLine(2, 4, 6);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return s;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>function evaluateLine(idx1, idx2, idx3) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (data[idx1].equals(seed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (data[idx1].equals(oppSeed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (data[idx2].equals(seed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (s === 1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = 10;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (s === -1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (data[idx2].equals(oppSeed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (s === -1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = -10;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (s === 1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (data[idx3].equals(seed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (s &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s *= 10;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (s &lt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (data[idx3].equals(oppSeed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (s &lt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s *= 10;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if (s &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return s;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var winnigPatterns = (function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var wp = ["111000000", "000111000", "000000111",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-converted-space">  </span>"100100100", "010010010", "001001001",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-converted-space">  </span>"100010001", "001010100"],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>r = new Array(wp.length);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = wp.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>r[i] = parseInt(wp[i], 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return r;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var hasWon = this.hasWon = function(player) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var p = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = data.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (data[i].equals(player)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p |= (1 &lt;&lt; i);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for (var i = winnigPatterns.length;i--;) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var wp = winnigPatterns[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ((p &amp; wp) === wp) return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.hasWinner = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (hasWon(seed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return seed;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} if (hasWon(oppSeed)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return oppSeed;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function MenuButton(text, x, y, cb) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var text = text, x = x, y = y, callback = cb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var hover, normal, rect = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>canvas.addEventListener("mousedown", function(evt) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (state.active_name !== "menu") return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (rect.hasPoint(mouse.x, mouse.y)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (callback) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}, false);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var _c = document.createElement("canvas"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_w = _c.width = 340,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_h = _c.height = 50,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_lw = 2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s = 10;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rect.x = x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rect.y = y;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rect.width = _c.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rect.height = _c.height;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_w -= _lw;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_h -= _lw;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var _ctx = _c.getContext("2d");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillStyle = "white";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.strokeStyle = "skyblue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.lineWidth = _lw;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.font = "20px Helvetica";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.translate(_lw/2, _lw/2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.beginPath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.arc(s, s, s, Math.PI, 1.5*Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.arc(_w-s, s, s, 1.5*Math.PI, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.arc(_w-s, _h-s, s, 0, 0.5*Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.arc(s, _h-s, s, 0.5*Math.PI, Math.PI);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.closePath();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fill();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.stroke();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillStyle = _ctx.strokeStyle;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var _txt = text;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillText(_txt, (_w - _ctx.measureText(_txt).width)/2, 30);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>normal = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>normal.src = _c.toDataURL();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fill();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.stroke();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillStyle = "white";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.fillText(_txt, (_w - _ctx.measureText(_txt).width)/2, 30);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hover = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hover.src = _c.toDataURL();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rect.hasPoint = function(x, y) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var xl = this.x &lt; x &amp;&amp; x &lt; this.x+this.width,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>yl = this.y &lt; y &amp;&amp; y &lt; this.y+this.height;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return xl &amp;&amp; yl;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.draw = function(ctx) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var tile = rect.hasPoint(mouse.x, mouse.y) &amp;&amp; state.active_name==="menu"? hover : normal;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ctx.drawImage(tile, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function Scene(width, height) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var width = width, height = height;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var canvas = document.createElement("canvas");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>canvas.width = width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>canvas.height = height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var ctx = canvas.getContext("2d");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.getContext = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ctx;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.getCanvas = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return canvas;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.draw = function(_ctx) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_ctx.drawImage(canvas, 0, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
