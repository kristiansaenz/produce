import React, { Component } from 'react'
import EditBoothForm from '../components/EditBoothForm'

class ManageBooth extends Component {
  render() {
    return(
        <section className="section is-small">
          <section className="hero">
            <div className="hero-body">
              <div className="columns">
                <div className="form-titles">
                  <h1 className="title">Manage your booth</h1>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-third">
                  <EditBoothForm />
                </div>
              </div>
            </div>
          </section>
        </section>
    )
  }
}

export default ManageBooth;