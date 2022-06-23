let ruler = 'to@Cza9'

function gotf(){
	let c = document.querySelector('.rectangle_11');
	let f = document.querySelector('#g5');
	let e = document.querySelector('#Enter');
	let m = document.querySelector('.message');

	if (c.value === ruler){
		f.style.display = 'block';
	} else {
		m.textContent = document.querySelector('.rectangle_11').value + " " + "isn't the code"
	}
};

