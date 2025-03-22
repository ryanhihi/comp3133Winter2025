import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    // Mock ElementRef
    elementRefMock = {
      nativeElement: {
        value: '' // You can initialize this with a value for testing
      }
    } as ElementRef;
  });

  it('should create an instance', () => {
    const directive = new InputFormatDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });

  it('should transform value to uppercase on blur', () => {
    const directive = new InputFormatDirective(elementRefMock);
    elementRefMock.nativeElement.value = 'test value';
    directive.onBlur(); // Simulate blur event
    expect(elementRefMock.nativeElement.value).toBe('TEST VALUE');
  });

  it('should transform value to uppercase on enter key', () => {
    const directive = new InputFormatDirective(elementRefMock);
    elementRefMock.nativeElement.value = 'another test';
    directive.onEnter(); // Simulate enter key event
    expect(elementRefMock.nativeElement.value).toBe('ANOTHER TEST');
  });
});
