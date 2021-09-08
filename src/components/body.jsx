import React from "react"
import { jsx, Styled, Divider } from "theme-ui"
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
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
          return <BlockContent blocks={block} serializers={{listItem: ListItemRenderer}}
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