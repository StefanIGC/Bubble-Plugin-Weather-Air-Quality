function(instance, properties, context) {
    if (instance.data.map) {
        instance.data.map.off();
        instance.data.map.remove();
    }
    
    const map = L.map(instance.canvas);
    instance.data.map = map;
    
    if (properties.data_source) {
        properties.data_source.get(0, properties.data_source.length()).forEach(m => {
            instance.data.addMarker(m, properties.address_field);
        });
    }
    
    map.on('locationfound', instance.data.onLocationFound);
    map.on('locationerror', instance.data.onLocationError);
    
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a target="_blank" href="https://bubble.io/contributor/bubbleis-1569515603397x325153050732696100">Mr. Bubbles</a>'}).addTo(map);
    
    if (instance.data.markers.length) {
        const group = new L.featureGroup(instance.data.markers);
        map.fitBounds(group.getBounds());
        return;
    }
    
    map.locate({setView: true, maxZoom: 16});
}