var i;
$.ajax({
url:"https://api.spotify.com/v1/albums/71xFWYFtiHC8eP99QB30AA"
}).done(function(kal){
	console.log(kal);

	let count = kal.tracks.items.length;
	let html = `
	<div id ="kaloy"></div>`;

	document.querySelector('#John').innerHTML = html;
	html = `<h4>Playlist</h4>
	<div class ="table-wrapper">
	<table class = "alt">
	<thread>
	<tr>
	<th>Name</th>
	<th>Track</th>
	</tr>
	</thread>
	<tbody>`;

	for(i=0;i<count;i++){
		html +=`
		<tr>
		<td>${kal.tracks.items[i].name}</td>
		<td><audio controls><source src ="${kal.tracks.items[1].preview_url}" type="audio/ogg"></audio></td>
		</tr>
		`;}


html +=`</tbody>`;
	document.querySelector('#kaloy').innerHTML= html;



});