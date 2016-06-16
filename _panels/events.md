---
title: Events
description: Number of events hosted at ODI Leeds
slug: events
order: 10
start: 1
end: 1
data:
  src: /data/events_monthly.csv
  description: events data
summary: number
detail: graph
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
class: c12-bg
---
