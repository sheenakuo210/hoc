import React, { Component } from 'react';
import Promotion from './Promotion'
import CreditCards from './CreditCards'
import withOpen from './hocs/withOpen'

const PromotionWithOpen = withOpen(Promotion);
const CreditCardsWithOpen = withOpen(CreditCards);

class App extends Component {
    render() {
        return (
            <div>
                <PromotionWithOpen/>
                <CreditCardsWithOpen/>
            </div>
        );
    }
}

export default App;