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
import { PlaidError } from './plaidError';

/**
* Fired when transaction(s) for an Item are deleted. The deleted transaction IDs are included in the webhook payload. Plaid will typically check for deleted transaction data several times a day.
*/
export class TransactionsRemovedWebhook extends null<String, any> {
    /**
    * `TRANSACTIONS`
    */
    'webhookType': string;
    /**
    * `TRANSACTIONS_REMOVED`
    */
    'webhookCode': string;
    'error'?: PlaidError;
    /**
    * An array of `transaction_ids` corresponding to the removed transactions
    */
    'removedTransactions': Array<string>;
    /**
    * The `item_id` of the Item associated with this webhook, warning, or error
    */
    'itemId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "webhookType",
            "baseName": "webhook_type",
            "type": "string"
        },
        {
            "name": "webhookCode",
            "baseName": "webhook_code",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "PlaidError"
        },
        {
            "name": "removedTransactions",
            "baseName": "removed_transactions",
            "type": "Array<string>"
        },
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionsRemovedWebhook.attributeTypeMap);
    }
}

