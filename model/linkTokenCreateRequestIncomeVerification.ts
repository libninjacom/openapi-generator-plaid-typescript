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
* Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
*/
export class LinkTokenCreateRequestIncomeVerification {
    /**
    * The `income_verification_id` of the verification instance, as provided by `/income/verification/create`.
    */
    'incomeVerificationId'?: string;
    /**
    * The `asset_report_id` of an asset report associated with the user, as provided by `/asset_report/create`. Providing an `asset_report_id` is optional and can be used to verify the user through a streamlined flow. If provided, the bank linking flow will be skipped.
    */
    'assetReportId'?: string;
    /**
    * The ID of a precheck created with `/income/verification/precheck`. Will be used to improve conversion of the income verification flow by streamlining the Link interface presented to the end user.
    */
    'precheckId'?: string;
    /**
    * An array of access tokens corresponding to the Items that will be cross-referenced with the product data. If the `transactions` product was not initialized for the Items during link, it will be initialized after this Link session.
    */
    'accessTokens'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "incomeVerificationId",
            "baseName": "income_verification_id",
            "type": "string"
        },
        {
            "name": "assetReportId",
            "baseName": "asset_report_id",
            "type": "string"
        },
        {
            "name": "precheckId",
            "baseName": "precheck_id",
            "type": "string"
        },
        {
            "name": "accessTokens",
            "baseName": "access_tokens",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return LinkTokenCreateRequestIncomeVerification.attributeTypeMap;
    }
}

