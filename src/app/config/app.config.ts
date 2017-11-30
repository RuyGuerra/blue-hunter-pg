import { InjectionToken } from '@angular/core';


export const APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
    httpTimeout: number;
}

export const AppConfig: IAppConfig = {
    httpTimeout: 8000,
    apiEndpoint: '/api'
    // apiEndpoint: 'https://dummy-blue-hunter.mybluemix.net'
};
