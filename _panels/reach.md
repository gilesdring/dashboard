---
title: Event reach
description: Number of people at ODI Leeds events
slug: reach
order: 20
start: 1
end: 1
data:
  src: data/events_monthly.csv
  description: events data by month
summary: number
detail: graph
else:
  .number:
    col: 3
    op: sum
    animate: true
  .graph:
    col: 3
    row: all
    type: graph
  .lastupdated:
    col: 1
    row: last
class: c5-bg
---
