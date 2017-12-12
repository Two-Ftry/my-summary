/**
 * Created by jfhuang on 17/12/13.
 */

var $body = document.body;

// 1
var h1 = document.createElement('h1');
h1.innerText = text;

$body.appendChild(h1);

// 2 认识的女孩子
var h2 = document.createElement('h2')
h2.innerText = '女孩子';
var p = document.createElement('p');
p.innerText = '认识了5个女孩子,一个都没成~~';
$body.appendChild(h2);
$body.appendChild(p);

// 3 看了的书
var h2 = document.createElement('h2')
h2.innerText = '看了的书';
var p = document.createElement('p');
p.innerText = '看了10本书,然后又都忘记了~~';
$body.appendChild(h2);
$body.appendChild(p);