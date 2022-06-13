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
* Fired when the Asset Report has been generated and `/asset_report/get` is ready to be called.  If you attempt to retrieve an Asset Report before this webhook has fired, you’ll receive a response with the HTTP status code 400 and a Plaid error code of `PRODUCT_NOT_READY`.
*/
export class AssetsProductReadyWebhook extends null<String, any> {
    /**
    * `ASSETS`
    */
    'webhookType': string;
    /**
    * `PRODUCT_READY`
    */
    'webhookCode': string;
    /**
    * The `asset_report_id` that can be provided to `/asset_report/get` to retrieve the Asset Report.
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
            "name": "assetReportId",
            "baseName": "asset_report_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssetsProductReadyWebhook.attributeTypeMap);
    }
}
