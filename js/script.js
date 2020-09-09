"use strict";


var randColor = ['#FF0000', '#FF1493', '#FFA500', '#FFFF00', '#800080', '#DEB887', '#000000', '#C0C0C0', '#FFFFFF', '#00FF00', '#008000', '#00FFFF', '#0000FF'];

var rand = Math.floor(Math.random() * randColor.length);

console.log(randColor[rand]);