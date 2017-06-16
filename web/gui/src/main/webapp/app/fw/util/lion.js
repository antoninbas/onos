/*
 * Copyright 2017-present Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/*
 ONOS GUI -- Lion -- Localization Utilities
 */
(function () {
    'use strict';

    var $log, fs;

    // returns a lion bundle (function) for the given bundle-key
    function bundle(bundleKey) {
        var bundle = {
            computer: 'Calcolatore',
            disk: 'Disco',
            monitor: 'Schermo',
            keyboard: 'Tastiera'
        };

        if (bundleKey === 'core.view.cluster') {
            bundle = {
                title_cluster_nodes: 'Cluster Nodes',
                total: 'Total',
                active: 'Active',
                started: 'Started',
                node_id: 'Node ID',
                ip_address: 'IP Address',
                tcp_port: 'TCP Port',
                last_updated: 'Last Updated',
                devices: 'Devices',
                uri: 'URI',
                type: 'Type',
                chassis_id: 'Chassis ID',
                vendor: 'Vendor',
                hw_version: 'H/W Version',
                sw_version: 'S/W Version',
                protocol: 'Protocol',
                serial_number: 'Serial #',
                k_esc_hint: 'Close the details panel',
                k_click_hint: 'Select a row to show cluster node details',
                k_scroll_down_hint: 'See available cluster nodes',
                k_click: 'click',
                k_scroll_down: 'scroll down'
            };
        }

        // TODO: Use message handler mech. to get bundle from server
        $log.warn('Using fake bundle', bundle);

        return function (key) {
            return bundle[key] || '%' + key + '%';
        };
    }

    angular.module('onosUtil')
        .factory('LionService', ['$log', 'FnService',

        function (_$log_, _fs_) {
            $log = _$log_;
            fs = _fs_;

            return {
                bundle: bundle
            };
        }]);
}());
