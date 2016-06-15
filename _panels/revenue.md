---
title: Revenue
description: ODI Leeds is a non-profit.
slug: revenue
order: 40
start: 1
end: 1
data:
  src: data/revenue.csv
  details: revenue table
summary: number
detail: graph
units: "&pound;"
els:
  .number:
    col: 2
    op: sum
    animate: true
  .graph:
    col: 2
    row: all
    type: graph
  .lastupdated:
    col: 1
    row: last
class: c1-bg
---
