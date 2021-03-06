/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.64.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IncidentUpdate } from './incidentUpdate';

/**
* A status health incident
*/
export class HealthIncident extends null<String, any> {
    /**
    * The start date of the incident, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `\"2020-10-30T15:26:48Z\"`.
    */
    'startDate': Date;
    /**
    * The end date of the incident, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `\"2020-10-30T15:26:48Z\"`.
    */
    'endDate'?: Date;
    /**
    * The title of the incident
    */
    'title': string;
    /**
    * Updates on the health incident.
    */
    'incidentUpdates': Array<IncidentUpdate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "incidentUpdates",
            "baseName": "incident_updates",
            "type": "Array<IncidentUpdate>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HealthIncident.attributeTypeMap);
    }
}

