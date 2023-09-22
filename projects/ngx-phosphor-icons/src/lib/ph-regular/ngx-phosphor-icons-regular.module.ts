import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorRegular } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsRegularModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-regular', this._domSanitizer.bypassSecurityTrustHtml(PhosphorRegular));
    }
}
