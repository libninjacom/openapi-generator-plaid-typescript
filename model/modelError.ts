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
* We use standard HTTP response codes for success and failure notifications, and our errors are further classified by `error_type`. In general, 200 HTTP codes correspond to success, 40X codes are for developer- or user-related failures, and 50X codes are for Plaid-related issues.  Error fields will be `null` if no error has occurred.
*/
export class ModelError extends null<String, any> {
    /**
    * A broad categorization of the error. Safe for programmatic use.
    */
    'errorType': ModelError.ErrorTypeEnum;
    /**
    * The particular error code. Safe for programmatic use.
    */
    'errorCode': string;
    /**
    * A developer-friendly representation of the error code. This may change over time and is not safe for programmatic use.
    */
    'errorMessage': string;
    /**
    * A user-friendly representation of the error code. `null` if the error is not related to user action.  This may change over time and is not safe for programmatic use.
    */
    'displayMessage': string | null;
    /**
    * A unique ID identifying the request, to be used for troubleshooting purposes. This field will be omitted in errors provided by webhooks.
    */
    'requestId'?: string;
    /**
    * In the Assets product, a request can pertain to more than one Item. If an error is returned for such a request, `causes` will return an array of errors containing a breakdown of these errors on the individual Item level, if any can be identified.  `causes` will only be provided for the `error_type` `ASSET_REPORT_ERROR`. `causes` will also not be populated inside an error nested within a `warning` object.
    */
    'causes'?: Array<any>;
    /**
    * The HTTP status code associated with the error. This will only be returned in the response body when the error information is provided via a webhook.
    */
    'status'?: number | null;
    /**
    * The URL of a Plaid documentation page with more information about the error
    */
    'documentationUrl'?: string;
    /**
    * Suggested steps for resolving the error
    */
    'suggestedAction'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorType",
            "baseName": "error_type",
            "type": "ModelError.ErrorTypeEnum"
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string"
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string"
        },
        {
            "name": "displayMessage",
            "baseName": "display_message",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        },
        {
            "name": "causes",
            "baseName": "causes",
            "type": "Array<any>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "documentationUrl",
            "baseName": "documentation_url",
            "type": "string"
        },
        {
            "name": "suggestedAction",
            "baseName": "suggested_action",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ModelError.attributeTypeMap);
    }
}

export namespace ModelError {
    export enum ErrorTypeEnum {
        InvalidRequest = <any> 'INVALID_REQUEST',
        InvalidResult = <any> 'INVALID_RESULT',
        InvalidInput = <any> 'INVALID_INPUT',
        InstitutionError = <any> 'INSTITUTION_ERROR',
        RateLimitExceeded = <any> 'RATE_LIMIT_EXCEEDED',
        ApiError = <any> 'API_ERROR',
        ItemError = <any> 'ITEM_ERROR',
        AssetReportError = <any> 'ASSET_REPORT_ERROR',
        RecaptchaError = <any> 'RECAPTCHA_ERROR',
        OauthError = <any> 'OAUTH_ERROR',
        PaymentError = <any> 'PAYMENT_ERROR',
        BankTransferError = <any> 'BANK_TRANSFER_ERROR',
        IncomeVerificationError = <any> 'INCOME_VERIFICATION_ERROR'
    }
}
