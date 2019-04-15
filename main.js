'use strict';

var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];


var button =document.createElement('button'),
    listContainer = document.createElement('div'),
    songList = document.createElement('ol');

button.appendChild(document.createTextNode('Add song list'));



//show Song list

button.onclick = function() {
    showList();
};
document.body.append(button, listContainer, songList);

function showList() {
    for (var i = 0; i < playList.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerText = playList[i].song;
        songList.appendChild(listItem);

        console.log(listItem);
    }
    button.remove();
}
