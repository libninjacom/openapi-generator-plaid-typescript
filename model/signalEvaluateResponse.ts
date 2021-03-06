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
import { SignalEvaluateCoreAttributes } from './signalEvaluateCoreAttributes';
import { SignalScores } from './signalScores';

/**
* SignalEvaluateResponse defines the response schema for `/signal/income/evaluate`
*/
export class SignalEvaluateResponse extends null<String, any> {
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;
    'scores': SignalScores;
    'coreAttributes'?: SignalEvaluateCoreAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        },
        {
            "name": "scores",
            "baseName": "scores",
            "type": "SignalScores"
        },
        {
            "name": "coreAttributes",
            "baseName": "core_attributes",
            "type": "SignalEvaluateCoreAttributes"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignalEvaluateResponse.attributeTypeMap);
    }
}

