var dive           = document.querySelector('.text');
var btn_start      = document.querySelector('.btn_start');
var btn_clear      = document.querySelector('.btn_clear');

function tipeText(){
	var index   = 0;
	var textarea = document.querySelector('textarea').value;
	function inputText(){
    var interval = setInterval(function(){
    	if(textarea == '') return
    	dive.innerHTML += textarea[index];
    	index++
    	if(index == textarea.length){ 
    		clearInterval(interval);
      }
      return true
    },70)
	}
	inputText()
}

btn_start.onclick = function(){
  tipeText()
};
btn_clear.onclick = function(){
	dive.textContent = ''
}