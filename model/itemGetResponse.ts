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
import { Item } from './item';
import { ItemStatusNullable } from './itemStatusNullable';

/**
* ItemGetResponse defines the response schema for `/item/get` and `/item/webhook/update`
*/
export class ItemGetResponse extends null<String, any> {
    'item': Item;
    'status'?: ItemStatusNullable | null;
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "item",
            "baseName": "item",
            "type": "Item"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ItemStatusNullable"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ItemGetResponse.attributeTypeMap);
    }
}
