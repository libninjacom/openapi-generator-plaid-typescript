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
* The `USER_PERMISSION_REVOKED` webhook is fired to when an end user has used the [my.plaid.com portal](https://my.plaid.com) to revoke the permission that they previously granted to access an Item. Once access to an Item has been revoked, it cannot be restored. If the user subsequently returns to your application, a new Item must be created for the user.
*/
export class UserPermissionRevokedWebhook extends null<String, any> {
    /**
    * `ITEM`
    */
    'webhookType': string;
    /**
    * `USER_PERMISSION_REVOKED`
    */
    'webhookCode': string;
    /**
    * The `item_id` of the Item associated with this webhook, warning, or error
    */
    'itemId': string;
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
        return super.getAttributeTypeMap().concat(UserPermissionRevokedWebhook.attributeTypeMap);
    }
}
