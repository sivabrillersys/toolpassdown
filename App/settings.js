/**
 * Environment Setup Variables	
 */

//----------------------------------------
// Change the following to switch between DEVEL and PRODUCTION
var DEV = 1; //1 Development, 0 Production
//----------------------------------------

var ServerName = (DEV) ? 'http://10.2.31.117/web-rp/' : 'https://informatics.intermolecular.com/';

var serviceURL = ServerName + 'extjs/servicebus/Router.cfm'; 
var relayURL = ServerName + 'relay/relay.cfc';

module.exports = {
	serviceURL : serviceURL.toString(),
	relayURL : relayURL.toString()
}