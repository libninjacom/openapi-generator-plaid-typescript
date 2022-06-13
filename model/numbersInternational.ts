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
* Identifying information for transferring money to or from an international bank account via wire transfer.
*/
export class NumbersInternational extends null<String, any> {
    /**
    * The Plaid account ID associated with the account numbers
    */
    'accountId': string;
    /**
    * The International Bank Account Number (IBAN) for the account
    */
    'iban': string;
    /**
    * The Bank Identifier Code (BIC) for the account
    */
    'bic': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NumbersInternational.attributeTypeMap);
    }
}
