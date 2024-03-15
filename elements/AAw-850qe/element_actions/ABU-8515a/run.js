function(instance, properties, context) {
	const { data_source, start_address, end_address, waypoints } = properties;
    instance.data.addRoute(data_source, start_address, end_address, waypoints);
}