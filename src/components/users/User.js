import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import propTypes from 'prop-types'


export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading: propTypes.bool,
        getUser : propTypes.func.isRequired,

        user: propTypes.object.isRequired,
    }
    render() {

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

        if(loading){
            return <Spinner/>
        }
        else 
        {
            return (
                <div>
                    <h1>{name}</h1>
                    <h2>{bio}</h2>
                </div>
            )
        }

       
    }
}

export default User
