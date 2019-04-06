import React from 'react';
import Header from './layouts/header';
import Tab from './layouts/body/tab';
import Layout1 from './layouts/body/layout1';
import { tabs } from '../src/store/data';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Tab tabs={tabs} />
				<Layout1 />
			</div>
		);
	}
}
