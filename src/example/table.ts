import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { TrackByFunction } from '@angular/core';

export type Table<T> = {
  dataSource: CdkTableDataSourceInput<T>;
  _getCellAreaRole: () => string | null;
  trackRowBy: TrackByFunction<T>;
  multiTemplateDataRows: boolean;
  tableLayoutFixed: boolean;
};
