import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import { createBootstrapComponent } from './ThemeProvider';
import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends React.Component {
  static propTypes = {
    /**
     * @default 'breadcrumb'
     */
    bsPrefix: PropTypes.string,
    /**
     * ARIA label for the nav element
     * https://www.w3.org/TR/wai-aria-practices/#breadcrumb
     */
    label: PropTypes.string,
    /**
     * Additional props passed as-is to the underlying `<ul>` element
     */
    listProps: PropTypes.object,

    componentClass: elementType
  };

  static defaultProps = {
    label: 'breadcrumb',
    listProps: {},
    componentClass: 'nav'
  };

  render() {
    const {
      bsPrefix,
      className,
      listProps,
      children,
      label,
      componentClass: Component,
      ...props
    } = this.props;

    return (
      <Component aria-label={label} className={className} {...props}>
        <ol
          role="navigation"
          {...listProps}
          className={classNames(bsPrefix, listProps.className)}
        >
          {children}
        </ol>
      </Component>
    );
  }
}

const DecoratedBreadcrumb = createBootstrapComponent(Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = BreadcrumbItem;

export default DecoratedBreadcrumb;
