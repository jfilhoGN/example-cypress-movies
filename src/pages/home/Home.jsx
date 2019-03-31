import React from 'react'
import {Row, Card, Col, Collection, CollectionItem, Input, Button, Icon, Preloader} from 'react-materialize';
import * as MovieService from '../../service/MovieService';

class Home extends React.Component{
    state = {
        title:'',
        movies: [],
        loading: false,
    }

    onChange = (event) =>{
        this.setState({title:event.target.value});
    }
    
    searchMovie = () =>{
        this.setState({loading:true});
        const {title} = this.state;
        MovieService.searchMovie(title)
            .then(response =>{
                this.setState({movies:response.data.Search, loading:false});
            })
            .catch(error=>{
                this.setState({loading:false});
                console.log(error);
            })
    }

    viewMovie = imdbID =>{
        this.props.history.push(`/movie/${imdbID}`)
    }

    renderMovie = movie =>{
        return(
            <Collection className="collection">
                <CollectionItem key={movie.imdbID} className="collection-item" >
                    <img className="img-movies" src={movie.Poster} />
                    <p className="title">{movie.Title}</p>
                    <p>{movie.Year}</p>
                    <Button onClick={()=>this.viewMovie(movie.imdbID)} className="button-espaco btn waves-effect waves-light btn-small grey darken-3 btn-small" >
                        + Info
                    </Button>
                </CollectionItem>
            </Collection>
        )
    }

    render() {
        const{ movies, loading } = this.state;
        return (
          <Card>
            <Row>
                <Col m={6} s={3}>
                    <Input label="Nome do Filme" onChange={this.onChange} />
                </Col>
                <Col>
                    <Button onClick={()=>this.searchMovie()} className="button-espaco btn waves-effect waves-light btn-small grey darken-3 btn-small" >
                        <Icon>search</Icon>
                    </Button>
                </Col>
            </Row>
                <Preloader active={loading} />
                <Col m={12} s={3} className="grey darken-3 ">  
                    {movies.map(this.renderMovie)}
                </Col>
          </Card>
        )
    }
}

export default Home;