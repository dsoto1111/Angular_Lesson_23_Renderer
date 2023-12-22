import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appTestRenderer]'
})
export class TestRendererDirective {

    @Input() set appTestRenderer(textInput: string) {
        if (textInput.length > 0) {
            this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
        } else {
            this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
        }
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
        renderer.setStyle(el.nativeElement, 'fontFamily', 'Lucida Handwriting');
        //renderer.setAttribute(el.nativeElement, 'value', 'Hello');
        //renderer.setProperty(el.nativeElement, 'value', 'Next Input');
        renderer.setAttribute(el.nativeElement, 'title', 'Enter Name');
        console.log(el.nativeElement);
    }

}
