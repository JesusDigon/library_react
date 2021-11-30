import React from "react";

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: '',
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    onChangeImage = (e) => {
        this.setState({ image: e.target.value });
    }

    onChangeRating = (e) => {
        this.setState({ rating: e.target.value });
    }

    render() {
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Título del libro</label>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>
    
                        <p>
                            <label>Nombre de la imagen</label>
                            <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                        </p>
    
                        <p>
                            <label>Calificación</label>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
    
                    </form>
                </div>
                
            </div>
        );
    }
   
}

export default PanelAdd;