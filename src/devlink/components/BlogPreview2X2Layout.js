"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogPreview2X2Layout.module.css";

export function BlogPreview2X2Layout({
  as: _Component = _Builtin.Grid,
  story1ImagePreview1 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e159_b69aa5f2-4ecd-42b7-a7eb-9fc93c35044b.avif",
  story1ImagePreview1AltText = "school reception area",
  story1EyebrowStory1 = "Strategy",
  story1StoryHeadline1Tag = "h4",
  story1StoryHeadline1 = "Boost bookings, beat the rush",
  story1StoryPreviewText1 = "Taylor dishes out quick wins to fill rooms and outsmart the competition.",
  story2ImagePreview2 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e155_58714f23-82a8-43d6-b21e-9fcf94fec037.avif",
  story2ImagePreview2AltText = "image of vibrant dining space (for a mexican restaurant)",
  story2EyebrowStory2 = "Tech",
  story2StoryHeadline2Tag = "h4",
  story2StoryHeadline2 = "Upgrade your stay, the smart way",
  story2StoryPreviewText2 = "Jordan spotlights the coolest hotel tech, from seamless check-ins to AI-powered perks.",
  story3ImagePreview3 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e153_cc13389d-585c-4344-b190-09b255df7680.avif",
  story3ImagePreview3AltText = "image of bedroom furniture setup (for a home goods store)",
  story3EyebrowStory3 = "Marketing",
  story3StoryHeadline3Tag = "h4",
  story3StoryHeadline3 = "Turn heads, win loyal guests",
  story3StoryPreviewText3 = "Skylar shares creative moves to grow your brand and spark traveler buzz.",
  story4ImagePreview4 = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687ee02562bcee492d79e157_0d632fcb-4e26-4524-a23e-76385a85d946.avif",
  story4ImagePreview4AltText = "image of travel tips for a travel tech",
  story4EyebrowStory4 = "Trends",
  story4StoryHeadline4Tag = "h4",
  story4StoryHeadline4 = "What’s trending in travel now",
  story4StoryPreviewText4 = "Riley unpacks the latest shifts—think green stays and perks for digital nomads.",
  mainHeadlineMainHeadlineTag = "h2",
  mainHeadlineMainHeadline = "Travel trends. Fresh takes. Weekly.",
  mainHeadlineMainHeadlinePreviewText = "Get the latest hotel hacks, travel tips, and industry stories. Stay sharp and inspired with our handpicked updates.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "blog-preview_grid_3-col")}>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "w-node-_644d1ae9-328a-f363-3a8f-f9c1f3bc490d-f3bc490c"
        )}
        id={_utils.cx(
          _styles,
          "w-node-fcff2eb5-3900-ab5b-5021-b432d93f31ae-d93f31ab"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading_h1")}
          tag={mainHeadlineMainHeadlineTag}
        >
          {mainHeadlineMainHeadline}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "subheading")}>
          {mainHeadlineMainHeadlinePreviewText}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Grid
        className={_utils.cx(
          _styles,
          "blog-preview_grid_2-col",
          "w-node-_644d1ae9-328a-f363-3a8f-f9c1f3bc4910-f3bc490c"
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
            className={_utils.cx(_styles, "blog-preview_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover-2")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="4953c616-462c-4198-991b-ee8441eb9fc4"
              src={story1ImagePreview1}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_eyebrow")}
            tag="div"
          >
            {story1EyebrowStory1}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "headline_h6")}
            tag={story1StoryHeadline1Tag}
          >
            {story1StoryHeadline1}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {story1StoryPreviewText1}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_644d1ae9-328a-f363-3a8f-f9c1f3bc4917-f3bc490c"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover-2")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="78bb51ba-663c-43bf-b3b7-7880fb98ae05"
              src={story2ImagePreview2}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_eyebrow")}
            tag="div"
          >
            {story2EyebrowStory2}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "headline_h6")}
            tag={story3StoryHeadline3Tag}
          >
            {story2StoryHeadline2}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {story2StoryPreviewText2}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_644d1ae9-328a-f363-3a8f-f9c1f3bc491d-f3bc490c"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover-2")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="bc7a53b8-acbc-4bb4-84cb-cdf67fcf4a5c"
              src={story3ImagePreview3}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_eyebrow")}
            tag="div"
          >
            {story3EyebrowStory3}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "headline_6")}
            tag={story3StoryHeadline3Tag}
          >
            {story3StoryHeadline3}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {story3StoryPreviewText3}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-content-block")}
          id={_utils.cx(
            _styles,
            "w-node-_644d1ae9-328a-f363-3a8f-f9c1f3bc4923-f3bc490c"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image_cover-2")}
              width="387"
              height="258"
              loading="lazy"
              data-aisg-image-id="8c82e878-4b5c-45a6-a0a3-5df03b22ff48"
              src={story4ImagePreview4}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blog-preview_eyebrow")}
            tag="div"
          >
            {story4EyebrowStory4}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "headline_h4-2", "text-align_left-2")}
            tag={story4StoryHeadline4Tag}
          >
            {story4StoryHeadline4}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph_small")}
            tag="div"
          >
            {story4StoryPreviewText4}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Grid>
    </_Component>
  );
}
