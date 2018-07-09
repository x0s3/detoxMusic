import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import Audio from 'react-audioplayer';
import { Icon } from 'semantic-ui-react';
import { SharedButtons } from '../../../components/ShareButtons';

class AudioPlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
        }
    }

    componentDidMount() {
        if(typeof this.props.location.trackName !== 'undefined') {
            let finalArraySong = [];
            finalArraySong.push({
                name: this.props.location.trackName,
                src: this.props.location.mp4,
                img: this.props.location.artWork,
            });
            const newSongsArray = this.props.music.map(song => {
                return {name: song.trackName,
                src: song.previewUrl,
                img: song.artworkUrl100,   }
            });
            finalArraySong = [...finalArraySong, ...newSongsArray];
            this.setState({ songs: [ ...finalArraySong ] });
        }
    }

    deviceType = () => {
        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) 
            return true
        else 
            return false
    }

    componentWillUnmount() {
        if(this.state.songs.length > 0)
            ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
    }

    _renderPlayer = () => (
        <div>
            <div 
                onClick={() => {
                    this.props.history.goBack()
                }}
                style={{ display:'flex', flex:1, flexDirection:'row' }}>
                <Icon name={'arrow left'}/>
                <p style={{fontWeight:'bold'}}>Go back</p>
            </div>
            <Audio
                width={this.deviceType() ? 200 : 600}
                height={400}
                autoPlay={true}
                fullPlayer={true}
                playlist={this.state.songs}
                ref={audioComponent => {this.audioComponent = audioComponent; }}
            />
            <div style={{ marginTop:10 }}>
                <SharedButtons
                    artist={this.props.location.artistName}
                    song={this.props.location.trackName}/>
            </div>
        </div>
    )

    _renderError = () => (
        <React.Fragment>
            <Link style={{
                textAlign: 'center'
            }} to={'/'}>
                Seems like there are no available music yet, go home and search for your
                favourite music!!
                <i 
                style={{
                    display: 'block',
                    fontSize: 60,
                    marginTop: 5
                }}
                className={'fas fa-sad-tear'} />
            </Link>
        </React.Fragment>
    )

    render() {
        return (
            <React.Fragment>
                {
                    this.state.songs.length > 0 ? 
                    this._renderPlayer() : this._renderError()
                }
            </React.Fragment>
        )
    }
}

export default withRouter(AudioPlayer);
