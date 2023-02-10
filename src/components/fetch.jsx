import { Component } from "react";

class cmnt extends Component{
    costructor(props)
    {
        super(props)
        this.state={
            items:[],
            isloaded:false}
        }
        ComponentDidMount(){
            fetch("http://jsonplaceholder.typicode.com/users")
                .then(res=>res.json())
                .then(json=>{this.setState({
                    isLoaded:true,
                    items:json})
                })}
                render(){
                    let {isLoaded,items}=this.state
                    if(!isloaded {return <div>Loading</div>}
                    else {return(
                        <div>
                            <ul>
                                {items.map(item=>(<li key={item.id}>
                                    {item.name}
                                </li>))}
                            </ul>
                        </div>
                    )}
                }

            }

    


export default cmnt