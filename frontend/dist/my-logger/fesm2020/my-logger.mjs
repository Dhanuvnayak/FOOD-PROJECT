import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLoggerService {
    constructor() { }
}
MyLoggerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLoggerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLoggerComponent {
}
MyLoggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLoggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: MyLoggerComponent, selector: "lib-my-logger", ngImport: i0, template: `
    <p>
      my-logger works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-logger', template: `
    <p>
      my-logger works!
    </p>
  ` }]
        }] });

class MyLoggerModule {
}
MyLoggerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLoggerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerModule, declarations: [MyLoggerComponent], exports: [MyLoggerComponent] });
MyLoggerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyLoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLoggerComponent
                    ],
                    imports: [],
                    exports: [
                        MyLoggerComponent
                    ]
                }]
        }] });

class LoggerService {
    constructor() { }
    log(message) {
        console.log(message);
    }
}
LoggerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LoggerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoggerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LoggerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of my-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoggerService, MyLoggerComponent, MyLoggerModule, MyLoggerService };
//# sourceMappingURL=my-logger.mjs.map
