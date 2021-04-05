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



    const locationButton = document.createElement("button");
    locationButton.classList.add("btn")
    locationButton.classList.add("btn-primary")
    locationButton.classList.add("mt-2")

    locationButton.textContent = "Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        document.getElementById("spinner-holder").style.display = 'block'
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    const newMarker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        title: "You are here",
                        icon: {
                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                            strokeColor: "blue",
                            scale: 3
                        },
                        optimized: false
                    });

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("You are here");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    document.getElementById("spinner-holder").style.display = 'none'
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                    document.getElementById("spinner-holder").style.display = 'none'
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
            document.getElementById("spinner-holder").style.display = 'none'
        }
    });


}