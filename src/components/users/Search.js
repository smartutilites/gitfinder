import React, { Component } from 'react'

class Search extends Component {
    state = {
        text : ''
    }
    onChange = e => this.setState({[e.target.name] : e.target.value });
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.text);
        this.props.searchUsers(this.state.text);
        // this.setState({
        //     text : ""
        // });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input type="text" name="text" value={this.state.text} placeholder="Search users...." onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

            </div>
        )
    }
}

export default Search
