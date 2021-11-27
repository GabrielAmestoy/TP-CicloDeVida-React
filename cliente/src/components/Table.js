import React, {Component} from 'react'
import TableRow from './TableRow'

 

class Table extends Component{
    constructor(){
        super();
        this.state = {
            moviesList : []
        }
    }
    render(){
        return (
            <div className="container">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Clasificacion</th>
                            <th scope="col">Premios</th>
                            <th scope="col">Duracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.moviesList.map((item, index) => {
                                return <TableRow
                                    key={index + item.title}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    awards={item.awards}
                                    length={item.length}
                                />
                            })
                    }
                </tbody>
                </table>   
            </div>
    
        )
    }
    // funciona igual que el metodo de Genre 
    async apiCall(url,handler){
        try{
            let response = await fetch(url)
            let result = await response.json()
            handler(result)
        }catch(error) {
            console.log(error)
        }
    }
    getMovies = (info) => {
        this.setState({moviesList: info.data})
    }

    async componentDidMount(){
        this.apiCall('http://localhost:3001/api/movies', this.getMovies) // this va porque dentro de una clase y asi hace referencia
    }
}

export default Table;