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

/**
* AccountsGetResponse defines the response schema for `/accounts/get` and `/accounts/balance/get`.
*/
export class AccountsGetResponse extends null<String, any> {
    /**
    * An array of financial institution accounts associated with the Item. If `/accounts/balance/get` was called, each account will include real-time balance information.
    */
    'accounts': Array<AccountBase>;
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
        return super.getAttributeTypeMap().concat(AccountsGetResponse.attributeTypeMap);
    }
}

