function(instance, properties, context) {
	const { data_source, id_field, address_field } = properties;
    instance.data.addMarker(data_source, address_field);
}