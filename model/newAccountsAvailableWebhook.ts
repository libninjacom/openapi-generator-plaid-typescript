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
* Fired when Plaid detects a new account for Items created or updated with [Account Select v2](https://plaid.com/docs/link/customization/#account-select). Upon receiving this webhook, you can prompt your users to share new accounts with you through [Account Select v2 update mode](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts).
*/
export class NewAccountsAvailableWebhook {
    /**
    * `ITEM`
    */
    'webhookType'?: string;
    /**
    * `NEW_ACCOUNTS_AVAILABLE`
    */
    'webhookCode'?: string;
    /**
    * The `item_id` of the Item associated with this webhook, warning, or error
    */
    'itemId'?: string;
    'error'?: PlaidError;

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
            "name": "itemId",
            "baseName": "item_id",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "PlaidError"
        }    ];

    static getAttributeTypeMap() {
        return NewAccountsAvailableWebhook.attributeTypeMap;
    }
}

