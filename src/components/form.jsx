import React, {Component} from 'react'

class Form extends Component {
    constructor (props) {
        super (props)
        this.state = {
            com: '',
            email: '',
            detail: ''
        }
        this.addData = this.props.addData.bind(this)
        this.com = this.com.bind(this)
        this.email = this.email.bind(this)
        this.detail = this.detail.bind(this)
    }
    com (e) {
        this.setState({
            com: e.target.value
        })
    }
    email (e) {
        this.setState({
            email: e.target.value
        })
    }

    detail (e) {
        this.setState({
            detail: e.target.value
        })
    }

    render () {
        return (
        <div>
            <div className="field">
            <p className="control">
            <input className="input" type="text" placeholder="บริษัท"  onChange={this.com} />
            </p>
            </div>
            <div className="field">
                <p className="control">
                  <input className="input" type="email" placeholder="Email" onChange={this.email} />
                </p>
            </div>
            <div className="field">
                <p className="control">
                 <textarea className="textarea" placeholder="รายละเอียด" onChange={this.detail}></textarea>
                </p>
            </div>
            <a className="button is-danger" onClick={this.addData.bind(this, this.state)} >Upload</a>
        </div>
        )
    }
}

export default Form