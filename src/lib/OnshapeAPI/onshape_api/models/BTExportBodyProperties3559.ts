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
import type { BTExportModelProperties3216 } from './BTExportModelProperties3216';
import {
    BTExportModelProperties3216FromJSON,
    BTExportModelProperties3216FromJSONTyped,
    BTExportModelProperties3216ToJSON,
} from './BTExportModelProperties3216';
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTPartMaterial1445 } from './BTPartMaterial1445';
import {
    BTPartMaterial1445FromJSON,
    BTPartMaterial1445FromJSONTyped,
    BTPartMaterial1445ToJSON,
} from './BTPartMaterial1445';
import type { GBTPartVisibility } from './GBTPartVisibility';
import {
    GBTPartVisibilityFromJSON,
    GBTPartVisibilityFromJSONTyped,
    GBTPartVisibilityToJSON,
} from './GBTPartVisibility';

/**
 * 
 * @export
 * @interface BTExportBodyProperties3559
 */
export interface BTExportBodyProperties3559 extends BTExportModelProperties3216 {
    /**
     * 
     * @type {string}
     * @memberof BTExportBodyProperties3559
     */
    btType?: string;
    /**
     * 
     * @type {BTPartMaterial1445}
     * @memberof BTExportBodyProperties3559
     */
    material?: BTPartMaterial1445;
    /**
     * 
     * @type {GBTPartVisibility}
     * @memberof BTExportBodyProperties3559
     */
    visibility?: GBTPartVisibility;
}

/**
 * Check if a given object implements the BTExportBodyProperties3559 interface.
 */
export function instanceOfBTExportBodyProperties3559(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportBodyProperties3559FromJSON(json: any): BTExportBodyProperties3559 {
    return BTExportBodyProperties3559FromJSONTyped(json, false);
}

export function BTExportBodyProperties3559FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportBodyProperties3559 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTExportModelProperties3216FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'material': !exists(json, 'material') ? undefined : BTPartMaterial1445FromJSON(json['material']),
        'visibility': !exists(json, 'visibility') ? undefined : GBTPartVisibilityFromJSON(json['visibility']),
    };
}

export function BTExportBodyProperties3559ToJSON(value?: BTExportBodyProperties3559 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTExportModelProperties3216ToJSON(value),
        'btType': value.btType,
        'material': BTPartMaterial1445ToJSON(value.material),
        'visibility': GBTPartVisibilityToJSON(value.visibility),
    };
}

