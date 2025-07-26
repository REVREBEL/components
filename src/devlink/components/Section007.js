"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section007.module.css";

export function Section007({
  as: _Component = _Builtin.Block,
  sectionId = "section-5",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "fancy-vertical-section-navigation-with-active-styles--section--example"
      )}
      tag="div"
      id={sectionId}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "fancy-vertical-section-navigation-with-active-styles--padding-global"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "fancy-vertical-section-navigation-with-active-styles--container-w3"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--p-sm-end"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--title2"
              )}
              tag="h2"
            >
              {"Tutorial"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.YouTubeVideo
            value='<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiJzYIk34qPM&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiJzYIk34qPM&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>'
            videoId="kFbVlg9emRg"
            aspectRatio={0.5617021276595745}
            title="Fancy Sidebar Navigation für One-Pager Websites bauen"
            startAt={0}
            showAllRelatedVideos={false}
            controls={true}
            autoplay={false}
            muted={false}
            privacyMode={true}
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--p-xl-end"
            )}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "fancy-vertical-section-navigation-with-active-styles--footer"
        )}
        tag="div"
      >
        <_Builtin.HtmlEmbed value="%3Ciframe%20src%3D%22https%3A%2F%2Ftutorials-footer.webflow.io%2F%22%20width%3D%22100%25%22%20height%3D%221100px%22%20scrolling%3D%22no%22%20frameborder%3D%220%22%3E%3C%2Fiframe%3E" />
      </_Builtin.Block>
    </_Component>
  );
}
