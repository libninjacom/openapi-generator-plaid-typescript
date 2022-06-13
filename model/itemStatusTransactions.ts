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

/**
* Information about the last successful and failed transactions update for the Item.
*/
export class ItemStatusTransactions extends null<String, any> {
    /**
    * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last successful transactions update for the Item. The status will update each time Plaid successfully connects with the institution, regardless of whether any new data is available in the update.
    */
    'lastSuccessfulUpdate'?: Date | null;
    /**
    * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last failed transactions update for the Item. The status will update each time Plaid fails an attempt to connect with the institution, regardless of whether any new data is available in the update.
    */
    'lastFailedUpdate'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastSuccessfulUpdate",
            "baseName": "last_successful_update",
            "type": "Date"
        },
        {
            "name": "lastFailedUpdate",
            "baseName": "last_failed_update",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ItemStatusTransactions.attributeTypeMap);
    }
}

