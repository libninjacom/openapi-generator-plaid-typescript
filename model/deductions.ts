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
import { DeductionsBreakdown } from './deductionsBreakdown';
import { DeductionsTotal } from './deductionsTotal';
import { Total } from './total';

/**
* An object with the deduction information found on a paystub.
*/
export class Deductions extends null<String, any> {
    'subtotals'?: Array<Total>;
    'breakdown': Array<DeductionsBreakdown>;
    'totals'?: Array<Total>;
    'total': DeductionsTotal;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subtotals",
            "baseName": "subtotals",
            "type": "Array<Total>"
        },
        {
            "name": "breakdown",
            "baseName": "breakdown",
            "type": "Array<DeductionsBreakdown>"
        },
        {
            "name": "totals",
            "baseName": "totals",
            "type": "Array<Total>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "DeductionsTotal"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Deductions.attributeTypeMap);
    }
}

