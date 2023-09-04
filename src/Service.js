/**
 * Class to create new instances of the service.
 */
export default class Sample_Lib_Service {
    /**
     * This service has 2 dependencies that are injected by the container:
     *
     * @param {Sample_Lib_Config} config
     * @param {Sample_Lib_Logger|function(string)} logger
     */
    constructor(
        {
            Sample_Lib_Config: config,
            Sample_Lib_Logger$: logger,
        }
    ) {
        /**
         * @param {string} param
         * @memberOf Sample_Lib_Service.prototype
         */
        this.exec = function (param) {
            logger(`Library service running with '${param}' param.`);
        };

        logger(`New instance of the service '${this.constructor.name}' is created for the app '${config.name}'.`);

    }
}