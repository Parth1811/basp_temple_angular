import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'linebreak' })
export class lbrPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\n/g, '<br />');
    }
}

@Pipe({ name: 'keepHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}