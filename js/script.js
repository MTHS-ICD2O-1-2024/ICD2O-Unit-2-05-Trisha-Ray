// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateSalary () {
  // input
  const hoursworked = parseFloat(document.getElementById('hours-worked').value)
  const hourlywage = parseFloat(document.getElementById('hourly-wage').value)

  // process
  const weeklypay = hoursworked * hourlywage * (1 - 0.18)  
  const incometax = hoursworked * hourlywage * 0.18 
  // output
  document.getElementById('weeklypay').innerHTML = 'Your pay will be: $' +  weeklypay.toFixed(2)
  document.getElementById('incometax').innerHTML = 'The government will take: $' + incometax.toFixed(2)
}
