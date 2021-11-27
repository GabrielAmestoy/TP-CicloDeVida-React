import React, { Component } from 'react';
import Metrica from './Metrica.js';


class ContentRowMovies extends Component {
    constructor(){
        super()
        this.state = {
                movies: {
                    color: 'primary',
                    titulo: 'Movies in Data Base',
                    cifra: "",
                    icono: 'fa-film',
                },
                awards : {
                    color: 'success',
                    titulo: 'Total awards',
                    cifra: "",
                    icono: 'fa-award',
                },
                actors : {
                    color:'warning',
                    titulo:'Actors quantity',
                    cifra: "",
                    icono :'fa-user',
                }
        }
    }

    render() {
        return (
            <div className="row">
                        <Metrica
                            color={this.state.movies.color}
                            titulo={this.state.movies.titulo}
                            cifra={this.state.movies.value}
                            icono={this.state.movies.icono}
                        />
                        <Metrica
                            color={this.state.awards.color}
                            titulo={this.state.awards.titulo}
                            cifra={this.state.awards.value}
                            icono={this.state.awards.icono}
                        />
                        <Metrica
                            color={this.state.actors.color}
                            titulo={this.state.actors.titulo}
                            cifra={this.state.actors.value}
                            icono={this.state.actors.icono}
                        />
            </div>
        );
    }
        // sirve porque realiza peticiones por separado (listados de actores, movies, premios ) 
        async apiCall(url,handler){
            try{
                let response = await fetch(url)
                let result = await response.json()
                handler(result)
            }catch(error) {
                console.log(error)
            }
        }

        getTotalMovies = (info) => {
            this.setState({
                movies: {
                    ...this.state.movies,
                    value : info.data
                }
            })
        }
        
        getTotalActors = (info) => {
            this.setState({
                actors: {
                    ...this.state.actors,
                    value : info.data
                }
            })
        }
        
        getTotalAwards = (info) => {
            this.setState({
                awards : {
                    ...this.state.awards,
                    value : info.data
                }
            })
        }
    
        async componentDidMount(){
            this.apiCall('http://localhost:3001/api/movies/total', this.getTotalMovies) // this va porque dentro de una clase y asi hace referencia
            this.apiCall('http://localhost:3001/api/movies/awards', this.getTotalAwards)
            this.apiCall('http://localhost:3001/api/actors/total', this.getTotalActors)

        }

}

export default ContentRowMovies;