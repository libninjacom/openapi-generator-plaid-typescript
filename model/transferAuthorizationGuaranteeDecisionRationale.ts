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
* The rationale for Plaid\'s decision to not guarantee a transfer. Will be `null` unless `guarantee_decision` is `NOT_GUARANTEED`.
*/
export class TransferAuthorizationGuaranteeDecisionRationale extends null<String, any> {
    /**
    * A code representing the reason Plaid declined to guarantee this transfer:  `RETURN_BANK`: The risk of a bank-initiated return (for example, an R01/NSF) is too high to guarantee this transfer.  `RETURN_CUSTOMER`: The risk of a customer-initiated return (for example, a R10/Unauthorized) is too high to guarantee this transfer.  `GUARANTEE_LIMIT_REACHED`: This transfer is low-risk, but Guaranteed ACH has exhausted an internal limit on the number or rate of guarantees that applies to this transfer.  `RISK_ESTIMATE_UNAVAILABLE`: A risk estimate is unavailable for this Item.
    */
    'code': TransferAuthorizationGuaranteeDecisionRationale.CodeEnum;
    /**
    * A human-readable description of why the transfer cannot be guaranteed.
    */
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "TransferAuthorizationGuaranteeDecisionRationale.CodeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferAuthorizationGuaranteeDecisionRationale.attributeTypeMap);
    }
}

export namespace TransferAuthorizationGuaranteeDecisionRationale {
    export enum CodeEnum {
        ReturnBank = <any> 'RETURN_BANK',
        ReturnCustomer = <any> 'RETURN_CUSTOMER',
        GuaranteeLimitReached = <any> 'GUARANTEE_LIMIT_REACHED',
        RiskEstimateUnavailable = <any> 'RISK_ESTIMATE_UNAVAILABLE'
    }
}
