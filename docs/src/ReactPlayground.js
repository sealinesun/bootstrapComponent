import * as modReact from 'react';
import * as modClassNames from 'classnames';
import * as modAccordion from '../../src/Accordion';
import * as modAlert from '../../src/Alert';
import * as modBadge from '../../src/Badge';
import * as modmodButton from '../../src/Button';
import * as modButtonGroup from '../../src/ButtonGroup';
import * as modmodButtonToolbar from '../../src/ButtonToolbar';
import * as modCollapsibleNav from '../../src/CollapsibleNav';
import * as modCollapsibleMixin from '../../src/CollapsibleMixin';
import * as modCarousel from '../../src/Carousel';
import * as modCarouselItem from '../../src/CarouselItem';
import * as modCol from '../../src/Col';
import * as modDropdownButton from '../../src/DropdownButton';
import * as modGlyphicon from '../../src/Glyphicon';
import * as modGrid from '../../src/Grid';
import * as modInput from '../../src/Input';
import * as modJumbotron from '../../src/Jumbotron';
import * as modLabel from '../../src/Label';
import * as modListGroup from '../../src/ListGroup';
import * as modListGroupItem from '../../src/ListGroupItem';
import * as modNav from '../../src/Nav';
import * as modNavbar from '../../src/Navbar';
import * as modNavItem from '../../src/NavItem';
import * as modMenuItem from '../../src/MenuItem';
import * as modModal from '../../src/Modal';
import * as modModalTrigger from '../../src/ModalTrigger';
import * as modOverlayTrigger from '../../src/OverlayTrigger';
import * as modOverlayMixin from '../../src/OverlayMixin';
import * as modPageHeader from '../../src/PageHeader';
import * as modPageItem from '../../src/PageItem';
import * as modPager from '../../src/Pager';
import * as modPanel from '../../src/Panel';
import * as modPanelGroup from '../../src/PanelGroup';
import * as modPopover from '../../src/Popover';
import * as modProgressBar from '../../src/ProgressBar';
import * as modRow from '../../src/Row';
import * as modSplitButton from '../../src/SplitButton';
import * as modTabbedArea from '../../src/TabbedArea';
import * as modTable from '../../src/Table';
import * as modTabPane from '../../src/TabPane';
import * as modTooltip from '../../src/Tooltip';
import * as modWell from '../../src/Well';

import babel from 'babel-core/browser';

const classNames = modClassNames.default;
/* eslint-disable */
const React = modReact.default;
const Accordion = modAccordion.default;
const Alert = modAlert.default;
const Badge = modBadge.default;
const Button = modmodButton.default;
const ButtonGroup = modButtonGroup.default;
const ButtonToolbar = modmodButtonToolbar.default;
const CollapsibleNav = modCollapsibleNav.default;
const CollapsibleMixin = modCollapsibleMixin.default;
const Carousel = modCarousel.default;
const CarouselItem = modCarouselItem.default;
const Col = modCol.default;
const DropdownButton = modDropdownButton.default;
const Glyphicon = modGlyphicon.default;
const Grid = modGrid.default;
const Input = modInput.default;
const Jumbotron = modJumbotron.default;
const Label = modLabel.default;
const ListGroup = modListGroup.default;
const ListGroupItem = modListGroupItem.default;
const Nav = modNav.default;
const Navbar = modNavbar.default;
const NavItem = modNavItem.default;
const MenuItem = modMenuItem.default;
const Modal = modModal.default;
const ModalTrigger = modModalTrigger.default;
const OverlayTrigger = modOverlayTrigger.default;
const OverlayMixin = modOverlayMixin.default;
const PageHeader = modPageHeader.default;
const PageItem = modPageItem.default;
const Pager = modPager.default;
const Panel = modPanel.default;
const PanelGroup = modPanelGroup.default;
const Popover = modPopover.default;
const ProgressBar = modProgressBar.default;
const Row = modRow.default;
const SplitButton = modSplitButton.default;
const TabbedArea = modTabbedArea.default;
const Table = modTable.default;
const TabPane = modTabPane.default;
const Tooltip = modTooltip.default;
const Well = modWell.default;
/* eslint-enable */

const IS_MOBILE = typeof navigator !== 'undefined' && (
  navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );

const CodeMirrorEditor = React.createClass({
  componentDidMount() {
    if (IS_MOBILE || CodeMirror === undefined) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
      mode: 'javascript',
      lineNumbers: false,
      lineWrapping: false,
      matchBrackets: true,
      tabSize: 2,
      theme: 'solarized light',
      readOnly: this.props.readOnly
    });
    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  },

  handleChange() {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  },

  render() {
    // wrap in a div to fully contain CodeMirror
    let editor;

    if (IS_MOBILE) {
      let preStyles = {overflow: 'scroll'};
      editor = <pre style={preStyles}>{this.props.codeText}</pre>;
    } else {
      editor = <textarea ref='editor' defaultValue={this.props.codeText} />;
    }

    return (
      <div style={this.props.style} className={this.props.className}>
        {editor}
      </div>
      );
  }
});

const selfCleaningTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  setTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

const ReactPlayground = React.createClass({
  mixins: [selfCleaningTimeout],

  MODES: {JSX: 'JSX', JS: 'JS', NONE: null},

  propTypes: {
    codeText: React.PropTypes.string.isRequired,
    transformer: React.PropTypes.func,
    renderCode: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      transformer(code) {
        return babel.transform(code).code;
      }
    };
  },

  getInitialState() {
    return {
      mode: this.MODES.NONE,
      code: this.props.codeText
    };
  },

  handleCodeChange(value) {
    this.setState({code: value});
    this.executeCode();
  },

  handleCodeModeSwitch(mode) {
    this.setState({mode});
  },

  handleCodeModeToggle(e) {
    let mode;

    e.preventDefault();

    switch (this.state.mode) {
      case this.MODES.NONE:
        mode = this.MODES.JSX;
        break;
      case this.MODES.JSX:
      default:
        mode = this.MODES.NONE;
    }

    this.setState({mode});
  },

  compileCode() {
    return this.props.transformer(this.state.code);
  },

  render() {
    let classes = {
      'bs-example': true
    };
    let toggleClasses = {
      'code-toggle': true
    };
    let editor;

    if (this.props.exampleClassName){
      classes[this.props.exampleClassName] = true;
    }

    if (this.state.mode !== this.MODES.NONE) {
       editor = (
           <CodeMirrorEditor
             key='jsx'
             onChange={this.handleCodeChange}
             className='highlight'
             codeText={this.state.code}/>
        );
       toggleClasses.open = true;
    }
    return (
      <div className='playground'>
        <div className={classNames(classes)}>
          <div ref='mount' />
        </div>
        {editor}
        <a className={classNames(toggleClasses)} onClick={this.handleCodeModeToggle} href='#'>{this.state.mode === this.MODES.NONE ? 'show code' : 'hide code'}</a>
      </div>
      );
  },

  componentDidMount() {
    this.executeCode();
  },

  componentWillUpdate(nextProps, nextState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.state.code !== nextState.code) {
      this.executeCode();
    }
  },

  componentWillUnmount() {
    let mountNode = this.refs.mount.getDOMNode();
    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }
  },

  executeCode() {
    let mountNode = this.refs.mount.getDOMNode();

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }

    let compiledCode = this.compileCode();
    try {
      if (this.props.renderCode) {
        React.render(
          <CodeMirrorEditor codeText={compiledCode} readOnly={true} />,
          mountNode
        );
      } else {
        /* eslint-disable */
        eval(compiledCode);
        /* eslint-enable */
      }
    } catch (err) {
      console.log(err, compiledCode);
      this.setTimeout(() => {
        React.render(
          <Alert bsStyle='danger'>{err.toString()}</Alert>,
          mountNode
        );
      }, 500);
    }
  }
});

export default ReactPlayground;
