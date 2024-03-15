function(instance, properties, context) {
	const { data_source } = properties;
    instance.data.removeRoute(data_source);
}