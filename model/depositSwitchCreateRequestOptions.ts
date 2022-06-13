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
* Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
*/
export class DepositSwitchCreateRequestOptions {
    /**
    * The URL registered to receive webhooks when the status of a deposit switch request has changed. 
    */
    'webhook'?: string | null;
    /**
    * An array of access tokens corresponding to transaction items to use when attempting to match the user to their Payroll Provider. These tokens must be created by the same client id as the one creating the switch, and have access to the transactions product.
    */
    'transactionItemAccessTokens'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "string"
        },
        {
            "name": "transactionItemAccessTokens",
            "baseName": "transaction_item_access_tokens",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return DepositSwitchCreateRequestOptions.attributeTypeMap;
    }
}
