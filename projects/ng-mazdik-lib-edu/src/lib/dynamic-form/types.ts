export type GetOptionsFunc = (url: string, parentId: any, currentPage?: number, perPage?: number) => Promise<any>;

export interface KeyElementChangeEventArgs {
  keyElementName: string;
  keyElementValue: any;
  elementName: string;
  elementValue: string;
}
