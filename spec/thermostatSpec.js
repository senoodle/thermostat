'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
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

});
