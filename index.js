var markersList = JSON.parse(markers);
// Initialize and add the map
function initMap() {

    const centerPos = { lat: markersList[0].lat, lng: markersList[0].long }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: centerPos,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const infoWindow = new google.maps.InfoWindow();
    // map.fitBounds(viewport)


    for (const aMarker of markersList) {
        const newPos = { lat: aMarker.lat, lng: aMarker.long };
        const newMarker = new google.maps.Marker({
            position: newPos,
            map: map,
            title: aMarker.title,
            optimized: false
        });
        newMarker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(newMarker.getTitle());
            infoWindow.open(newMarker.getMap(), newMarker);
          });
    }



    // const locationButton = document.createElement("button");
    // locationButton.textContent = "Pan to Current Location";
    // locationButton.classList.add("custom-map-control-button");
    // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    // locationButton.addEventListener("click", () => {
    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const pos = {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude,
    //                 };
    //                 // infoWindow.setPosition(pos);
    //                 // infoWindow.setContent("Location found.");
    //                 // infoWindow.open(map);
    //                 map.setCenter(pos);
    //             },
    //             () => {
    //                 // handleLocationError(true, infoWindow, map.getCenter());
    //             }
    //         );
    //     } else {
    //         // Browser doesn't support Geolocation
    //         // handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // });
}