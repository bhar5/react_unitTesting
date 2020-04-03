import React from 'react';
import renderer from 'react-test-renderer';

import Items from '../Items';

describe("Items", () => {
  it("Default Unit Testing", () => {
    let tree = renderer.create(<Items />);
    expect(tree.toJSON()).toMatchSnapshot();
  })

  it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Items />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there is one item', () => {
    const items = ['one'];
    const tree = renderer.create(<Items items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there are multiple items', () => {
    const items = ['one', 'two', 'three'];
    const tree = renderer.create(<Items items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
