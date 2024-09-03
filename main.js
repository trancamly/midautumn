/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */

// var res = document.querySelector('.content');
var in4 = document.querySelector('.in4');
var closes = document.querySelector('.ti-close');
var opens = document.querySelector('#info');
var off2 = document.querySelector('i');
var off = document.querySelector('#off');
// var off3 = document.querySelector('#d-autumn');
var off4 = document.querySelectorAll('.mid-autumn');
var k = off4.length;
var hien = document.querySelector('.hien');

off.classList.remove('in4');
off2.classList.remove('ti-close');

opens.onclick = function(e){
  // e.stopPropagation();
  off.classList.add('in4');
  off2.classList.add('ti-close');
  for(var i = 0; i < k; i++) 
    off4[i].classList.replace('mid-autumn', 'hien');
}

closes.onclick = function(e){
  e.stopPropagation();
  off.classList.remove('in4');
  off2.classList.remove('ti-close');
  for(var i = 0; i < k; i++)
  off4[i].classList.replace('hien', 'mid-autumn');
}

