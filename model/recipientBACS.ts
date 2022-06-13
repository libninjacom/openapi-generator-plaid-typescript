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
* An object containing a BACS account number and sort code. If an IBAN is not provided or if this recipient needs to accept domestic GBP-denominated payments, BACS data is required.
*/
export class RecipientBACS extends null<String, any> {
    /**
    * The account number of the account. Maximum of 10 characters.
    */
    'account'?: string;
    /**
    * The 6-character sort code of the account.
    */
    'sortCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sort_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RecipientBACS.attributeTypeMap);
    }
}
