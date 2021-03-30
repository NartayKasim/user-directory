import React, { Component } from 'react'
import './display.css'

class Display extends Component {
    render() {

        // PROPS DESTRUCTURE: 
        // user = person object
        // mode = view/edit/new
        // length = length of data array
        const { user, mode, length } = this.props;

    // [BELOW] CALL-BACK FORMATTING FOR NULL, ARRAYS, OBJECTS, AND NUMBERS [BELOW]
        const specialFormat = (data, idx) => {
            if (typeof data[1] === "object") {
        // NULL VALUE FORMATTING:
                if (data[1] === null) {
                    return (
                        <article className="row" key={ idx }>
                            <h3>{ data[0] }:</h3>
                            <p className={ mode }></p>
                        </article>
                    )
                }
        // ARRAY VALUE FORMATTING:
                if (Array.isArray(data[1])) {
                    return (
                        <article className="column" key={ idx }>
                            <h3>{ data[0] }:</h3>
                            <ol className="list">{ data[1].map((item, idx) => <li className={ mode }key={ idx }>{ item }</li>) }</ol>
                        </article>
                    )
                }
        // OBJECT VALUE FORMATTING:
                else {
                // SPECIAL FORMATTING FOR USER NAME (HIDDEN KEY):
                    const returnString = Object.values(data[1]).map(word => word + ' ')
                    if (data[0] === "Name") {
                        return (
                            <article className="row" id="container-name" key={ idx }>
                                <h3 className="hidden">{ data[0] }:</h3>
                                <h1 className={ mode } id={ data[0] }>{ returnString }</h1>
                            </article>
                        )
                    }
                    return (
                        <article className="row" key={ idx }>
                            <h3>{ data[0] }:</h3>
                            <p className={ mode } id={ data[0] }>{ returnString }</p>
                        </article>
                    )
                }
            }
        // NUMBER VALUE FORMATTING:
            else {
                // SPECIAL FORMATTING FOR USER ID / DATA LENGTH (HIDDEN KEY):
                if (data[0] === "Id") {
                    return (
                        <article className="row" id="container-id" key={ idx }>
                            <h3 className="hidden">ID:</h3>
                            <h1 id={ data[0] }>{ data[1]} / { length }</h1>
                        </article>
                    )
                }
                else {
                    return (
                        <article className="row" key={ idx }>
                            <h3>{ data[0] }</h3>
                            <p className={ mode }>{ data[1] }</p>
                        </article>  
                    )
                }
            }
        }
    // [ABOVE] CALL-BACK FORMATTING FOR NUMBERS, OBJECTS, ARRAYS, AND NULL [ABOVE]

    // [BELOW] FORMATTING FOR STRINGS [BELOW]
        const displayUser = Object.entries(user).map((data, idx) => {
        // STRING VALUE FORMATTING:
            if (typeof data[1] === "string") {
                return (
                    <article className="row" id={ data[0] } key={ idx }>
                        <h3>{ data[0] }:</h3>
                        <p className={ mode }>{ data[1] }</p>
                    </article>
                )
            }
        // NON-STRING VALUE FORMATTING CALL-BACK:
            return (
                specialFormat(data, idx)
            )
        })
    // [ABOVE] FORMATTING FOR STRINGS [ABOVE]

        return (
            <section className="display-container section">
                <div className="display">
                    { displayUser }
                </div>
            </section>
        )
    }
}

export default Display