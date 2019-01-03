import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Pictures.css';
import Picture from './Picture/Picture.js';



class Pictures extends Component {
    state = {
        pictures: [
            { id: 0, title: 'Angular - The Complete Guide', src: 'https://uploads.toptal.io/blog/image/125395/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png' },
            { id: 1, title: 'Vue - The Complete Guide', src: 'https://miro.medium.com/max/980/0*BRrBBgjCGAzRniV8.jpg' },
            { id: 2, title: 'PWA - The Complete Guide', src: 'https://developers.google.com/web/updates/images/2015/12/getting-started-pwa/pwa-general-0-@1x.jpg' }
        ]
    }

    render () {
        return (    
            <div>
            <h1>Flicker Pictures</h1>
            <section className="Pictures">
                {
                    this.state.pictures.map( pic => {
                        return (
                            <Link to={'/pic/' + pic.id} key={pic.id}>
                                <article className="Pic">{pic.title}</article>
                            </Link>
                        );
                    } )
                }
            </section>
            </div>
        );
    }
}

export default Pictures;