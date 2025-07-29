"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./BookACall.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"994c734b-ad38-afb3-6777-73e9995979f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"994c734b-ad38-afb3-6777-73e9995979f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712109507567},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"994c734b-ad38-afb3-6777-73e9995979f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"994c734b-ad38-afb3-6777-73e9995979f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712109507567}},"actionLists":{"a-24":{"id":"a-24","title":"Book a Call / Arrow Movement 2","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-up-short-outline","selectorGuids":["63803ccb-7b41-cb68-d5a9-b2fd356e8fec"]},"xValue":0.0625,"yValue":0.0625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]},{"actionItems":[{"id":"a-24-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-up-short-outline","selectorGuids":["63803ccb-7b41-cb68-d5a9-b2fd356e8fec"]},"xValue":0.3125,"yValue":-0.625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656101469775},"a-25":{"id":"a-25","title":"Book a Call / Arrow Normalize 2","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-up-short-outline","selectorGuids":["63803ccb-7b41-cb68-d5a9-b2fd356e8fec"]},"xValue":-0.3125,"yValue":0.625,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-up-short-outline","selectorGuids":["63803ccb-7b41-cb68-d5a9-b2fd356e8fec"]},"xValue":0.0625,"yValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656101545960}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BookACall({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },

  buttonCtaText = "[ Book a Call ]",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "", "icon-button", "is-light")}
      button={false}
      id="Button-ID"
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-button-flex")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button-label-text",
            "icon-right",
            "text-rebel"
          )}
          tag="div"
        >
          {buttonCtaText}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "arrow-up-short-outline")}
          data-w-id="994c734b-ad38-afb3-6777-73e9995979f6"
          id="arrow-up-short-outline"
          value="%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2225px%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M50.868%2078.016l36.418-26.055c.66-.471%201.049-1.233%201.051-2.043%200-.006%200-.006%200-.006%20-.002-.815-.396-1.575-1.059-2.048L50.86%2021.977c-.767-.546-1.776-.616-2.612-.183%20-.835.426-1.361%201.292-1.361%202.236v12.183l-32.709-.001c-1.39%200-2.515%201.125-2.515%202.516l.001%2022.541c-.001%201.389%201.124%202.515%202.516%202.516h32.706v12.187c0%20.94.53%201.803%201.366%202.237%20.837.432%201.848.358%202.616-.193Z%22%2F%3E%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
