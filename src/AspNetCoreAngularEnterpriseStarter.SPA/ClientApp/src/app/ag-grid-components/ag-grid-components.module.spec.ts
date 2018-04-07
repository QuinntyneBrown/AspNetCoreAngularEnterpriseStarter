import { AgGridComponentsModule } from './ag-grid-components.module';

describe('AgGridComponentsModule', () => {
  let agGridComponentsModule: AgGridComponentsModule;

  beforeEach(() => {
    agGridComponentsModule = new AgGridComponentsModule();
  });

  it('should create an instance', () => {
    expect(agGridComponentsModule).toBeTruthy();
  });
});
