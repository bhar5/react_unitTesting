import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from '../Link';

configure({ adapter: new Adapter() });

describe("Link", () => {
    it('should handle the click event', () => {
        window.alert = jest.fn();
        const output = shallow(
            <Link title="mockTitle" url="mockUrl" />
        );
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('clicked');
    });

    it('should handle state changes', () => {
        const output = shallow(
            <Link title="mockTitle" url="mockUrl" />
        );

        expect(output.state().clicked).toEqual(false);
        output.simulate('click');
        expect(output.state().clicked).toEqual(true);
    });
})