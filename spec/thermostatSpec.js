'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('power saving mode: on', () => {
    it('has a max temp of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('power saving mode: off', () => {
    it('has a max temp of 32 degrees', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('levels of energy usage', () => {
    it('is below 18 degrees', () => {
      for (let i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('is between 18 and 25 degrees', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('is high usage', () => {
      thermostat.powerSavingMode = false;
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

    it('should start at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('should increase the temperature with up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('should decrease the temperature with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
    thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('power saving mode can be switched off', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch PSM back on', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);

    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can be reset to default temperature', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });


});
