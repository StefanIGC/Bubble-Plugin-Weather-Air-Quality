function(properties, context) {



    return { date: new Date( Number( String( properties.timestamp ).padEnd(13,0) ) ) }


}