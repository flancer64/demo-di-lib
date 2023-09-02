/**
 * Factory function to inject dependencies and create a logging function.
 *
 * @namespace Sample_Lib_Logger
 *
 * @param {Sample_Lib_Config} config - default export
 * @return {function(string)}
 */
export default function (
    {
        Sample_Lib_Config: config,
    }
) {
    /**
     * Logs the `msg` to the console with the app name prefix.
     *
     * @param {string} msg
     */
    function Sample_Lib_Logger(msg) {
        console.log(`${config.name}: ${msg}`);
    }

    // MAIN
    Sample_Lib_Logger(`Creating logger for '${config.name}'.`);
    return Sample_Lib_Logger;
}
