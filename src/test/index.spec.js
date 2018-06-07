import { mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Root from '../components/Root';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('The app can', async () => {
    it('render', async () => {
        const app = mount(<Root store={store} />);
        await new Promise(r => setTimeout(r, 0));
        app.update();
        app.find('a[id="homelink"]').simulate('click')
        expect(toJson(app.render())).toMatchSnapshot();
    })
})