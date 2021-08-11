
// bxSlider and jqueryUI functions
$("#abc").bxSlider(); 
$('#tooltip').tooltip();
$("#image-slider").bxSlider({
    slideHeight: 100,
    slideWidth: 1150,
    slideMargin: 1,
    speed: 1000,
    startSlide: 0,
    auto: true
});


displayList();

// anchor element event handler
$('a').click(function() {
    if(!this.hasAttribute('id')){
        return;
    }
    var id = this.id;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState==4 && request.status==200){
            var data=JSON.parse(request.responseText); 
            displayJSON(data, id);
        }
    }
    request.open('GET', '../json/places.json', true);
    request.send();
});


//  User defined functions-------

//displaying the response from xmlhttpResponse in proper format
function displayJSON(data, id) {
    var h2 = $('#placeInfo h2');
    var img = $('#placeInfo img');
    var p1 = $('#description');
    var p2 = $('#attractions');
    var p3 = $('#best_time');

    $.each(data, function(key, value) {
        
        if(id == value.id){
            h2.text(value.title);
            img.attr('src', value.image);
            p1.text(value.description);
            p2.text(value.attractions);
            p3.text(value.best_time);
        }
    });
}


// displaying the list of top places
function displayList() {
    let str='';
    for(let i=1; i<10; i++){
        str += '<a href="#placeInfo" id='+i+'><span class="name"></span></a>'
    }
    $('#placesList').html(str);
    
    $.ajax({
        type: 'get',
        url: "json/places.json",
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $.each(data, function(key, value) {
                $('#'+key+' span').text(value.title);
                $('#'+key+'').css({'background': 'url('+value.image+')', 'background-size': 'auto 160px'});
            });
        }
    });
}