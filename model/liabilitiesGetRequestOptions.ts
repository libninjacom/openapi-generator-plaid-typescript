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
* An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
*/
export class LiabilitiesGetRequestOptions {
    /**
    * A list of accounts to retrieve for the Item.  An error will be returned if a provided `account_id` is not associated with the Item
    */
    'accountIds'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountIds",
            "baseName": "account_ids",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return LiabilitiesGetRequestOptions.attributeTypeMap;
    }
}

