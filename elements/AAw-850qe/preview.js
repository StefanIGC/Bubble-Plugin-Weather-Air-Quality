function(instance, properties) {
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    }).appendTo("head");

    $.getScript('https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', e => {
        instance.canvas.style.height = properties.bubble.height + 'px';
        const map = L.map(instance.canvas).setView([51.517, -0.0924], 13);
        L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a target="_blank" href="https://bubble.io/contributor/bubbleis-1569515603397x325153050732696100">Mr. Bubbles</a>'}).addTo(map);
        L.marker([51.517, -0.0924]).addTo(map);
    });
}