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
* Fired when an Item was not verified via automated micro-deposits after seven days since the automated micro-deposit was made.
*/
export class VerificationExpiredWebhook extends null<String, any> {
    /**
    * `AUTH`
    */
    'webhookType': string;
    /**
    * `VERIFICATION_EXPIRED`
    */
    'webhookCode': string;
    /**
    * The `item_id` of the Item associated with this webhook, warning, or error
    */
    'itemId': string;
    /**
    * The `account_id` of the account associated with the webhook
    */
    'accountId': string;

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
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerificationExpiredWebhook.attributeTypeMap);
    }
}

