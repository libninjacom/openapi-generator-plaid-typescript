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
* SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
*/
export class SandboxIncomeFireWebhookRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * The ID of the verification.
    */
    'incomeVerificationId': string;
    /**
    * The Item ID associated with the verification.
    */
    'itemId': string;
    /**
    * The URL to which the webhook should be sent.
    */
    'webhook': string;
    /**
    * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.  `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.  `VERIFICATION_STATUS_PENDING_APPROVAL`: The income verification has been sent to the user for review.
    */
    'verificationStatus': SandboxIncomeFireWebhookRequest.VerificationStatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "secret",
            "baseName": "secret",
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
            "name": "webhook",
            "baseName": "webhook",
            "type": "string"
        },
        {
            "name": "verificationStatus",
            "baseName": "verification_status",
            "type": "SandboxIncomeFireWebhookRequest.VerificationStatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return SandboxIncomeFireWebhookRequest.attributeTypeMap;
    }
}

export namespace SandboxIncomeFireWebhookRequest {
    export enum VerificationStatusEnum {
        ProcessingComplete = <any> 'VERIFICATION_STATUS_PROCESSING_COMPLETE',
        ProcessingFailed = <any> 'VERIFICATION_STATUS_PROCESSING_FAILED',
        PendingApproval = <any> 'VERIFICATION_STATUS_PENDING_APPROVAL'
    }
}
