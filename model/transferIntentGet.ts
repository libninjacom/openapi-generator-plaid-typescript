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
import { ACHClass } from './aCHClass';
import { TransferAuthorizationDecisionRationale } from './transferAuthorizationDecisionRationale';
import { TransferIntentCreateMode } from './transferIntentCreateMode';
import { TransferIntentGetFailureReason } from './transferIntentGetFailureReason';
import { TransferUserInResponse } from './transferUserInResponse';

/**
* Represents a transfer intent within Transfer UI.
*/
export class TransferIntentGet extends null<String, any> {
    /**
    * Plaid\'s unique identifier for a transfer intent object.
    */
    'id': string;
    /**
    * The datetime the transfer was created. This will be of the form `2006-01-02T15:04:05Z`.
    */
    'created': Date;
    /**
    * The status of the transfer intent.  - `PENDING` – The transfer intent is pending. - `SUCCEEDED` – The transfer intent was successfully created. - `FAILED` – The transfer intent was unable to be created.
    */
    'status': TransferIntentGet.StatusEnum;
    /**
    * Plaid\'s unique identifier for the transfer created through the UI. Returned only if the transfer was successfully created. Null value otherwise.
    */
    'transferId': string | null;
    'failureReason': TransferIntentGetFailureReason | null;
    /**
    *  A decision regarding the proposed transfer.  `APPROVED` – The proposed transfer has received the end user\'s consent and has been approved for processing. Plaid has also reviewed the proposed transfer and has approved it for processing.   `PERMITTED` – Plaid was unable to fetch the information required to approve or decline the proposed transfer. You may proceed with the transfer, but further review is recommended. Plaid is awaiting further instructions from the client.  `DECLINED` – Plaid reviewed the proposed transfer and declined processing. Refer to the `code` field in the `decision_rationale` object for details. Null value otherwise.
    */
    'authorizationDecision': TransferIntentGet.AuthorizationDecisionEnum;
    'authorizationDecisionRationale': TransferAuthorizationDecisionRationale | null;
    /**
    * The Plaid `account_id` for the account that will be debited or credited. Returned only if `account_id` was set on intent creation.
    */
    'accountId'?: string | null;
    /**
    * Plaid’s unique identifier for the origination account used for the transfer.
    */
    'originationAccountId': string;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    'mode': TransferIntentCreateMode;
    'achClass': ACHClass;
    'user': TransferUserInResponse;
    /**
    * A description for the underlying transfer. Maximum of 8 characters.
    */
    'description': string;
    /**
    * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply: - The JSON values must be Strings (no nested JSON objects allowed) - Only ASCII characters may be used - Maximum of 50 key/value pairs - Maximum key length of 40 characters - Maximum value length of 500 characters 
    */
    'metadata'?: { [key: string]: string; } | null;
    /**
    * The currency of the transfer amount, e.g. \"USD\"
    */
    'isoCurrencyCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferIntentGet.StatusEnum"
        },
        {
            "name": "transferId",
            "baseName": "transfer_id",
            "type": "string"
        },
        {
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "TransferIntentGetFailureReason"
        },
        {
            "name": "authorizationDecision",
            "baseName": "authorization_decision",
            "type": "TransferIntentGet.AuthorizationDecisionEnum"
        },
        {
            "name": "authorizationDecisionRationale",
            "baseName": "authorization_decision_rationale",
            "type": "TransferAuthorizationDecisionRationale"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "originationAccountId",
            "baseName": "origination_account_id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "TransferIntentCreateMode"
        },
        {
            "name": "achClass",
            "baseName": "ach_class",
            "type": "ACHClass"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "TransferUserInResponse"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "isoCurrencyCode",
            "baseName": "iso_currency_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferIntentGet.attributeTypeMap);
    }
}

export namespace TransferIntentGet {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Succeeded = <any> 'SUCCEEDED',
        Failed = <any> 'FAILED'
    }
    export enum AuthorizationDecisionEnum {
        Approved = <any> 'APPROVED',
        Permitted = <any> 'PERMITTED',
        Declined = <any> 'DECLINED'
    }
}
