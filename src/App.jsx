import React, { Component } from 'react';

class App extends Component {
    state = {
        user: <h3>See what others have to say:</h3>,
        value: '',
        chirps: [],
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    addChirp = (event) => {
        event.preventDefault();
        const newChirp = this.state.chirps.slice()
        newChirp.unshift(this.state.value);
        this.setState({ value: '', chirps: newChirp });
    };

    render() {
        return (
            <>
                <section>
                    <div className="jumbotron jumbotron-fluid header shadow-lg py-4">
                        <div className="container text-center align-middle">
                            <h1>CHIRPER</h1>
                        </div>
                    </div>
                    <br />
                </section>
                <section className="newChirp">
                    <div className="container">
                        <section className="row justify-content-center">
                            <div>
                                <div>
                                    <h3>Say something:</h3>
                                    <form className="form-group">
                                        <textarea

                                            calibri-label="With textarea"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        />
                                        <button onClick={this.addChirp} >Chirp Now !!</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <hr />
                <section className="timeline">
                    <main className="container">
                        <section className="row justify-content-center">
                            <>
                                {this.state.chirps.map(chirp => {
                                    return (
                                        <div >
                                            <div>
                                                <div>
                                                    <h5 >{this.state.user}</h5>
                                                    <p>{chirp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            <div>
                                <div>
                                    <div >
                                        <h5 >{this.state.user}</h5>
                                        <p>Welcome to Chirper!</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h3>{this.state.user}</h3>
                                        <p> i love this app</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
            </>
        )
    }
};

export default App;