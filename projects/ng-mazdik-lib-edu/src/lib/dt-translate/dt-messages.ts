export interface DtMessages {
  empty: string;
  loading: string;
  clearFilters: string;
  create: string;
  delete: string;
  save: string;
  close: string;
  titleCreate: string;
  titleUpdate: string;
  titleDetailView: string;
  search: string;
  selectAll: string;
  clear: string;
  equals: string;
  notEqual: string;
  lessThan: string;
  lessThanOrEqual: string;
  greaterThan: string;
  greaterThanOrEqual: string;
  inRange: string;
  contains: string;
  notContains: string;
  startsWith: string;
  endsWith: string;
  lastYear: string;
  lastMonth: string;
  lastDay: string;
  lastHour: string;
  go: string;
  column: string;
  value: string;
  export: string;
  refresh: string;
  revertChanges: string;
  duplicate: string;
  cancel: string;
  isEmpty: string;
  isNotEmpty: string;
  selectPlaceholder: string;
  ok: string;
  columns: string;
  actions: string;
  print: string;
  pkError: string;
}

export class DtMessagesEn implements DtMessages {
  empty = 'No data to display';
  loading = 'Loading...';
  clearFilters = 'Clear all filters';
  create = 'Create';
  delete = 'Delete';
  save = 'Save';
  close = 'Close';
  titleCreate = 'Create';
  titleUpdate = 'Update';
  titleDetailView = 'Detail view';
  search = 'Search...';
  selectAll = 'Select all';
  clear = 'Clear';
  equals = 'Equals';
  notEqual = 'Does not equal';
  lessThan = 'Is less than';
  lessThanOrEqual = 'Is less than or equal to';
  greaterThan = 'Is greater than';
  greaterThanOrEqual = 'Is greater than or equal to';
  inRange = 'In range';
  contains = 'Contains';
  notContains = 'Does not contain';
  startsWith = 'Begins with';
  endsWith = 'Ends with';
  lastYear = 'Last Year';
  lastMonth = 'Last Month';
  lastDay = 'Last Day';
  lastHour = 'Last Hour';
  go = 'Go';
  column = 'Column';
  value = 'Value';
  export = 'Export';
  refresh = 'Refresh';
  revertChanges = 'Revert Changes';
  duplicate = 'Duplicate';
  cancel = 'Cancel';
  isEmpty = 'Is empty';
  isNotEmpty = 'Is not empty';
  selectPlaceholder = 'Select...';
  ok = 'OK';
  columns = 'Columns';
  actions = 'Actions';
  print = 'Print';
  pkError = 'Element already exists';

  constructor(init?: Partial<DtMessagesEn>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}

export class DtMessagesEs implements DtMessages {
    empty = 'No hay datos';
    loading = 'Cargando...';
    clearFilters = 'Limpiar todos los filtros';
    create = 'Crear';
    delete = 'Eliminar';
    save = 'Guardar';
    close = 'Cerrar';
    titleCreate = 'Crear';
    titleUpdate = 'Modificar';
    titleDetailView = 'Vista detalle';
    search = 'Buscar...';
    selectAll = 'Selecionar todos';
    clear = 'Limpiar';
    equals = 'Igual';
    notEqual = 'Distinto';
    lessThan = 'Menor que';
    lessThanOrEqual = 'Menor o igual a';
    greaterThan = 'Mayor que';
    greaterThanOrEqual = 'Mayor o igual a';
    inRange = 'En rango';
    contains = 'Contiene';
    notContains = 'No contiene';
    startsWith = 'Empieza con';
    endsWith = 'Finaliza con';
    lastYear = 'Último año';
    lastMonth = 'Último mes';
    lastDay = 'Último día';
    lastHour = 'Última hora';
    go = 'Ir';
    column = 'Columna';
    value = 'Valor';
    export = 'Exportar';
    refresh = 'Refrescar';
    revertChanges = 'Deshacer Cambios';
    duplicate = 'Duplicar';
    cancel = 'Cancelar';
    isEmpty = 'Está vacío';
    isNotEmpty = 'No está vacío';
    selectPlaceholder = 'Seleccionar...';
    ok = 'OK';
    columns = 'Columnas';
    actions = 'Acciones';
    print = 'Imprimir';
    pkError = 'Está intentando crear un elemento que ya existe';

    constructor(init?: Partial<DtMessagesEs>) {
      if (init) {
        Object.assign(this, init);
      }
    }
  
 }

