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
* The network or rails used for the transfer. Valid options are `ach`, `same-day-ach`, or `wire`.
*/
export enum BankTransferNetwork {
    Ach = <any> 'ach',
    SameDayAch = <any> 'same-day-ach',
    Wire = <any> 'wire'
}
