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
* Fired when Asset Report generation has failed. The resulting `error` will have an `error_type` of `ASSET_REPORT_ERROR`.
*/
export class AssetsErrorWebhook extends null<String, any> {
    /**
    * `ASSETS`
    */
    'webhookType': string;
    /**
    * `ERROR`
    */
    'webhookCode': string;
    'error': PlaidError;
    /**
    * The ID associated with the Asset Report.
    */
    'assetReportId': string;

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
            "name": "assetReportId",
            "baseName": "asset_report_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssetsErrorWebhook.attributeTypeMap);
    }
}

