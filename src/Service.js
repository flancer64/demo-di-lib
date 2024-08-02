/**
 * Class to create new instances of the service.
 */
export default class Sample_Lib_Service {
    /**
     * This service has 2 dependencies that are injected by the container:
     *
     * @param {Sample_Lib_Config} Config - inject as ESM
     * @param {Sample_Lib_Logger|function(string)} logger - inject the default export as a singleton.
     */
    constructor(
        {
            Sample_Lib_Config: Config,
            Sample_Lib_Logger$: logger,
        }
    ) {
        // VARS
        const {
            /** @type {typeof Sample_Lib_Config} */
            default: config
        } = Config; // destruct the Module and get the default export

        // MAIN
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