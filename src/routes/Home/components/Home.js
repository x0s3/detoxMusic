import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import Searcher from '../../../components/Searcher';
import { GridList } from '../../../components/GridList';

const options = [ 
    { key:1, value:1, text:'Price' },
    { key:2, value:2, text:'Genre' }, 
    { key:3, value:3, text:'Duration' }, 
    { key:4, value:4, text:'Initial' } 
];

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            musicCopy: [],
            orderBy: 0,
            lastFetch: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.music.length > 0) {
            if(prevState.lastFetch === '') {
                return {
                    musicCopy: Array.from(nextProps.music),
                    lastFetch: nextProps.lastFetch
                }
            } else if(nextProps.lastFetch === prevState.lastFetch) {
                return {
                    musicCopy: Array.from(prevState.musicCopy)
                }
            } else if(nextProps.lastFetch !== prevState.lastFetch) {
                return {
                    musicCopy: Array.from(nextProps.music),
                    lastFetch: nextProps.lastFetch
                }
            }
        }
        return null;
    }

    componentDidMount() {
        if(this.props.music.length === 0)
            this.props.fetchItunes();
    }

    handleChange = (e, { value }) => {
        let musicSorted;
        switch (value) {
            case 1:
                musicSorted = this.state.musicCopy.sort((item1, item2) => {
                    return parseFloat(item1.collectionPrice) - parseFloat(item2.collectionPrice)
                });
                break;
            case 2:
                musicSorted = this.state.musicCopy.sort((item1, item2) => {
                    return item1.primaryGenreName.localeCompare(item2.primaryGenreName)
                });
                break;
            case 3:
                musicSorted = this.state.musicCopy.sort((item1, item2) => {
                    return parseInt(item1.trackTimeMillis, 10) - parseInt(item2.trackTimeMillis, 10)
                });
                break;
            case 4: 
                musicSorted = Array.from(this.props.music);       
                break;
            default:
                break;
        }
        this.setState({ orderBy: value, musicCopy: musicSorted })
    }

    render() {
        const {musicCopy} = this.state;
        return (
            <div style={{ textAlign:'center' }}>
                <Searcher searchItunes={this.props.fetchItunes}/>
                <Dropdown 
                    onChange={this.handleChange} 
                    style={{ marginTop:2.5 }} 
                    placeholder={'Order by'} 
                    search 
                    selection 
                    options={options} />
                    {
                        this.state.musicCopy.length > 0 ? <GridList items={musicCopy}/> : null
                    }
            </div>
        )
    }
}

Home.propTypes = {
    music: PropTypes.array.isRequired,
    fetchItunes: PropTypes.func.isRequired,
    lastFetch: PropTypes.any.isRequired
}

export default Home;