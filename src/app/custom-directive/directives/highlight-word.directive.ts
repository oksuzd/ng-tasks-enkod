import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightWord]'
})
export class HighlightWordDirective implements OnChanges{
  @Input() highlightWord: string = '';
  highlightColor: string = '#fff4b8';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.highlightWord) {
      this.highlightText();
    }
  }

  private highlightText() {
    const text = this.el.nativeElement.textContent;
    const regExp = new RegExp(`(${this.highlightWord})`, 'gi');
    const newText = text.replace(regExp, `<span style="background-color: ${this.highlightColor}">$1</span>`);
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newText);
  }
}
