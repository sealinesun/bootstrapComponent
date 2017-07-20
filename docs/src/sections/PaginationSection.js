import React from 'react';

import Anchor from '../Anchor';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function PaginationSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="pagination">Pagination</Anchor> <small>Pagination</small>
      </h2>
      <p>
        A set of <em>presentational</em> components for building pagination UI.
      </p>

      <ReactPlayground codeText={Samples.PaginationBasic} />

      <h4><Anchor id="pagination-more">More options</Anchor></h4>
      <p>
        For building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as
        well as an <code>Ellipsis</code> item for indicating previous or continuing results.
      </p>
      <ReactPlayground codeText={Samples.PaginationAdvanced} />

      <div className="bs-callout bs-callout-info">
        <h4>Migration Details</h4>
        <p>
          In previous versions of ReactBootstrap, the Pagination components contained "business" logic related to pagination. Considering logic of this
          sort is almost always application and use-case specific we've removed it in favor of purely presentational components (just like vanilla bootstrap).
        </p>
        <p>
          In order to help migration we've provided a drop-in replacement for the
          old component at: <a href="https://www.npmjs.com/package/@react-bootstrap/pagination">@react-bootstrap/pagination</a>
        </p>
      </div>
    </div>
  );
}
