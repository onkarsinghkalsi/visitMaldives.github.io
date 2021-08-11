// global array variables 

const image = ['atoll-transfer-maldives.jpg', 'male-fish-market.jpg', 'male-local-market.jpg', 'grand-friday-mosque.jpg', "old-friday-mosque.jpg",
 'national-museum-of-maldives.jpg', 'artificial-beach.jpg', 'hulhumale-mosque.jpg', 'sultan-park.jpg', 'hulhumale-beach.jpg'];
const description = ['Atoll Transfer', 'Male Fish Market', 'Male Local Market', 'Grand Friday Mosque', 'Hukuru Miskiiy (Old Friday Mosque)',
'National Museum', 'Artificial Beach', 'Hulhumale Mosque', 'Sultan park', 'Hulhumale Beach'];


slideShow();

showGallery();

showAttractions();

$('#tooltip').tooltip();

// User defined function--------

// showing gallery of images using lightbox
function showGallery() {
    let str='';
    let i=1;
    while(i<=12){
        str += "<a href='images/others/Maldives ("+i+").jpg' data-lightbox='maldives'><img src='images/others/Maldives ("+i+").jpg'></a>";
        i++;
    }
    $('#gallery').html(str);
}

// displaying the banner slideshow
function slideShow() {
    let count = 0;
    $('#slideshow').css({'background':'url("../images/Maldives (1).jpg")', 'background-size': '100% auto'});
    setInterval(() => {
        (count<5)?count++:count=1;
        $('#slideshow').css({'background':'url("../images/Maldives ('+count+').jpg")', 'background-size': '100% auto'});
    }, 3500);
}

// displaying the major attractions 
function showAttractions() {
    let str= '';
    
    for(let i=0; i<10; i++){
        str+= '<div class="imageList"> \
             <img src="images/attractions/'+image[i]+'" alt=""> \
            <div class="container"> \
            <p>'+description[i]+'</p> \
            </div> \
            </div>';
    }

    $('#places').html(str);
}

