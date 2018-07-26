import React from 'react';
import {Link} from 'react-router-dom';

import './tag.scss';
import {BASE_URL_TAGS_IMAGE} from '../../../../config';

const Tag = ({galleryTagsList}) => {

    return galleryTagsList.map(item => {

        const linkStyle = {
            backgroundImage:
                `url('${BASE_URL_TAGS_IMAGE}/${item.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high')`
        };

        return (
            <li key={item.name}>
                <Link to={`/t/${item.name}`} style={linkStyle} className='tag'>
                    <div className='tag-title'>
                        <div className='tag-name'>
                            {item.display_name}
                        </div>
                        <div className='tag-posts'>
                            {item.total_items} Posts
                        </div>
                        <div className='tag-posts'>
                            {item.followers} Followers
                        </div>
                    </div>
                </Link>
            </li>
        )

    });
};

export default Tag;