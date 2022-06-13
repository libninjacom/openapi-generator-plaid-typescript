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
* `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called `brokerage` instead.  `credit:` Credit card  `depository:` Depository account  `loan:` Loan account  `brokerage`: An investment account. Used for `/assets/` endpoints only; other endpoints use `investment`.  `other:` Non-specified account type  See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a full listing of account types and corresponding subtypes.
*/
export enum AccountType {
    Investment = <any> 'investment',
    Credit = <any> 'credit',
    Depository = <any> 'depository',
    Loan = <any> 'loan',
    Brokerage = <any> 'brokerage',
    Other = <any> 'other'
}