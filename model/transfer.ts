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
import { TransferAuthorizationGuaranteeDecision } from './transferAuthorizationGuaranteeDecision';
import { TransferAuthorizationGuaranteeDecisionRationale } from './transferAuthorizationGuaranteeDecisionRationale';
import { TransferFailure } from './transferFailure';
import { TransferNetwork } from './transferNetwork';
import { TransferStatus } from './transferStatus';
import { TransferSweepStatus } from './transferSweepStatus';
import { TransferType } from './transferType';
import { TransferUserInResponse } from './transferUserInResponse';

/**
* Represents a transfer within the Transfers API.
*/
export class Transfer extends null<String, any> {
    /**
    * Plaid’s unique identifier for a transfer.
    */
    'id': string;
    'achClass': ACHClass;
    /**
    * The account ID that should be credited/debited for this transfer.
    */
    'accountId': string;
    'type': TransferType;
    'user': TransferUserInResponse;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    /**
    * The description of the transfer.
    */
    'description': string;
    /**
    * The datetime when this transfer was created. This will be of the form `2006-01-02T15:04:05Z`
    */
    'created': Date;
    'status': TransferStatus;
    'sweepStatus'?: TransferSweepStatus | null;
    'network': TransferNetwork;
    /**
    * When `true`, you can still cancel this transfer.
    */
    'cancellable': boolean;
    'failureReason': TransferFailure | null;
    /**
    * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply: - The JSON values must be Strings (no nested JSON objects allowed) - Only ASCII characters may be used - Maximum of 50 key/value pairs - Maximum key length of 40 characters - Maximum value length of 500 characters 
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * Plaid’s unique identifier for the origination account that was used for this transfer.
    */
    'originationAccountId': string;
    'guaranteeDecision': TransferAuthorizationGuaranteeDecision | null;
    'guaranteeDecisionRationale': TransferAuthorizationGuaranteeDecisionRationale | null;
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
            "name": "achClass",
            "baseName": "ach_class",
            "type": "ACHClass"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferType"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "TransferUserInResponse"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
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
            "type": "TransferStatus"
        },
        {
            "name": "sweepStatus",
            "baseName": "sweep_status",
            "type": "TransferSweepStatus"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "TransferNetwork"
        },
        {
            "name": "cancellable",
            "baseName": "cancellable",
            "type": "boolean"
        },
        {
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "TransferFailure"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "originationAccountId",
            "baseName": "origination_account_id",
            "type": "string"
        },
        {
            "name": "guaranteeDecision",
            "baseName": "guarantee_decision",
            "type": "TransferAuthorizationGuaranteeDecision"
        },
        {
            "name": "guaranteeDecisionRationale",
            "baseName": "guarantee_decision_rationale",
            "type": "TransferAuthorizationGuaranteeDecisionRationale"
        },
        {
            "name": "isoCurrencyCode",
            "baseName": "iso_currency_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Transfer.attributeTypeMap);
    }
}

