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
* Information describing a transaction category
*/
export class Category extends null<String, any> {
    /**
    * An identifying number for the category. `category_id` is a Plaid-specific identifier and does not necessarily correspond to merchant category codes.
    */
    'categoryId': string;
    /**
    * `place` for physical transactions or `special` for other transactions such as bank charges.
    */
    'group': string;
    /**
    * A hierarchical array of the categories to which this `category_id` belongs.
    */
    'hierarchy': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Category.attributeTypeMap);
    }
}
