"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./BlogPreview.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"687ec494d63c11f556e8733f|190f7d4b-f10f-4b5e-3549-6eb07264e29c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"687ec494d63c11f556e8733f|190f7d4b-f10f-4b5e-3549-6eb07264e29c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1710522714935},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1753157989536}},"actionLists":{"a-6":{"id":"a-6","title":"scroll-into-view","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.15,"yValue":1.15,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":250,"easing":[0.755,0.05,0.855,0.06],"duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.1,"yValue":1.1,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.6,0.04,0.98,0.335],"duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.05,"yValue":1.05,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.755,0.05,0.855,0.06],"duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1,"yValue":1,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.075,0.82,0.165,1],"duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.05,"yValue":1.05,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":500,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.1,"yValue":1.1,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-6-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":750,"target":{"selector":".image_cover","selectorGuids":["c58f234b-e98c-83cf-af44-c10683f61eb3"]},"xValue":1.15,"yValue":1.15,"zValue":null,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710521943578}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogPreview({
  as: _Component = _Builtin.Grid,
  headlineImagesImage1 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e159_b69aa5f2-4ecd-42b7-a7eb-9fc93c35044b.avif",
  headlineImagesImage2 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e155_58714f23-82a8-43d6-b21e-9fcf94fec037.avif",
  headlineImagesImage3 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e153_cc13389d-585c-4344-b190-09b255df7680.avif",
  headlineImagesImage4 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e157_0d632fcb-4e26-4524-a23e-76385a85d946.avif",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "grid_3-col", "tablet-1-col", "gap-small")}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "div-block-259",
          "w-node-_91b5c9d5-e9b3-a843-8a52-77eb29cc5ba5-29cc5ba4"
        )}
        id={_utils.cx(
          _styles,
          "w-node-fcff2eb5-3900-ab5b-5021-b432d93f31ae-d93f31ab"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading_huge")}
          tag="h2"
        >
          {"Travel trends. Fresh takes. Weekly."}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "subheading")}>
          {
            "Get the latest hotel hacks, travel tips, and industry stories. Stay sharp and inspired with our handpicked updates."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Grid
        className={_utils.cx(
          _styles,
          "grid_2-col",
          "gap-medium",
          "w-node-_91b5c9d5-e9b3-a843-8a52-77eb29cc5baa-29cc5ba4"
        )}
        id={_utils.cx(
          _styles,
          "w-node-fcff2eb5-3900-ab5b-5021-b432d93f31b3-d93f31ab"
        )}
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ratio_3x2", "margin-bottom_xsmall")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="4953c616-462c-4198-991b-ee8441eb9fc4"
              alt="school reception area"
              src={headlineImagesImage1}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "label_blue")}
            tag="div"
          >
            {"Strategy"}
          </_Builtin.Block>
          <_Builtin.Heading tag="h4">
            {"Boost bookings, beat the rush"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {
              "Taylor dishes out quick wins to fill rooms and outsmart the competition."
            }
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_91b5c9d5-e9b3-a843-8a52-77eb29cc5bb4-29cc5ba4"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ratio_3x2", "margin-bottom_xsmall")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="78bb51ba-663c-43bf-b3b7-7880fb98ae05"
              alt="image of vibrant dining space (for a mexican restaurant)"
              src={headlineImagesImage2}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "label_blue")}
            tag="div"
          >
            {"Tech"}
          </_Builtin.Block>
          <_Builtin.Heading tag="h4">
            {"Upgrade your stay, the smart way"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {
              "Jordan spotlights the coolest hotel tech, from seamless check-ins to AI-powered perks."
            }
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_91b5c9d5-e9b3-a843-8a52-77eb29cc5bbd-29cc5ba4"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ratio_3x2", "margin-bottom_xsmall")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="bc7a53b8-acbc-4bb4-84cb-cdf67fcf4a5c"
              alt="image of bedroom furniture setup (for a home goods store)"
              src={headlineImagesImage3}
            />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "sg_label")} tag="div">
            {"Marketing"}
          </_Builtin.Block>
          <_Builtin.Heading tag="h4">
            {"Turn heads, win loyal guests"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {
              "Skylar shares creative moves to grow your brand and spark traveler buzz."
            }
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_91b5c9d5-e9b3-a843-8a52-77eb29cc5bc6-29cc5ba4"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ratio_3x2", "margin-bottom_xsmall")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="8c82e878-4b5c-45a6-a0a3-5df03b22ff48"
              alt="image of travel tips for a travel tech"
              src={headlineImagesImage4}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_label", "is-text")}
            tag="div"
          >
            {"Trends"}
          </_Builtin.Block>
          <_Builtin.Heading tag="h4">
            {"What’s trending in travel now"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {
              "Riley unpacks the latest shifts—think green stays and perks for digital nomads."
            }
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Grid>
    </_Component>
  );
}
