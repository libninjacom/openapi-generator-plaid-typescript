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
import { WalletTransaction } from './walletTransaction';

/**
* WalletTransactionsListResponse defines the response schema for `/wallet/transactions/list`
*/
export class WalletTransactionsListResponse extends null<String, any> {
    /**
    * An array of transactions of an e-wallet, associated with the given `wallet_id`
    */
    'transactions': Array<WalletTransaction>;
    /**
    * Cursor used for fetching transactions created before the latest transaction provided in this response
    */
    'nextCursor'?: string;
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<WalletTransaction>"
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WalletTransactionsListResponse.attributeTypeMap);
    }
}
