function(instance, properties, context) {

	var date = new Date( Number( String( properties.unix_timestamp ).padEnd(13,0) ) )
    instance.publishState('date', date)

}