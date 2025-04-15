/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTQuantityRange181 } from './BTQuantityRange181';
import {
    BTQuantityRange181FromJSON,
    BTQuantityRange181FromJSONTyped,
    BTQuantityRange181ToJSON,
} from './BTQuantityRange181';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';

/**
 * 
 * @export
 * @interface BTMConfigurationParameterQuantity1826AllOf
 */
export interface BTMConfigurationParameterQuantity1826AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterQuantity1826AllOf
     */
    btType?: string;
    /**
     * 
     * @type {GBTQuantityType}
     * @memberof BTMConfigurationParameterQuantity1826AllOf
     */
    quantityType?: GBTQuantityType;
    /**
     * 
     * @type {BTQuantityRange181}
     * @memberof BTMConfigurationParameterQuantity1826AllOf
     */
    rangeAndDefault?: BTQuantityRange181;
}

/**
 * Check if a given object implements the BTMConfigurationParameterQuantity1826AllOf interface.
 */
export function instanceOfBTMConfigurationParameterQuantity1826AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterQuantity1826AllOfFromJSON(json: any): BTMConfigurationParameterQuantity1826AllOf {
    return BTMConfigurationParameterQuantity1826AllOfFromJSONTyped(json, false);
}

export function BTMConfigurationParameterQuantity1826AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterQuantity1826AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'quantityType': !exists(json, 'quantityType') ? undefined : GBTQuantityTypeFromJSON(json['quantityType']),
        'rangeAndDefault': !exists(json, 'rangeAndDefault') ? undefined : BTQuantityRange181FromJSON(json['rangeAndDefault']),
    };
}

export function BTMConfigurationParameterQuantity1826AllOfToJSON(value?: BTMConfigurationParameterQuantity1826AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'quantityType': GBTQuantityTypeToJSON(value.quantityType),
        'rangeAndDefault': BTQuantityRange181ToJSON(value.rangeAndDefault),
    };
}

