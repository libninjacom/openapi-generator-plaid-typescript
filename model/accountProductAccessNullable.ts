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
import { AccountProductAccess } from './accountProductAccess';

/**
* Allow the application to access specific products on this account
*/
export class AccountProductAccessNullable {
    /**
    * Allow the application to access account data. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
    */
    'accountData'?: boolean | null = true;
    /**
    * Allow the application to access bank statements. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
    */
    'statements'?: boolean | null = true;
    /**
    * Allow the application to access tax documents. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
    */
    'taxDocuments'?: boolean | null = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountData",
            "baseName": "account_data",
            "type": "boolean"
        },
        {
            "name": "statements",
            "baseName": "statements",
            "type": "boolean"
        },
        {
            "name": "taxDocuments",
            "baseName": "tax_documents",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AccountProductAccessNullable.attributeTypeMap;
    }
}
