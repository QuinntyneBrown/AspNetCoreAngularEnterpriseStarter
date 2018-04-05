import { OlympicWinnersModule } from './olympic-winners.module';

describe('OlympicWinnersModule', () => {
  let olympicWinnersModule: OlympicWinnersModule;

  beforeEach(() => {
    olympicWinnersModule = new OlympicWinnersModule();
  });

  it('should create an instance', () => {
    expect(olympicWinnersModule).toBeTruthy();
  });
});
