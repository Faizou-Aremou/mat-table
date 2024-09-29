import { CdkColumnDef, CdkFooterRowDef, CdkHeaderRowDef, CdkNoDataRow, CdkRowDef, CdkTableDataSourceInput } from '@angular/cdk/table';
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
type ContentChanged = 'contentChanged';
type RenderRows = () => ContentChanged;
