import React from 'react';
import semver from 'semver';
import packageJSON from '../../package.json';

let parsed = semver.parse(packageJSON.version);
let version = packageJSON.version;

if (parsed.prerelease.length > 0 && parsed.prerelease[0] === 'docs') {
  version = `${parsed.major}.${parsed.minor}.${parsed.patch}`;
}

const PageHeader = React.createClass({
  render() {
    return (
        <footer className='bs-docs-footer' role='contentinfo'>
          <div className='container'>
            <div className='bs-docs-social'>
              <ul className='bs-docs-social-buttons'>
                <li>
                  <iframe className='github-btn'
                    src='http://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=watch&count=true'
                    width={95}
                    height={20}
                    title='Star on GitHub' />
                </li>
                <li>
                  <iframe className='github-btn'
                    src='http://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=fork&count=true'
                    width={92}
                    height={20}
                    title='Fork on GitHub' />
                </li>
                <li>
                  <iframe
                    src="http://platform.twitter.com/widgets/follow_button.html?screen_name=react_bootstrap&show_screen_name=true"
                    width={230}
                    height={20}
                    allowTransparency="true"
                    frameBorder='0'
                    scrolling='no'>
                  </iframe>
                </li>
              </ul>
            </div>
            <p>Code licensed under <a href='https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE' target='_blank'>MIT</a>.</p>
            <ul className='bs-docs-footer-links muted'>
              <li>Currently v{version}</li>
              <li>·</li>
              <li><a href='https://github.com/react-bootstrap/react-bootstrap/'>GitHub</a></li>
              <li>·</li>
              <li><a href='https://github.com/react-bootstrap/react-bootstrap/issues?state=open'>Issues</a></li>
              <li>·</li>
              <li><a href='https://github.com/react-bootstrap/react-bootstrap/releases'>Releases</a></li>
            </ul>
          </div>
        </footer>
      );
  }
});

export default PageHeader;
