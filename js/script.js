var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name=user-name]")

link.addEventListener("click", function (evt) {
  evt.preventDefault ()
  popup.classList.add("modal-show");
  username.focus();
});


close.addEventListener("click", function (evt) {
  evt.preventDefault ()
  popup.classList.remove("modal-show");
});

function initMap() {
        var place = {lat: 59.9387942, lng: 30.3230833};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: {lat: 59.938693, lng: 30.328756}
        });

        var image = 'img/pin.svg';
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          icon: image
        });
      }
