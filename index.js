var markersList = JSON.parse(markers);
// Initialize and add the map
function initMap() {

    const centerPos = { lat: markersList[0].lat, lng: markersList[0].long }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: centerPos
    });

    for(const aMarker of markersList)
    {
        const newPos = { lat: aMarker.lat, lng: aMarker.long };
        const newMarker = new google.maps.Marker({
            position: newPos,
            map: map,
            title: aMarker.title
        });
    }

    // // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.036 };
    // // The map, centered at Uluru
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 4,
    //     center: uluru,
    // });
    // // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    // });
}