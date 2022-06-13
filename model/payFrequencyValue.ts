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
* The frequency of the pay period.
*/
export enum PayFrequencyValue {
    Monthly = <any> 'monthly',
    Semimonthly = <any> 'semimonthly',
    Weekly = <any> 'weekly',
    Biweekly = <any> 'biweekly',
    Unknown = <any> 'unknown',
    Null = <any> 'null'
}
