import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorBold, PhosphorDuotone, PhosphorFill, PhosphorLight, PhosphorRegular, PhosphorThin } from '../public-api';

@NgModule()
export class NgxPhosphorIconsModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-bold', this._domSanitizer.bypassSecurityTrustHtml(PhosphorBold));
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-duotone', this._domSanitizer.bypassSecurityTrustHtml(PhosphorDuotone));
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-light', this._domSanitizer.bypassSecurityTrustHtml(PhosphorLight));
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-regular', this._domSanitizer.bypassSecurityTrustHtml(PhosphorRegular));
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-thin', this._domSanitizer.bypassSecurityTrustHtml(PhosphorThin));
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-fill', this._domSanitizer.bypassSecurityTrustHtml(PhosphorFill));
    }
}
