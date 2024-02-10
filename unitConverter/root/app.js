"use strict";

// elements select
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const btnConverter = document.querySelector("#convert-btn");
const outputElement = document.querySelector("#output");
const messageElement = document.querySelector("#message");

// Function converter units entries
function converterUnit() {
  // capture  entries values
  let fromValue = fromElement.value;
  let toValue = toElement.value;
  let entryValue = Number(inputElement.value);

  if (fromValue === "select" || toValue === "select") {
    messageElement.textContent = "Select a valid unit in both fields.";
  } else if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    showResult(messageElement, inputElement.value, fromValue, outputElement.value, toValue);
    return;
  } else {
    calcConverterUnit(fromValue, toValue, entryValue);
  }
}



// Function to Unit converter calculator
function calcConverterUnit(from, to, entry) {
  let defaultUnitMeters = defaultUnitConverter(from, entry);
  let resultConverter = resultConverterFinal(to, defaultUnitMeters);

  outputResult(resultConverter, outputElement);
  showResult(messageElement, entry, from, resultConverter, to);
}

function outputResult(result, output) {
  output.value = result;
}

function showResult(message, entry, from, result, to) {
  message.textContent = `The convertion from ${entry}${from} to ${to.toUpperCase()} is ${result}${to}`;
}



// Function return a default unit metrics
function defaultUnitConverter(from, entry) {
  let defaultUnitReturn;

  // entries pattern in meters
  if (from === "m") {
    defaultUnitReturn = entry;
  } else if (from === "km") {
    defaultUnitReturn = entry * 1000;
  } else if (from === "cm") {
    defaultUnitReturn = entry / 100;
  } else if (from === "mm") {
    defaultUnitReturn = entry / 1000;
  }

  return defaultUnitReturn;
}


// Function return result converter
function resultConverterFinal(to, defaultUnitMeters) {
  let resultConverterReturn;

  // Default unit to the unit desired by the user
  if (to === "m") {
    resultConverterReturn = defaultUnitMeters;
  } else if (to === "km") {
    resultConverterReturn = defaultUnitMeters / 1000;
  } else if (to === "cm") {
    resultConverterReturn = defaultUnitMeters * 100;
  } else if (to === "mm") {
    resultConverterReturn = defaultUnitMeters * 1000;
  }

  return resultConverterReturn;
}

btnConverter.addEventListener("click", converterUnit);
