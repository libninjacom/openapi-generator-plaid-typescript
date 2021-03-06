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
import { AccountBase } from './accountBase';
import { Item } from './item';
import { LiabilitiesObject } from './liabilitiesObject';

/**
* LiabilitiesGetResponse defines the response schema for `/liabilities/get`
*/
export class LiabilitiesGetResponse extends null<String, any> {
    /**
    * An array of accounts associated with the Item
    */
    'accounts': Array<AccountBase>;
    'item': Item;
    'liabilities': LiabilitiesObject;
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<AccountBase>"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "Item"
        },
        {
            "name": "liabilities",
            "baseName": "liabilities",
            "type": "LiabilitiesObject"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LiabilitiesGetResponse.attributeTypeMap);
    }
}

