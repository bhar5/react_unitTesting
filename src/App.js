import React, { Component } from 'react';
import Items from './Items';
import Link from './Link';

class App extends Component {
    render() {
        const items = [
            'Thor',
            'Captain America',
            'Hulk'
        ];
        return (
            <div>
                <Items items={items} />
                <Link title="Google" url="https://www.google.com" />
            </div>
        )
    }
}

export default App;