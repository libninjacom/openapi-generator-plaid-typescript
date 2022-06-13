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
* Fired when the status of an income verification instance has changed. It will typically take several minutes for this webhook to fire after the end user has uploaded their documents in the Document Income flow.
*/
export class IncomeVerificationStatusWebhook extends null<String, any> {
    /**
    * `\"INCOME\"`
    */
    'webhookType': string;
    /**
    * `income_verification`
    */
    'webhookCode': string;
    /**
    * The `income_verification_id` of the verification instance whose status is being reported.
    */
    'incomeVerificationId': string;
    /**
    * The Item ID associated with the verification.
    */
    'itemId': string;
    /**
    * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.  `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.  `VERIFICATION_STATUS_PENDING_APPROVAL`: The income verification has been sent to the user for review.
    */
    'verificationStatus': string;

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
            "name": "incomeVerificationId",
            "baseName": "income_verification_id",
            "type": "string"
        },
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "string"
        },
        {
            "name": "verificationStatus",
            "baseName": "verification_status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IncomeVerificationStatusWebhook.attributeTypeMap);
    }
}

