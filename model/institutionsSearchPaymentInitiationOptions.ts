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
* Additional options that will be used to filter institutions by various Payment Initiation configurations.
*/
export class InstitutionsSearchPaymentInitiationOptions extends null<String, any> {
    /**
    * A unique ID identifying the payment
    */
    'paymentId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentId",
            "baseName": "payment_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InstitutionsSearchPaymentInitiationOptions.attributeTypeMap);
    }
}
