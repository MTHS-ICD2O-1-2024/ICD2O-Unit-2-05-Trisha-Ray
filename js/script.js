// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfTriangle () {
  // input
  const baselength = parseFloat(document.getElementById('hours-worked').value)
  const heightlength = parseFloat(document.getElementById('hourly-wage').value)

  // process
  const areaOfTriangle = (baselength * heightlength) / 2

  // output
  document.getElementById('area').innerHTML = 'Area of triangle is: ' + areaOfTriangle + ' cm²'
}
