declare module 'mdurl' {
  export function parse(url: string, slashesDenoteHost?: boolean): any;
  export function format(urlObject: any): string;
  export function encode(str: string): string;
  export function decode(str: string): string;
}