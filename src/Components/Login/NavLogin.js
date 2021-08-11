import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class NavLogin extends Component {
    render() {
        return (
            <Wrap1><div className="justify-content-center">

                <Link className="logo">
                    <img src="\Assets\logo\Popolr.png" alt="Popolr Logo" />
                </Link>
            </div></Wrap1>
        )
    }
}
const Wrap1 = styled.div`
margin-top:20px;
margin-right: 5em;
margin-bottom:-10px;
height: 80px;
img{
display:block;
    width:15%;
    margin: 0px auto;
}
`
