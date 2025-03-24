// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfTriangle () {
  // input
  const baselength = parseInt(document.getElementById('base-length').value)
  const heightlength = parseInt(document.getElementById('height-length').value)

  // process
  const areaOfTriangle = (baselength * heightlength) / 2

  // output
  document.getElementById('area').innerHTML = 'Area of triangle is: ' + areaOfTriangle + ' cm²'
}
