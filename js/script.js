
// --- MUSTACHE --- 

var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
Mustache.parse(templateItem);

for (var i = 0; i < carouselData.length; i++){
	listItems += Mustache.render(templateItem, carouselData[i]);
};

results.insertAdjacentHTML('beforeend', listItems);

//  ---- Carusel ----

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // ---- options ----
	cellAlign: 'left',
	contain: true,
	pageDots: false,
	hash: true
});

// ---- Progres Bar ----

var progressBar = document.querySelector('.progress-bar')

 flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
 });
