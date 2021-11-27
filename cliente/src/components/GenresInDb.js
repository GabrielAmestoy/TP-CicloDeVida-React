import React,{Component} from "react";
import Genre from "./Genre";

class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
        genresList : []
        }
    }

    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        {this.state.genresList.map((genre,index)=>{
                        return <Genre name = {genre.name} key={genre.name + index} />
                        })}
    
                        </div>
                    </div>
                </div>
            </div>
    
        );
    }

    /* Metodo */
    componentDidMount(){
        fetch('http://localhost:3001/api/genres')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(genres =>{
        console.log(genres)
        this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))
        }
}

export default GenresInDb;;