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
import { PaymentInitiationPaymentStatus } from './paymentInitiationPaymentStatus';
import { PlaidError } from './plaidError';

/**
* Fired when the status of a payment has changed.
*/
export class PaymentStatusUpdateWebhook extends null<String, any> {
    /**
    * `PAYMENT_INITIATION`
    */
    'webhookType': string;
    /**
    * `PAYMENT_STATUS_UPDATE`
    */
    'webhookCode': string;
    /**
    * The `payment_id` for the payment being updated
    */
    'paymentId': string;
    'newPaymentStatus': PaymentInitiationPaymentStatus;
    'oldPaymentStatus': PaymentInitiationPaymentStatus;
    /**
    * The original value of the reference when creating the payment.
    */
    'originalReference': string | null;
    /**
    * The value of the reference sent to the bank after adjustment to pass bank validation rules.
    */
    'adjustedReference'?: string | null;
    /**
    * The original value of the `start_date` provided during the creation of a standing order. If the payment is not a standing order, this field will be `null`.
    */
    'originalStartDate': string | null;
    /**
    * The start date sent to the bank after adjusting for holidays or weekends.  Will be provided in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). If the start date did not require adjustment, or if the payment is not a standing order, this field will be `null`.
    */
    'adjustedStartDate': string | null;
    /**
    * The timestamp of the update, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `\"2017-09-14T14:42:19.350Z\"`
    */
    'timestamp': Date;
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
            "name": "paymentId",
            "baseName": "payment_id",
            "type": "string"
        },
        {
            "name": "newPaymentStatus",
            "baseName": "new_payment_status",
            "type": "PaymentInitiationPaymentStatus"
        },
        {
            "name": "oldPaymentStatus",
            "baseName": "old_payment_status",
            "type": "PaymentInitiationPaymentStatus"
        },
        {
            "name": "originalReference",
            "baseName": "original_reference",
            "type": "string"
        },
        {
            "name": "adjustedReference",
            "baseName": "adjusted_reference",
            "type": "string"
        },
        {
            "name": "originalStartDate",
            "baseName": "original_start_date",
            "type": "string"
        },
        {
            "name": "adjustedStartDate",
            "baseName": "adjusted_start_date",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "PlaidError"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentStatusUpdateWebhook.attributeTypeMap);
    }
}

