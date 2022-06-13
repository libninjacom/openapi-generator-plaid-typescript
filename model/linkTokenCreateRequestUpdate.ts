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
* Specifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode).
*/
export class LinkTokenCreateRequestUpdate {
    /**
    * If `true`, enables [update mode with Account Select](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts).
    */
    'accountSelectionEnabled'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountSelectionEnabled",
            "baseName": "account_selection_enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LinkTokenCreateRequestUpdate.attributeTypeMap;
    }
}
