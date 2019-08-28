import React, { Component } from 'react';
import Block from './Block'
import Bar from './Bar'
import Image from './Image'

class CreditCards extends Component {

    render() {
        const {open, toggle} = this.props;
        return (
            <Block>
                <Bar onClick={toggle}>Credit Cards</Bar>
                {open ? <Image src={require('./assets/creditCard.png')} alt="creditCard"/> : ''}
            </Block>
        );
    }
}

export default CreditCards;