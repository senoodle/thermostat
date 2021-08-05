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


});
