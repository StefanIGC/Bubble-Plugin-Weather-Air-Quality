function(instance, properties, context) {
	const { data_source } = properties;
    instance.data.removeMarker(data_source);
}