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
* Fired when new or updated holdings have been detected on an investment account. The webhook typically fires once per day, after market close, in response to any newly added holdings or price changes to existing holdings.
*/
export class HoldingsDefaultUpdateWebhook extends null<String, any> {
    /**
    * `HOLDINGS`
    */
    'webhookType': string;
    /**
    * `DEFAULT_UPDATE`
    */
    'webhookCode': string;
    /**
    * The `item_id` of the Item associated with this webhook, warning, or error
    */
    'itemId': string;
    'error'?: PlaidError;
    /**
    * The number of new holdings reported since the last time this webhook was fired.
    */
    'newHoldings': number;
    /**
    * The number of updated holdings reported since the last time this webhook was fired.
    */
    'updatedHoldings': number;

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
        },
        {
            "name": "newHoldings",
            "baseName": "new_holdings",
            "type": "number"
        },
        {
            "name": "updatedHoldings",
            "baseName": "updated_holdings",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HoldingsDefaultUpdateWebhook.attributeTypeMap);
    }
}

