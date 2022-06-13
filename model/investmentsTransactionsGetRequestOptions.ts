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
* An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
*/
export class InvestmentsTransactionsGetRequestOptions {
    /**
    * An array of `account_ids` to retrieve for the Item.
    */
    'accountIds'?: Array<string>;
    /**
    * The number of transactions to fetch. 
    */
    'count'?: number = 100;
    /**
    * The number of transactions to skip when fetching transaction history
    */
    'offset'?: number = 0;

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
        }    ];

    static getAttributeTypeMap() {
        return InvestmentsTransactionsGetRequestOptions.attributeTypeMap;
    }
}

