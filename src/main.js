import React, { Component } from 'react'
import Annotationsubmitter from './annotation-submitter.js'
import Annotationitem from './annotations/Annotationitem.js'

export default class main extends Component {
    render() {
        return (
            <div>
                <Annotationsubmitter />
            </div>
        )
    }
}
