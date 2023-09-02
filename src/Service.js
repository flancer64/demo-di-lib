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

        logger(`Service '${this.constructor.name}' is created for app '${config.name}'.`);

        /**
         * @param {string} param
         * @memberOf Sample_Lib_Service.prototype
         */
        this.exec = function (param) {
            logger(`Service running with '${param}' param.`);
        };
    }
}