import {
  CdkColumnDef,
  CdkFooterRowDef,
  CdkHeaderRowDef,
  CdkNoDataRow,
  CdkRowDef,
  CdkTableDataSourceInput,
  RowOutlet,
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
type HeaderRowDefinitionIsAdded = 'headerRowDefinitionIsAdded';
type HeaderRowDefinitionIsRemoved = 'headerRowDefinitionIsRemoved';
type FooterRowDefinitionIsAdded = 'footerRowDefinitionIsAdded';
type FooterRowDefinitionIsRemoved = 'footerRowDefinitionIsRemoved';
type NoDataRowIsSet = 'noDataRowIsSet';
type StickyHeaderRowStylesIsUpdated = 'StickyHeaderRowStylesIsUpdated';
type ContentRendered = 'ContentRendered';

type StickyFooterRowStylesIsUpdated = 'StickyFooterRowStylesIsUpdated';
type StickyColumnStylesIsUpdated = 'StickyColumnStylesIsUpdated'


// WorkFlows actions
type Init<T> = (table: Table<T>) => Initialized;
type OnInit<T> = (table: Table<T>) => TableInitialized;
type AfterContentInit<T> = (table: Table<T>) => TableContentInitialized;
type AfterContentChecked<T> = (table: Table<T>) => TableContentChecked;
type OnDestroy<T> = (table: Table<T>) => TableDestroyed;
type RenderRows<T> = (table: Table<T>) => ContentChanged;
type Render<T> = (table: Table<T>) => ContentRendered;
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
type RemoveRowDef<T> = (
  table: Table<T>,
  rowDef: CdkRowDef<T>
) => RowDefinitionIsRemoved;
type AddHeaderRowDef<T> = (
  table: Table<T>,
  headerRowDef: CdkHeaderRowDef
) => HeaderRowDefinitionIsAdded;
type RemoveHeaderRowDef<T> = (
  table: Table<T>,
  headerRowDef: CdkHeaderRowDef
) => HeaderRowDefinitionIsRemoved;
type AddFooterRowDef<T> = (
  table: Table<T>,
  footerRowDef: CdkFooterRowDef
) => FooterRowDefinitionIsAdded;
type RemoveFooterRowDef<T> = (
  table: Table<T>,
  footerRowDef: CdkFooterRowDef
) => FooterRowDefinitionIsRemoved;

type SetNoDataRow<T> = (
  table: Table<T>,
  noDataRow: CdkNoDataRow | null
) => NoDataRowIsSet;

type UpdateStickyHeaderRowStyles<T> = (
  table: Table<T>
) => StickyHeaderRowStylesIsUpdated;
type UpdateStickyFooterRowStyles<T> = (
  table: Table<T>
) => StickyFooterRowStylesIsUpdated;
type UpdateStickyColumnStyles<T> = (
  table: Table<T>
) => StickyColumnStylesIsUpdated;

type GetRenderedRows<T> = (rowOutlet: RowOutlet) => HTMLElement[];
type GetRowDefs<T> = () => CdkRowDef<T>[];