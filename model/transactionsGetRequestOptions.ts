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
* An optional object to be used with the request. If specified, `options` must not be `null`.
*/
export class TransactionsGetRequestOptions {
    /**
    * A list of `account_ids` to retrieve for the Item  Note: An error will be returned if a provided `account_id` is not associated with the Item.
    */
    'accountIds'?: Array<string>;
    /**
    * The number of transactions to fetch.
    */
    'count'?: number = 100;
    /**
    * The number of transactions to skip. The default value is 0.
    */
    'offset'?: number = 0;
    /**
    * Include the raw unparsed transaction description from the financial institution. This field is disabled by default. If you need this information in addition to the parsed data provided, contact your Plaid Account Manager.
    */
    'includeOriginalDescription'?: boolean | null = false;
    /**
    * Include the `personal_finance_category` object in the response. This feature is currently in beta – to request access, contact transactions-feedback@plaid.com.
    */
    'includePersonalFinanceCategoryBeta'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountIds",
            "baseName": "account_ids",
            "type": "Array<string>"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "includeOriginalDescription",
            "baseName": "include_original_description",
            "type": "boolean"
        },
        {
            "name": "includePersonalFinanceCategoryBeta",
            "baseName": "include_personal_finance_category_beta",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransactionsGetRequestOptions.attributeTypeMap;
    }
}

