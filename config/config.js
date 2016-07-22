/*global define*/
define(function () {

    'use strict';

    return {
        TOP_MENU: '../../../config/submodules/fx-menu/topmenu_config.json',
        MD_EXPORT_URL: 'http://fenixservices.fao.org/d3s',
        DATA_ENVIROMENT_URL: 'http://fenixservices.fao.org',

        //all components
        cache : false,
        environment: "production",

        //Analysis
        catalog : {
            selectorsRegistry: {
                contextSystem: {
                    selector: {
                        source: [
                            {value: "cstat_training", label: "CountrySTAT Training"}
                        ],
                        default: ["cstat_training"]
                    }
                },
                dataDomain: {
                    cl : {
                        uid: "CountrySTAT_Indicators",
                        level : 1,
                        levels : 1
                    }
                }
            },
            baseFilter: {
                "dsd.contextSystem": {"enumeration": ["cstat_training"]},
                "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
            },
            defaultSelectors: ["referenceArea", "dataDomain"],
            menuExcludedItems : ["accessibility"]

        },

    };

});