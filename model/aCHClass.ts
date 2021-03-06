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
* Specifies the use case of the transfer.  Required for transfers on an ACH network. In Sandbox, only `ccd`, `ppd`, or `web` can be used.  `\"arc\"` - Accounts Receivable Entry  `\"cbr`\" - Cross Border Entry  `\"ccd\"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts  `\"cie\"` - Customer Initiated Entry  `\"cor\"` - Automated Notification of Change  `\"ctx\"` - Corporate Trade Exchange  `\"iat\"` - International  `\"mte\"` - Machine Transfer Entry  `\"pbr\"` - Cross Border Entry  `\"pop\"` - Point-of-Purchase Entry  `\"pos\"` - Point-of-Sale Entry  `\"ppd\"` - Prearranged Payment or Deposit - the transfer is part of a pre-existing relationship with a consumer, eg. bill payment  `\"rck\"` - Re-presented Check Entry  `\"tel\"` - Telephone-Initiated Entry  `\"web\"` - Internet-Initiated Entry - debits from a consumer’s account where their authorization is obtained over the Internet
*/
export enum ACHClass {
    Arc = <any> 'arc',
    Cbr = <any> 'cbr',
    Ccd = <any> 'ccd',
    Cie = <any> 'cie',
    Cor = <any> 'cor',
    Ctx = <any> 'ctx',
    Iat = <any> 'iat',
    Mte = <any> 'mte',
    Pbr = <any> 'pbr',
    Pop = <any> 'pop',
    Pos = <any> 'pos',
    Ppd = <any> 'ppd',
    Rck = <any> 'rck',
    Tel = <any> 'tel',
    Web = <any> 'web'
}
