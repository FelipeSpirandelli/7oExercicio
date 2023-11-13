import { InjectionToken } from '@angular/core';

interface AppConfig {
    title: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');