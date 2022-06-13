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
* Payment scheme. If not specified - the default in the region will be used (e.g. `SEPA_CREDIT_TRANSFER` for EU). Using unsupported values will result in a failed payment.  `FASTER_PAYMENTS`: Enables payments to move quickly between UK bank accounts. Default value in the UK.  `SEPA_CREDIT_TRANSFER`: The standard payment to a beneficiary within the SEPA area.  `SEPA_CREDIT_TRANSFER_INSTANT`: Instant payment within the SEPA area. May involve additional fees and may not be available at some banks.
*/
export enum PaymentScheme {
    Null = <any> 'null',
    FasterPayments = <any> 'FASTER_PAYMENTS',
    SepaCreditTransfer = <any> 'SEPA_CREDIT_TRANSFER',
    SepaCreditTransferInstant = <any> 'SEPA_CREDIT_TRANSFER_INSTANT'
}