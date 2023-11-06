import { Directive, ElementRef, Input } from '@angular/core';
/** ------------------------------------------------------------------------------- */

/**
 * provide search text highlight
 * @author Sankar Sahu
 */
@Directive({
  selector: '[ngTextWordHighlight]'
})
export class HighlightDirective {
  /** provide content */
  private _content: string = '';
  /** provide search Term */
  private _searchTerm: string = '';
  /** provide separated text */
  private separatedText: any = [];
  /** provide separated search text */
  private separatedSearchedText: any = [];
  /** provide final text */
  private final: string = '';
  /** provide search pattern */
  public searchPattern: any;
  /** provide match pattern */
  public matchPattern: any;
  /** provide split flag */
  public splitFlag: string = '';
  /** provide match flag */
  public matchFlag: string = '';
  /** provide span start */
  public spanStart: string = '<span class="ngx-text-highlight">';
  /** provide span end */
  public spanEnd: string = '</span>';
  /** provide to case sensitive */
  @Input() public caseSensitive: boolean;
  /** provide content */
  @Input('content') public set content(content: string) {
    this._content = content;
  }
  public get content(): string { return this._content; };
  /** provide search term */
  @Input('searchTerm') public set searchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
    this.highlight();
  }
  public get searchTerm(): string { return this._searchTerm; };

  constructor(private el: ElementRef) {
    this.caseSensitive = false;
  }

  /**
   * provide highlight text
   * @author Sankar Sahu
   */
  public highlight(): void {

    this.final = '';
    if (!this.caseSensitive) {
      this.splitFlag = 'i';
      this.matchFlag = 'gi';
    } else {
      this.splitFlag = '';
      this.matchFlag = 'g';
    }
    this._searchTerm = (this._searchTerm) ? this.escapeRegExp(this._searchTerm) : this._searchTerm;
    this.searchPattern = new RegExp(this._searchTerm, this.splitFlag);
    this.matchPattern = new RegExp(this._searchTerm, this.matchFlag);
    if (this._searchTerm !== undefined && this._searchTerm != null && this._searchTerm.length > 0) {

      this.separatedText = this._content.split(this.searchPattern);
      this.separatedSearchedText = this._content.match(this.matchPattern);

      if (this.separatedSearchedText != null && this.separatedSearchedText.length > 0) {
        for (let i: number = 0; i < this.separatedText.length; i++) {
          if (i <= this.separatedSearchedText.length - 1) {
            this.final += this.separatedText[i] + this.spanStart + this.separatedSearchedText[i] + this.spanEnd;
          } else {
            this.final += this.separatedText[i];
          }
        }
      }
      if (this.final.length > 0) {
        this.el.nativeElement.innerHTML = this.final;
      } else {
        this.el.nativeElement.innerText = this._content;
      }
    } else {
      this.el.nativeElement.innerText = this._content;
    }
  }

  /**
   * provide replace spacial character on string
   * @author Sankar Sahu
   * @param searchTerm :provide search string
   */
  private escapeRegExp(searchTerm: string): string {
    return searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
}
