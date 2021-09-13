import React from "react"
import { jsx, Styled, Divider } from "theme-ui"
import BlockContent from "@sanity/block-content-to-react"
const BlockRenderer = (props) => {
    const {style = 'normal'} = props.node
  
    if (/^h\d/.test(style)) {
      const level = style.replace(/[^\d]/g, '')
      return React.createElement(style, {className: `heading-${level}`}, props.children)
    }
  
    if (style === 'blockquote') {
      return <blockquote>- {props.children}</blockquote>
    }
  
    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }

const Body = ({ document }) => {
  const validationRichText = document && document._rawChildren

  const highlight = (props) => {
    console.log(props)
    return <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
  }

  const ListItemRenderer = props => <li>{props.children}</li>

  return validationRichText ? (
    <div
     
    >
      <div
        sx={{
          "*": { fontFamily: "body" },
          width: ["width1", "width2", "width3"],
        }}
      >
        {document._rawChildren.map(block => {
          return <BlockContent blocks={block} serializers={{types: {block: BlockRenderer}}} 
          />
        })}
        <Divider />
      </div>
    </div>
  ) : (
    ""
  )
}

export default Body