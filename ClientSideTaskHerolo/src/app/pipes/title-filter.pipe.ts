import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class TitleFilterPipe implements PipeTransform {

  transform(Title: string, words: boolean) {

    if (Title) {
      Title = this.removeSpecialChars(Title);
      if (words) {
        return Title.replace(/\b\w/g, first => first.toLocaleUpperCase());
      } else {
        return Title.charAt(0).toUpperCase() + Title.slice(1);
      }
    }
    return Title;
  }
  removeSpecialChars(str) {
    return str.replace(/(?![A-Za-z]|\s)./g, '')
      .replace(/\s+/g, ' ')
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  }
}
