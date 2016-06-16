---
title: Tweet impressions
description: "Interaction with the <a href='https://twitter.com/ODILeeds'>@ODILeeds</a> Twitter account. Source: Twitter Analytics"
slug: tweets
order: 80
start: 1
end: 1
data:
  src: /data/socialmedia.csv
  description: twitter stats
summary: number
detail: graph
els:
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
class: c3-bg
---
