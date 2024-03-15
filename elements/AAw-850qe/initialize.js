function(instance, context) {
    instance.data.map = null;
    instance.data.markers = [];
    instance.data.routes = [];
    
    instance.data.addMarker = (m, address_field) => {
        const marker = L.marker(m.get(address_field));
        marker.options['id'] = m.get('_id');
        instance.data.markers.push(marker);
        marker.on('click', (e) => {
            instance.publishState('clicked_marker', m);
            instance.triggerEvent('marker_clicked');
    	});
        marker.addTo(instance.data.map);
        instance.triggerEvent('marker_added');
    };
            
    instance.data.removeMarker = (m) => {
        const id = m.get('_id');
        instance.data.markers = instance.data.markers.filter((mark) => {
        	if (mark.options.id !== id) return mark;
        	instance.data.map.removeLayer(mark);
            instance.triggerEvent('marker_removed');
    	});
    };
            
    instance.data.addRoute = (r, start, end) => {
        const route = L.Routing.control({
                show: false,
            	lineOptions: {
                    styles: [{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: '#2880ca', opacity: 1, weight: 2}],
                },
                waypoints:   [
                    r.get(start),
                    r.get(end),
                ],
    	});
        route.options['id'] = r.get('_id');
        instance.data.routes.push(route);
        route.addTo(instance.data.map);
        instance.triggerEvent('route_added');
    };
        
    instance.data.removeRoute = (r) => {
        const id = r.get('_id');
        instance.data.routes = instance.data.routes.filter((route) => {
        	if (route.options.id !== id) return route;
        	instance.data.map.removeControl(route);
            instance.triggerEvent('route_removed');
    	});
    };
    
    instance.data.onLocationFound = e => {
        L.marker(e.latlng).addTo(instance.data.map);
    };
    
    instance.data.onLocationError = e => {};
}