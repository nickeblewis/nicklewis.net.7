---
title: Linking forms
published: false
slug: linking-forms
date: 2019-10-10T10:55:57.509Z
tags:
  - clearbox
summary: Just notes for clearbox work
---
Hi John I need your help with the following APIs which I hope might already exist or can be created afresh. We are wary of changing existing API at the moment.

The "Form Link Modal" modal needs to do the following things

## Selecting an existing form

The modal features a tree view that shows a breakdown of schemas and their associated forms. We must bear in mind that permissions need to be respected which will filter some items out. In any case the data I need looks something like this. Simply a nested array of objects containing the schema and it's associated forms. Do we have an endpoint that closely matches this at the moment or will it be better to create a new one?

```javascript
[
  {
    id: "1100",
    label: "Dan - Nick",
    children: [
      {
        id: "1101",
        label: "#1. 03 Sep 2019 14:26:39"
      },
      {
        id: "1102",
        label: "#2. 03 Sep 2019 14:36:39"
      },
      {
        id: "1103",
        label: "#3. 03 Sep 2019 14:46:39"
      },
      {
        id: "1104",
        label: "#4. 03 Sep 2019 14:56:39"
      },
      {
        id: "1105",
        label: "#5. 03 Sep 2019 15:16:39"
      },
      {
        id: "1106",
        label: "#6. 03 Sep 2019 15:36:39"
      },
    ]
  },
  {
    id: "1200",
    label: "nick-object-mapper",
    children: [
      {
        id: "1201",
        label: "#1. nick-object-mapper 14:26:39"
      },
      {
        id: "1202",
        label: "#2. nick-object-mapper 14:36:39"
      },
      {
        id: "1203",
        label: "#3. nick-object-mapper 14:46:39"
      },
      {
        id: "1204",
        label: "#4. nick-object-mapper 14:56:39"
      },
      {
        id: "1205",
        label: "#5. nick-object-mapper 15:16:39"
      },
      {
        id: "1206",
        label: "#6. nick-object-mapper 15:36:39"
      },
    ]
  },
  {
    id: "1300",
    label: "NCR_FB1",
    children: [
      {
        id: "1301",
        label: "#1. NCR_FB1 14:26:39"
      },
      {
        id: "1302",
        label: "#2. NCR_FB1 14:36:39"
      },
      {
        id: "1303",
        label: "#3. NCR_FB1 14:46:39"
      },
      {
        id: "1304",
        label: "#4. NCR_FB1 14:56:39"
      },
      {
        id: "1305",
        label: "#5. NCR_FB1 15:16:39"
      },
      {
        id: "1306",
        label: "#6. NCR_FB1 15:36:39"
      },
    ]
  }
]
```

##  Adding a new form

Just below the tree-list forms selector is a dropdown similar to those that exist in Distribution and Publish. It shows all available options with a search box at the top for fuzzy match searches. We need an endpoint that returns all of the schema's you have access to.

```javascript
[
  {"TypeId":1,"Name":"Dan - Nick"},
  {"TypeId":2,"Name":"nick-object-mapper"},
  {"TypeId":3,"Name":"Accident Report"}
],
```