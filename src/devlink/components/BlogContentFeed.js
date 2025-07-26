"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogContentFeed.module.css";

export function BlogContentFeed({
  as: _Component = _Builtin.Section,
  mainStoryMainStoryHeadlineTag = "h3",
  mainStoryMainStoryHeadline = "Spotlight: Must-Read Travel Insights",
  mainStoryMainStorySubHeadline = "Your go-to guide for smarter hotel strategy, industry news, and travel inspiration—all in one place.",
  mainStoryMainStoryParagraph = "Curated by experts. Loved by hoteliers.",
  mainStoryMainStoryHeroImage = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f7e84fa15e6fb44d61264_8b7aeb9e-009f-4224-97d4-b6f1b1e53372.avif",
  mainStoryMainStoryHeroImageAltText = "image of signature dish (for a fine dining restaurant)",
  mainStoryMainStoryId,
  story1Story1Id,
  story1Story1Tag = "h3",
  story1Story1Headline = "Hotel Trends Unpacked",
  story1Story1Image = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f7e84fa15e6fb44d61263_99483885-d2f1-4d4e-9e0a-fad7c64cfb7f.avif",
  story1Story1Paragraph = "Fresh takes on what’s hot in hospitality. Discover the latest buzz, from tech upgrades to guest experience wins.",

  story1Story1Link = {
    href: "#",
  },

  mainStoryStory1AltText = "image of city landscape (for a mobility and transportation)",

  mainStoryMainStoryLink = {
    href: "#",
  },

  story2Story2Id,
  story2Story2Tag = "h3",
  story2Story2Headline = (
    <>
      {"Revenue Hacks "}
      {"&"}
      {" Quick Wins"}
    </>
  ),
  story2Story2Paragraph = "Boost your bottom line with actionable tips and smart strategies for every hotelier.",

  story2Story2Link = {
    href: "#",
  },

  story3Story3AltText = "image of decorated event space (for a bars & pub)",
  story3Story3HeadlineTag = "h3",
  story3Story3Headline = "Tech That Transforms Stays",
  story3Story3Image = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f7e84fa15e6fb44d61262_59d1fcd2-588c-48af-8d6e-b7fc65afc3f2.avif",
  story3Story3Text = "Explore the tools and platforms redefining the guest journey and hotel operations.",
  story4Story4Headline = "Maximize Your Direct Bookings",
  story4Story4Paragraph = "Simple steps to drive more guests to your site and keep commissions low.",
  story4Story4Eyebrow = "Strategy",
  story6Story6Eyebrow = "Marketing",
  story6Story6Headline = "Social Media That Sells Rooms",
  story6Story6Paragraph = "Turn likes into bookings with these creative campaign ideas.",
  story6Story6Tag = "h3",
  story7Story7Eyebrow = "Revenue",
  story7Story7Paragraph = "How to set rates that fill rooms and boost profits.",
  story7Story7Tag = "h3",
  story7Story7Headline = "Contactless Check-In, Happy Guests",
  story8Story8Eyebrow = "Branding",
  story8Story8Tag = "h3",
  story8Story8Headline = "Crafting a Standout Hotel Identity",
  story8Story8Paragraph = "Tips to make your property unforgettable in a crowded market.",
  seeAllPostsLink = "See All Blog Posts",

  story2Story3Link = {
    href: "#",
  },

  mainStoryRuntimeProps = {},
  mainStorySlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-88")}
      tag="section"
      data-copilot="true"
      data-record-id="269eff00-c919-a040-2900-aa9a6038cafd"
      {...mainStoryRuntimeProps}
    >
      {mainStorySlot ?? (
        <_Builtin.Block
          className={_utils.cx(_styles, "container-48")}
          tag="div"
        >
          <_Builtin.Grid
            className={_utils.cx(
              _styles,
              "grid_4-col-4",
              "tablet-1-col-1",
              "gap-medium"
            )}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "flex_vertical-4",
                "gap-small",
                "w-node-_1032a687-f75e-dfc1-1042-c1020a3ec88a-0a3ec887"
              )}
              id={_utils.cx(
                _styles,
                "w-node-a4e3db70-5dba-887c-6c2a-254b93cfafdd-93cfafda"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                id={story1Story1Id}
                block="inline"
                options={story1Story1Link}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "ratio_3x2-4",
                    "margin-bottom_xsmall",
                    "w-node-_1032a687-f75e-dfc1-1042-c1020a3ec88c-0a3ec887"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-a4e3db70-5dba-887c-6c2a-254b93cfafe0-93cfafda"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image_cover-4")}
                    width="1216"
                    height="832"
                    loading="lazy"
                    data-aisg-image-id="5ee84d3e-5c9e-4fed-a54a-4e930e7e9b8c"
                    src={story1Story1Image}
                  />
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story1Story1Tag}
                >
                  {story1Story1Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story1Story1Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={story2Story2Link}
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story2Story2Tag}
                >
                  {story2Story2Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story2Story2Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                id={story2Story2Id}
                block="inline"
                options={story2Story3Link}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "ratio_3x2-4",
                    "margin-bottom_xsmall",
                    "w-node-_1032a687-f75e-dfc1-1042-c1020a3ec89c-0a3ec887"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-a4e3db70-5dba-887c-6c2a-254b93cfafef-93cfafda"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image_cover-4")}
                    width="1216"
                    height="832"
                    loading="lazy"
                    data-aisg-image-id="54d68fa3-727d-4e74-9157-7b8eb0024094"
                    src={story3Story3Image}
                  />
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story3Story3HeadlineTag}
                >
                  {story3Story3Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story3Story3Text}
                </_Builtin.Paragraph>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "card-link-5", "flex_vertical-4")}
              id={_utils.cx(
                _styles,
                "w-node-_1032a687-f75e-dfc1-1042-c1020a3ec8a2-0a3ec887"
              )}
              button={false}
              block="inline"
              options={mainStoryMainStoryLink}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "ratio_3x2-4")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image_cover-4")}
                  width="1216"
                  height="832"
                  loading="lazy"
                  data-aisg-image-id="d494ba10-f4f6-4729-8fdd-ce29cfef7b24"
                  src={mainStoryMainStoryHeroImage}
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "card_body-4",
                  "text-align_center"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading_h2-4")}
                  tag={mainStoryMainStoryHeadlineTag}
                >
                  {mainStoryMainStoryHeadline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "subheading-4")}
                >
                  {mainStoryMainStorySubHeadline}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {mainStoryMainStoryParagraph}
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "flex_vertical-4",
                "gap-small",
                "w-node-_1032a687-f75e-dfc1-1042-c1020a3ec8ac-0a3ec887"
              )}
              id={_utils.cx(
                _styles,
                "w-node-a4e3db70-5dba-887c-6c2a-254b93cfb001-93cfafda"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading_h6-3")}
                  tag="div"
                >
                  {story4Story4Eyebrow}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag="h3"
                >
                  {story4Story4Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story4Story4Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading_h6-3")}
                  tag="div"
                >
                  {story6Story6Eyebrow}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story6Story6Tag}
                >
                  {story6Story6Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story6Story6Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading_h6-3")}
                  tag="div"
                >
                  {story7Story7Eyebrow}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story7Story7Tag}
                >
                  {"Dynamic Pricing Demystified"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story7Story7Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading_h6-3")}
                  tag="div"
                >
                  {"Tech"}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag="h3"
                >
                  {story7Story7Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {
                    "Why digital check-in is a win-win for hotels and travelers."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-4")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-content-block-4")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading_h6-3")}
                  tag="div"
                >
                  {story8Story8Eyebrow}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading_h4-3",
                    "margin-bottom_xxsmall"
                  )}
                  tag={story8Story8Tag}
                >
                  {story8Story8Headline}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph_small-6",
                    "margin-bottom_none"
                  )}
                >
                  {story8Story8Paragraph}
                </_Builtin.Paragraph>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "text-link-4")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {seeAllPostsLink}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      )}
    </_Component>
  );
}
