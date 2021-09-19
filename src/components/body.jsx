import React from "react";
import { jsx, Styled, Divider } from "theme-ui";
import BlockContent from "@sanity/block-content-to-react";
const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const Body = ({ document }) => {
  const validationRichText = document && document._rawChildren;

  const highlight = (props) => {
    console.log(props);
    return (
      <span style={{ backgroundColor: props.mark.color }}>
        {props.children}
      </span>
    );
  };

  const ListItemRenderer = (props) => <li>{props.children}</li>;

  const serializers = {
    types: {
      block(props) {
        // if (props.node.listItem == "bullet") {
        //   return <Styled.li>{props.children}</Styled.li>
        // }
        switch (props.node.style) {
          case "h1":
            return <Styled.h1>{props.children}</Styled.h1>;
          case "h2":
            return <Styled.h2>{props.children}</Styled.h2>;
          case "h3":
            return <Styled.h3>{props.children}</Styled.h3>;
          case "h4":
            return <Styled.h4>{props.children}</Styled.h4>;
          case "h5":
            return <Styled.h5>{props.children}</Styled.h5>;
          case "h6":
            return <Styled.h6>{props.children}</Styled.h6>;
          case "blockquote":
            return <Styled.blockquote>{props.children}</Styled.blockquote>;
          default:
            return <Styled.p>{props.children}</Styled.p>;
        }
      },
    },
    marks: {
      link: ({ children, mark }) => {
        return <Styled.a href={mark.href}>{children}</Styled.a>;
      },
    },
  };
  return validationRichText ? (
    <div>
      <div
        sx={{
          "*": { fontFamily: "body" },
          width: ["width1", "width2", "width3"],
        }}
      >
        {document._rawChildren.map((block) => {
          return <BlockContent blocks={block} serializers={serializers} />;
        })}
        <Divider />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Body;
