import React, { Component } from 'react';

import classes from './Picture.css';

class Picture extends Component {
    state = {
        pictures: [
            { id: 0, title: 'Angular - The Complete Guide', src: 'https://uploads.toptal.io/blog/image/125395/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png' },
            { id: 1, title: 'Vue - The Complete Guide', src: 'https://miro.medium.com/max/980/0*BRrBBgjCGAzRniV8.jpg' },
            { id: 2, title: 'PWA - The Complete Guide', src: 'https://developers.google.com/web/updates/images/2015/12/getting-started-pwa/pwa-general-0-@1x.jpg' }
        ]
    }

    render () {
        const id_picture = this.props.match.params.id;
        return (
            <div className={classes.Picture}>
                <h1>{this.state.pictures[id_picture].title}</h1>
                <img src={this.state.pictures[id_picture].src} />
            </div>
        );
    }
}

export default Picture;