'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var WizardHeight;

function getFireballSpeed(left) {
  return left ? 5 : 2;
}

function getWizardHeight() {
  return WizardHeight = 1.337 * wizardWidth;
}

function getWizardX(width) {
  return (width - wizardWidth / 2) / 2;
}

function getWizardY(height) {
  return (height - WizardHeight) * 2 / 3;
}
