import React, { Component } from 'react';

class MenuLinks extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: [{
                text: 'Sign Up',
                link: 'where to send me',
                icon: 'add me'
            },{
                text: 'Sign In',
                link: 'where to send me',
                icon: 'add me'
            },{
                text: 'By Date',
                link: 'where to send me',
                icon: 'add me',
            },{
                text: 'By Artist',
                link: 'add link to me',
                icon: 'add me'
            },{
                text: 'By Genre',
                link: 'add link to me',
                icon: 'add me',
            },{
                text: 'By Videos',
                link: 'add link to me',
                icon: 'add me'
            },{
                text: 'Post Events',
                link: 'add link to me',
                icon: 'add me'
             }]
             }
          }
     render() {
        let links = this.state.links.map(( link, i ) => <li key={i} 
        ref={i+ 1}><i aria-hidden="true" className={`fa ${link.icon}`}></i><a 
        href={link.link} target="_blank">{link.text}</a></li>);
        return (
    <div className={this.props.menuStatus} id='menu'>
        <ul>
            { links }
        </ul>
    </div>
        )
    }
}

export default MenuLinks;