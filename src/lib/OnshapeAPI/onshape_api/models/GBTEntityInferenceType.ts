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


/**
 * 
 * @export
 */
export const GBTEntityInferenceType = {
    PartOrigin: 'PART_ORIGIN',
    Point: 'POINT',
    Centroid: 'CENTROID',
    Center: 'CENTER',
    MidPoint: 'MID_POINT',
    TopAxisPoint: 'TOP_AXIS_POINT',
    MidAxisPoint: 'MID_AXIS_POINT',
    BottomAxisPoint: 'BOTTOM_AXIS_POINT',
    OriginX: 'ORIGIN_X',
    OriginY: 'ORIGIN_Y',
    OriginZ: 'ORIGIN_Z',
    LoopCenter: 'LOOP_CENTER',
    Unknown: 'UNKNOWN'
} as const;
export type GBTEntityInferenceType = typeof GBTEntityInferenceType[keyof typeof GBTEntityInferenceType];


export function GBTEntityInferenceTypeFromJSON(json: any): GBTEntityInferenceType {
    return GBTEntityInferenceTypeFromJSONTyped(json, false);
}

export function GBTEntityInferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTEntityInferenceType {
    return json as GBTEntityInferenceType;
}

export function GBTEntityInferenceTypeToJSON(value?: GBTEntityInferenceType | null): any {
    return value as any;
}

