import React, {PureComponent} from 'react';
import {Input} from 'semantic-ui-react';

export default class Searcher extends PureComponent {

    debounce(fun, delay) {
        let timer;
        let newFun;
        return function () {
            function cb() {
                timer = null;
                newFun = fun.apply(that, args);
            }
            let that = this;
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(cb, delay);
            !timer && (newFun = fun.apply(that, args));
            return newFun;
        }
    }

    debounceFetch = this.debounce(item => {
        this.props.searchItunes(item);
    }, 1000);

    render() {
        return <Input
                  style={{marginLeft:5,marginRight:5}}
                  fluid
                  icon={'search'}
                  onChange={(event) => this.debounceFetch(event.target.value)}
                  placeholder={'Search...'}/>
    }
}
