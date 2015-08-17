import React from 'react';
import canUseDom from 'dom-helpers/util/inDOM';

import getOwnerDocument from 'dom-helpers/ownerDocument';
import getOwnerWindow from 'dom-helpers/ownerWindow';

import contains from 'dom-helpers/query/contains';
import activeElement from 'dom-helpers/activeElement';

import getOffset from 'dom-helpers/query/offset';
import offsetParent from 'dom-helpers/query/offsetParent';
import getPosition from 'dom-helpers/query/position';

import css from 'dom-helpers/style';

function ownerDocument(componentOrElement) {
  let elem = React.findDOMNode(componentOrElement);
  return getOwnerDocument((elem && elem.ownerDocument) || document);
}

function ownerWindow(componentOrElement) {
  let doc = ownerDocument(componentOrElement);
  return getOwnerWindow(doc);
}

/**
 * Get an element's size
 *
 * @param {HTMLElement} elem
 * @returns {{width: number, height: number}}
 */
function getSize(elem) {
  let rect = {
    width: elem.offsetWidth || 0,
    height: elem.offsetHeight || 0
  };
  if (typeof elem.getBoundingClientRect !== 'undefined') {
    let {width, height} = elem.getBoundingClientRect();
    rect.width = width || rect.width;
    rect.height = height || rect.height;
  }
  return rect;
}

export default {
  canUseDom,
  css,
  contains,
  ownerWindow,
  ownerDocument,
  getOffset,
  getPosition,
  getSize,
  activeElement,
  offsetParent
};
