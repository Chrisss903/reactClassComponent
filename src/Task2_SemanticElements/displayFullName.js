import React from 'react'

export default class displayFullName extends React.Component {


    render() {
        return (
            <div className='DisplayName'>

                <h1>Full Name List : </h1>


                <ul className='DisplayName1'>
                    {this.props.KeyId}
                    {this.props.fullName.map((name) => (
                        <div>{name}</div>
                    ))}
                </ul>
            </div>
        );
    }
}
