import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorFill } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsFillModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-fill', this._domSanitizer.bypassSecurityTrustHtml(PhosphorFill));
    }
}
