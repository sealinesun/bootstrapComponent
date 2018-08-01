import { graphql } from 'gatsby';
import React from 'react';

import Anchor from '../../components/Anchor';
import LinkToSource from '../../components/LinkToSource';
import PropTable from '../../components/PropTable';
import ReactPlayground from '../../components/ReactPlayground';
import ListGroupActive from '../../examples/ListGroupActive';
import ListGroupCustom from '../../examples/ListGroupCustom';
import ListGroupDefault from '../../examples/ListGroupDefault';
import ListGroupHeader from '../../examples/ListGroupHeader';
import ListGroupLinked from '../../examples/ListGroupLinked';
import ListGroupStyle from '../../examples/ListGroupStyle';
import withLayout from '../../withLayout';

export default withLayout(function ListGroupSection({ data }) {
  return (
    <>
      <h2>
        <Anchor id="listgroup">List group</Anchor>
      </h2>

      <p>
        List groups are a flexible and powerful component for displaying not
        only simple lists of elements, but complex ones with custom content.
      </p>

      <h3>
        <Anchor id="listgroup-default">Centers by default</Anchor>
      </h3>
      <ReactPlayground codeText={ListGroupDefault} />

      <h3>
        <Anchor id="listgroup-linked">Linked</Anchor>
      </h3>
      <p>
        Set the <code>href</code> or <code>onClick</code> prop on{' '}
        <code>ListGroupItem</code>, to create a linked or clickable element.
      </p>
      <ReactPlayground codeText={ListGroupLinked} />

      <h3>
        <Anchor id="listgroup-styling-state">Styling by state</Anchor>
      </h3>
      <p>
        Set the <code>active</code> or <code>disabled</code> prop to{' '}
        <code>true</code> to mark or disable the item.
      </p>
      <ReactPlayground codeText={ListGroupActive} />

      <h3>
        <Anchor id="listgroup-styling-color">Styling by color</Anchor>
      </h3>
      <p>
        Set the <code>bsStyle</code> prop to style the item
      </p>
      <ReactPlayground codeText={ListGroupStyle} />

      <h3>
        <Anchor id="listgroup-with-header">With header</Anchor>
      </h3>
      <p>
        Set the <code>header</code> prop to create a structured item, with a
        heading and a body area.
      </p>
      <ReactPlayground codeText={ListGroupHeader} />

      <h3>
        <Anchor id="listgroup-with-custom-children">
          With custom component children
        </Anchor>
      </h3>
      <p>
        When using ListGroupItems directly, ListGroup looks at whether the items
        have href or onClick props to determine which DOM elements to emit.
        However, with custom item components as children to{' '}
        <code>ListGroup</code>, set the
        <code>as</code> prop to specify which element <code>ListGroup</code>{' '}
        should output.
      </p>
      <ReactPlayground codeText={ListGroupCustom} />

      <h3>
        <Anchor id="listgroup-props">Props</Anchor>
      </h3>

      <h4>
        <Anchor id="listgroup-props-group">ListGroup</Anchor>
      </h4>
      <PropTable metadata={data.ListGroup} />

      <h4>
        <Anchor id="listgroup-props-item">ListGroupItem</Anchor>
        <LinkToSource component={data.ListGroupItem.displayName} />
      </h4>
    </>
  );
});

export const query = graphql`
  query ListGroupQuery {
    ListGroup: componentMetadata(displayName: { eq: "ListGroup" }) {
      ...PropTable_metadata
    }
    ListGroupItem: componentMetadata(displayName: { eq: "ListGroupItem" }) {
      ...PropTable_metadata
    }
  }
`;
