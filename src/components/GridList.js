import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import Stagger from 'react-css-stagger';
import moment from 'moment';
import '../styles/StaggeredAnimation.css';

export const GridList = ({items}) => (
    <Grid
        style={{marginTop:10}}
        doubling
        columns={4}>
        <Stagger transition={'fadeIn'} delay={200}>
        {items.map(item => 
        <div 
            style={{ textAlign:'center', display:'inline-block', margin:2.5 }}
            key={item.trackId}
        >
        <Grid.Column>
            <Card centered>
                <Image size={'medium'} src={item.artworkUrl100}/>
                <Card.Content textAlign={'left'}>
                    <Card.Header>{item.trackName}</Card.Header>
                    <Card.Meta>
                        <span>{item.artistName}</span>
                    </Card.Meta>
                    <Card.Description>
                        Track price: <strong>{item.trackPrice} $</strong>
                    </Card.Description>
                    <Card.Description>
                        Collection name: <strong>{item.collectionName}</strong>
                    </Card.Description>
                    <Card.Description>
                        Collection price: <strong>{item.collectionPrice} $</strong>
                    </Card.Description>
                    <Card.Description>
                        Genre: <strong>{item.primaryGenreName}</strong>
                    </Card.Description>
                    <Card.Description>
                        Release date: <strong>{moment(item.releaseDate).format('DD/MM/YYYY')}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={{
                        pathname:'/player',
                        artistName: item.artistName,
                        trackName: item.trackName,
                        artWork: item.artworkUrl100,
                        mp4: item.previewUrl
                    }}>
                        <Icon name={'time'}/>
                        {moment(item.trackTimeMillis).format('mm:ss').concat(' min')}
                    </Link>
                </Card.Content>
            </Card>
        </Grid.Column>
        </div>
        )
    }
    </Stagger>
    </Grid>
)