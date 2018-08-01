import { graphql } from 'gatsby';
import React from 'react';
import { css } from 'css-literal-loader/styled';

import Anchor from '../../components/Anchor';
import ARIA from '../../components/AriaAbbr';
import LinkToSource from '../../components/LinkToSource';
import PropTable from '../../components/PropTable';
import ReactPlayground from '../../components/ReactPlayground';
import DropdownBasic from '../../examples/Dropdown/Basic';
import DropdownBasicButton from '../../examples/Dropdown/BasicButton';
import DropdownButtonCustom from '../../examples/Dropdown/ButtonCustom';
import DropdownButtonCustomMenu from '../../examples/Dropdown/ButtonCustomMenu';
import DropdownButtonSizes from '../../examples/Dropdown/ButtonSizes';
import DropDirections from '../../examples/Dropdown/DropDirections';
import DropdownItemTags from '../../examples/Dropdown/DropdownItemTags';
import MenuAlignRight from '../../examples/Dropdown/MenuAlignRight';
import MenuDividers from '../../examples/Dropdown/MenuDividers';
import MenuHeaders from '../../examples/Dropdown/MenuHeaders';
import SplitBasic from '../../examples/Dropdown/SplitBasic';
import SplitVariants from '../../examples/Dropdown/SplitVariants';
import DropdownVariants from '../../examples/Dropdown/Variants';
import withLayout from '../../withLayout';

const styles = css`
  .static-menu :global(.dropdown-menu) {
    position: static;
    display: block;
  }
  .custom-menu :global(.super-colors) {
    background: linear-gradient(
      to bottom,
      orange,
      yellow,
      green,
      cyan,
      blue,
      violet
    );
  }
`;

export default withLayout(function DropdownSection({ data }) {
  return (
    <>
      <h2>
        <Anchor id="btn-dropdowns">Dropdowns</Anchor>
      </h2>
      <h3>
        <Anchor id="dropdown-overview">Overview</Anchor>
      </h3>
      <p>
        Dropdowns are toggleable, contextual overlays for displaying lists of
        links and more. Like overlays, Dropdowns are built using a third-party
        library <a href="https://popper.js.org/">Popper.js</a>, which provides
        dynamic positioning and viewport detection.
      </p>

      <h3>
        <Anchor id="dropdown-a11y">Accessibility</Anchor>
      </h3>
      <p>
        The{' '}
        <a href="https://www.w3.org/TR/wai-aria/">
          <abbr title="Web Accessibility Initiative">WAI</abbr> <ARIA />
        </a>{' '}
        standard defines a{' '}
        <a href="https://www.w3.org/TR/wai-aria-1.1/#menu">
          role="menu" widget
        </a>, but it's very specific to a certain kind a menu. <ARIA /> menus,
        must only contain <code>role="menuitem"</code>,{' '}
        <code>role="menuitemcheckbox"</code>, or{' '}
        <code>role="menuitemradio"</code>.
      </p>
      <p>
        On the other hand, Bootstrap's dropdowns are designed to more generic
        and application in a variety of situations. For this reason we don't
        automatically add the menu roles to the markup. We do implement some
        basic keyboard navigation, and if you do provide the "menu" role,
        react-bootstrap will do it's best to ensure the focus management is
        compliant with the <ARIA /> authoring guidelines for menus.
      </p>
      <h3>
        <Anchor id="btn-dropdowns-single">Single button dropdowns</Anchor>
      </h3>
      <p>
        The basic Dropdown is composed of a wrapping <code>Dropdown</code> and
        inner <code>DropdownMenu</code>, and <code>DropdownToggle</code>. By
        default the <code>DropdownToggle</code> will render a{' '}
        <code>Button</code> component and accepts all the same props.
      </p>
      <ReactPlayground codeText={DropdownBasic} />
      <p>
        Since the above is such a common configuration react-bootstrap provide
        the <code>DropdownButton</code> component to help reduce typing. Provide
        a <code>title</code> prop and some <code>DropdownItem</code>s and you're
        ready to go.
      </p>

      <ReactPlayground codeText={DropdownBasicButton} />
      <p>
        DropdownButton will forward Button props to the underlying Toggle
        component
      </p>
      <ReactPlayground codeText={DropdownVariants} />

      <h3>
        <Anchor id="btn-dropdowns-split">Split button dropdowns</Anchor>
      </h3>
      <p>
        Similarly, You create a split dropdown by combining the Dropdown
        components with another Button and a ButtonGroup.
      </p>
      <ReactPlayground codeText={SplitBasic} />

      <p>
        As with DropdownButton, <code>SplitButton</code> is provided as
        convenience component.
      </p>
      <ReactPlayground codeText={SplitVariants} />

      <h3>
        <Anchor id="btn-dropdowns-sizing">Sizing</Anchor>
      </h3>
      <p>Dropdowns work with buttons of all sizes.</p>
      <ReactPlayground codeText={DropdownButtonSizes} />

      <h3>
        <Anchor id="btn-dropdowns-right">Dropdown directions</Anchor>
      </h3>
      <p>
        Trigger dropdown menus above, below, left, or to the right of their
        toggle elements, with the <code>drop</code> prop.
      </p>
      <ReactPlayground codeText={DropDirections} />

      <h2>
        <Anchor id="menu-items">Dropdown items</Anchor>
      </h2>

      <p>
        Historically dropdown menu contents had to be links, but that’s no
        longer the case with v4. Now you can optionally use{' '}
        <code>{'<button>'}</code> elements in your dropdowns instead of just{' '}
        <code>{'<a>'}</code>s.
      </p>
      <ReactPlayground codeText={DropdownItemTags} />

      <h3>
        <Anchor id="menu-alignment">Menu alignment</Anchor>
      </h3>
      <p>
        By default, a dropdown menu is aligned to the left, but you can switch
        it by passing the <code>alignRight</code> prop.
      </p>
      <ReactPlayground codeText={MenuAlignRight} />

      <h3>
        <Anchor id="menu-headers">Menu headers</Anchor>
      </h3>
      <p>Add a header to label sections of actions.</p>
      <ReactPlayground
        codeText={MenuHeaders}
        exampleClassName={styles.staticMenu}
      />

      <h3>
        <Anchor id="menu-dividers">Menu dividers</Anchor>
      </h3>
      <p>Separate groups of related menu items with a divider.</p>
      <ReactPlayground
        codeText={MenuDividers}
        exampleClassName={styles.staticMenu}
      />
      <h3>
        <Anchor id="btn-dropdowns-custom">Dropdown Customization</Anchor>
      </h3>
      <p>
        If the default handling of the dropdown menu and toggle components
        aren't to your liking, you can customize them, by using the more basic{' '}
        <code>Dropdown</code> Component to explicitly specify the Toggle and
        Menu components
      </p>
      <div className="bs-callout bs-callout-info">
        <h4>Additional Import Options</h4>
        <p>
          As a convenience Toggle and Menu components available as static
          properties on the Dropdown component. However, you can also import
          them directly, from the <code>/lib</code> directory like:{' '}
          <code>require("react-bootstrap/lib/DropdownToggle")</code>.
        </p>
      </div>
      <ReactPlayground
        codeText={DropdownButtonCustom}
        exampleClassName={styles.customMenu}
      />

      <h4>Custom Dropdown Components</h4>

      <p>
        For those that want to customize everything, you can forgo the included
        Toggle and Menu components, and create your own. By providing custom
        components to the <code>as</code> prop, you can control how each
        component behaves. Custom toggle and menu components{' '}
        <strong>must</strong> be able to accept refs.
      </p>

      <ReactPlayground codeText={DropdownButtonCustomMenu} />

      <h3>
        <Anchor id="btn-dropdowns-props">Props</Anchor>
      </h3>

      <h4>
        <Anchor id="btn-dropdowns-props-dropdown-button">DropdownButton</Anchor>
        <LinkToSource component={data.DropdownButton.displayName} />
      </h4>
      <PropTable metadata={data.DropdownButton} />

      <h4>
        <Anchor id="btn-dropdowns-props-split">SplitButton</Anchor>
        <LinkToSource component={data.SplitButton.displayName} />
      </h4>
      <PropTable metadata={data.SplitButton} />

      <h4>
        <Anchor id="btn-dropdowns-props-dropdown">Dropdown</Anchor>
        <LinkToSource component={data.Dropdown.displayName} />
      </h4>
      <PropTable metadata={data.Dropdown} />
      <h4>
        <Anchor id="toggle-props">Dropdown Toggle</Anchor>
        <LinkToSource component={data.DropdownToggle.displayName} />
      </h4>
      <PropTable metadata={data.DropdownToggle} />

      <h4>
        <Anchor id="menu-props">Dropdown Menu</Anchor>
        <LinkToSource component={data.DropdownMenu.displayName} />
      </h4>
      <PropTable metadata={data.DropdownMenu} />

      <h4>
        <Anchor id="menu-item-props">Dropdown Item</Anchor>
        <LinkToSource component={data.DropdownItem.displayName} />
      </h4>
      <PropTable metadata={data.DropdownItem} />
    </>
  );
});

export const query = graphql`
  query DropdownQuery {
    DropdownButton: componentMetadata(displayName: { eq: "DropdownButton" }) {
      displayName
      ...PropTable_metadata
    }
    SplitButton: componentMetadata(displayName: { eq: "SplitButton" }) {
      displayName
      ...PropTable_metadata
    }
    Dropdown: componentMetadata(displayName: { eq: "Dropdown" }) {
      displayName
      ...PropTable_metadata
    }
    DropdownToggle: componentMetadata(displayName: { eq: "DropdownToggle" }) {
      displayName
      ...PropTable_metadata
    }
    DropdownMenu: componentMetadata(displayName: { eq: "DropdownMenu" }) {
      displayName
      ...PropTable_metadata
    }
    DropdownItem: componentMetadata(displayName: { eq: "DropdownItem" }) {
      displayName
      ...PropTable_metadata
    }
  }
`;
