import { isBlank } from './utils';


export interface Validation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
  descError?: string;
  
}

export class Validators {

  static get(validation: Validation): (name: string, value: any) => string[] {
    const result = (name: string, value: any) => Validators.validate(name, value, validation);
    return result;
  }

  static validate(name: string, value: any, validation: Validation): string[] {
    const temp: string[] = [];
    let error: string;
    if (!validation) {
      return temp;
    }
    const length: number = !isBlank(value) ? value.toString().length : 0;

    if (validation.required && isBlank(value)) {
      error =  `${name} es obligatorio.`;
      if(!temp.includes(error)) temp.push(error);
    }
    if (validation.minLength && length < validation.minLength) {
      error= `${name} debe tener al menos ${validation.minLength} caracteres de largo. Tiene ${length}.`;
      if(!temp.includes(error)) temp.push(error);
    }
    if (validation.maxLength && length > validation.maxLength) {
      error = `${name} no puede tener más de ${validation.maxLength} caracteres. Tiene ${length}.`;
      if(!temp.includes(error)) temp.push(error);
    }
    if (validation.pattern && value) {
      const patternResult = Validators.patternValidate(name, value, validation.pattern, validation.descError);
      if (patternResult) {
        if(!temp.includes(patternResult)) temp.push(patternResult);
      }
    }
  
    return temp;
  }

  static patternValidate(name: string, value: any, pattern: string | RegExp, descError?: string): string {
    let regex: RegExp;
    let regexStr: string;
    if (typeof pattern === 'string') {
      regexStr = pattern;
      regex = new RegExp(regexStr);
    } else {
      regexStr = pattern.toString();
      regex = pattern;
    }
    return regex.test(value) ? null : (!descError ? `${name} debe cumplir el patrón: ${regexStr}.` : descError);
  }

  
}
