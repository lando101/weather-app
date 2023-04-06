import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {
  @Input('appTextHighlight') searchTerm: string = '';
  @Input() text: string | undefined = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const text = this.text ?? this.el.nativeElement.innerText;
    if (!this.searchTerm) {
      this.el.nativeElement.innerHTML = text;
      return;
    }

    const searchTermRegex = new RegExp(this.escapeRegExp(this.searchTerm), 'gi');
    const matches = text.matchAll(searchTermRegex);

    let startIndex = 0;
    let boldText = '';
    for (const match of matches) {
      const matchStartIndex = match.index || 0;
      const matchEndIndex = matchStartIndex + match[0].length;
      const beforeText = text.slice(startIndex, matchStartIndex);
      const matchText = text.slice(matchStartIndex, matchEndIndex);
      boldText += `${beforeText}<b>${matchText}</b>`;
      startIndex = matchEndIndex;
    }
    const remainingText = text.slice(startIndex);

    this.el.nativeElement.innerHTML = `${boldText}${remainingText}`;
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
