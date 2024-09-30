import {
  CdkColumnDef,
  CdkFooterRowDef,
  CdkHeaderRowDef,
  CdkNoDataRow,
  CdkRowDef,
  CdkTableDataSourceInput,
} from '@angular/cdk/table';
import { QueryList, TrackByFunction } from '@angular/core';

export type Table<T> = {
  dataSource: CdkTableDataSourceInput<T>;
  _getCellAreaRole: () => string | null;
  trackRowBy: TrackByFunction<T>;
  multiTemplateDataRows: boolean;
  tableLayoutFixed: boolean;
  contentColumnDefs: QueryList<CdkColumnDef>;
  contentRowDefs: QueryList<CdkRowDef<T>>;
  contentHeaderRowDefs: QueryList<CdkHeaderRowDef>;
  contentFooterRowDefs: QueryList<CdkFooterRowDef>;
  noDataRow: CdkNoDataRow;
};

// Workflows

// Event
type ContentChanged = 'contentChanged';
type Initialized = 'initialized';
type TableInitialized = 'tableInit';
type TableContentInitialized = 'tableContentInit';
type TableContentChecked = 'tableContentChecked';
type TableDestroyed = 'tableDestroyed';
type ColumnDefinitionIsAdded = {
  columnDef: CdkColumnDef;
};
type ColumnDefinitionIsRemoved = {
  columnDef: CdkColumnDef;
};
type RowDefinitionIsAdded = {
  columnDef: CdkColumnDef;
};
type RowDefinitionIsRemoved = {
  columnDef: CdkColumnDef;
};

// WorkFlows actions
type Init = () => Initialized;
type OnInit = () => TableInitialized;
type AfterContentInit = () => TableContentInitialized;
type AfterContentChecked = () => TableContentChecked;
type OnDestroy = () => TableDestroyed;
type RenderRows = () => ContentChanged;
type AddColumnDef<T> = (
  table: Table<T>,
  columnDef: CdkColumnDef
) => ColumnDefinitionIsAdded;
type removeColumnDef<T> = (
  table: Table<T>,
  columnDef: CdkColumnDef
) => ColumnDefinitionIsRemoved;
type AddRowDef<T> = (
  table: Table<T>,
  rowDef: CdkColumnDef
) => RowDefinitionIsAdded;
type removeRowDef<T> = (
  table: Table<T>,
  rowDef: CdkColumnDef
) => RowDefinitionIsRemoved;
