import React from 'react'
import {Row, Card, Col, Collection, CollectionItem, Input, Button, Icon} from 'react-materialize';
import * as MovieService from '../../service/MovieService';
import ProgressBar from 'react-materialize/lib/ProgressBar';
import Preloader from 'react-materialize/lib/Preloader';

class HomeMovie extends React.Component{
    state = {
        movie: {},
        loading: false
    }

    componentDidMount(){
        this.setState({loading:true});
        this.getMovie();
    }
   
    getMovie = () =>{
        const {match:{ params }} = this.props;
        MovieService.getMovieByImdb(params.id)
        .then(response=>{
            this.setState({movie:response.data, loading:false});
        })
        .catch(error =>{
            this.setState({loading:false});
            console.log(error);
        })
    }

    render() {
        const{ loading, movie } = this.state;
        return (
           <Card>
               <Preloader active={loading} />
               <Row>
                   <Col m={12}>
                        <img src={movie.Poster} />      
                   </Col>
               </Row>
                <Row>
                    {movie.Title}
                </Row>
                <Row>
                    {movie.Plot}
                </Row>
                <Row>
                    {movie.Year}
                </Row>
                <Row>
                    {movie.Genre}
                </Row>
                <Row>
                    {movie.Production}
                </Row>
                <Row>
                    {movie.Actor}
                </Row>
                <Row>
                    {movie.Runtime}
                </Row>
                <Row>
                    {movie.Website}
                </Row>
                <Button className="button-espaco btn waves-effect waves-light btn-small grey darken-3 btn-small" >
                    Quero assistir
                </Button>
                <Button className="button-espaco btn waves-effect waves-light btn-small grey darken-3 btn-small" >
                    Assistido
                </Button>
           </Card>
        )
    }
}

export default HomeMovie;