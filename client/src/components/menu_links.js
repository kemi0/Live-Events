import React, { Component } from 'react';

class MenuLinks extends Component {
    constructor(props){
        super(props);

        this.state = {
                    links: [
                        {
                            text: 'Home',
                            link: '#',
                            icon: 'fa-home',
                        },
                        {
                            text: 'Like Us',
                            link: '#',
                            icon: 'fa-thumbs-up'
                        },
                        // {
                        //     text: 'By Genre',
                        //     link: '#',
                        //     icon: 'add me',
                        // }
                        // ,{
                        //     text: '***Add More links here***',
                        //     link: '#',
                        //     icon: 'add me'
                    // },
                    ]
                }
 }
     render() {
        let links = this.state.links.map(( item, index) => 
              <li key={index} ref={index+ 1}> 
                <i aria-hidden="true" className={`fa ${item.icon}`}></i>
                <a className="title-txt" href={item.link} target="_blank">{item.text}</a>
            </li>
        );
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