"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ReadMoreSpinningJack.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713361984359},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713361984423},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713362272679},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf04a3cd-bcd4-4a4d-bd17-1fe6a94398f9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713362272738}},"actionLists":{"a-30":{"id":"a-30","title":"lets-work-button-hover-on 2","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c92b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".work-link_line","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c92b"]},"value":0.3,"unit":""}},{"id":"a-30-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".work-link_icon","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c92a"]},"zValue":40,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1712111368875},"a-31":{"id":"a-31","title":"read-more-button-hover-off","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".read-more_line","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c926"]},"heightValue":5,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-31-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button_readmore","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c923"]},"value":1,"unit":""}},{"id":"a-31-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".read-more_icon","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c925"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1712111368875},"a-32":{"id":"a-32","title":"read-more-button-click-on","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button_readmore","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c923"]},"filters":[{"type":"grayscale","filterId":"bf2f","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1712112605492},"a-33":{"id":"a-33","title":"read-more-button-click-off","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button_readmore","selectorGuids":["d26d827b-1d8a-6fe4-e917-af17aa16c923"]},"filters":[{"type":"grayscale","filterId":"bf2f","value":0,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1712112605492}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ReadMoreSpinningJack({
  as: _Component = _Builtin.Link,
  buttonCtaText = "Read More",

  buttonLink = {
    href: "#",
  },

  buttonId,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "button_readmore")}
      id={_utils.cx(
        _styles,
        "w-node-_86a5d933-1bc2-1ffd-ea30-c766f02e1b58-f02e1b58"
      )}
      button={false}
      spinning-icon="trigger"
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "read-more_text")}
        tag="div"
      >
        {buttonCtaText}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "read-more_icon")}
        spinning-icon="target"
        id="spinning-icon-target"
        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20%0Aid%3D%22asterix_icon%22%0Awidth%3D%2235px%22%20%0Aheight%3D%2235px%22%20%0ApreserveAspectRatio%3D%22xMidYMid%22%20%0Aversion%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20%0Axmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0Axmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%0Axml%3Aspace%3D%22preserve%22%0AviewBox%3D%220%200%20512%20512%22%0A%3E%0A%3Cpath%20%0Afill%3D%22currentColor%22%20%0Ad%3D%22M448%20226l-119.6%200%20116.8-116.8%20-42.4-42.4L256%20213.6%20109.2%2066.8l-42.4%2042.4L183.6%20226%2064%20226l0%2060%20119.6%200L66.8%20402.8l42.4%2042.4L256%20298.4l146.8%20146.8%2042.4-42.4L328.4%20286l119.6%200Z%22%0A%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "read-more_line")}
        tag="div"
        MovingColors="target"
      />
    </_Component>
  );
}
