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
import { AuthGetNumbers } from './authGetNumbers';
import { Item } from './item';

/**
* AuthGetResponse defines the response schema for `/auth/get`
*/
export class AuthGetResponse extends null<String, any> {
    /**
    * The `accounts` for which numbers are being retrieved.
    */
    'accounts': Array<AccountBase>;
    'numbers': AuthGetNumbers;
    'item': Item;
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
            "name": "numbers",
            "baseName": "numbers",
            "type": "AuthGetNumbers"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "Item"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AuthGetResponse.attributeTypeMap);
    }
}

