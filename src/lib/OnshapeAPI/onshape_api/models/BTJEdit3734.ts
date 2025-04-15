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
import {
     BTJEditChange2636FromJSONTyped,
     BTJEditDelete1992FromJSONTyped,
     BTJEditInsert2523FromJSONTyped,
     BTJEditList2707FromJSONTyped,
     BTJEditMove3245FromJSONTyped
} from './index';

/**
 * An edit that will be applied to the application element's json data.
 * @export
 * @interface BTJEdit3734
 */
export interface BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEdit3734
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTJEdit3734 interface.
 */
export function instanceOfBTJEdit3734(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTJEdit3734FromJSON(json: any): BTJEdit3734 {
    return BTJEdit3734FromJSONTyped(json, false);
}

export function BTJEdit3734FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEdit3734 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTJEditChange-2636') {
            return BTJEditChange2636FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditDelete-1992') {
            return BTJEditDelete1992FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditInsert-2523') {
            return BTJEditInsert2523FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditList-2707') {
            return BTJEditList2707FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditMove-3245') {
            return BTJEditMove3245FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTJEdit3734ToJSON(value?: BTJEdit3734 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
    };
}

