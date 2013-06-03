/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('githubMojitModelFoo', function(Y, NAME) {

/**
 * The githubMojitModelFoo module.
 *
 * @module githubMojit
 */

    /**
     * Constructor for the githubMojitModelFoo class.
     *
     * @class githubMojitModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { watchers: 1, forks: 1 });
        }

    };

}, '0.0.1', {requires: []});
