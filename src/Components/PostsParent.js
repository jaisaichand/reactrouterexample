import React from 'react';
import PostItem from './PostItem';

class Postsparent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    _id: 'asdffasdf',
                    content: 'ajsdhflka hjkh k asdkjh fklasjhd klja hsdkfjhasfklj haksldj fhkaljshf klajsh fklajshd kasjhf',
                    author: 'kajshd fkhas  a',
                    time: 'asdf',
                    image: 'https://yt3.ggpht.com/fvRdihAalcbISIdxzpOU1GUPkKo7EiDvHHpIdrcgtunuvpqZiFbSH11U6lki1ST4Ts9w2Q5U8U4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <PostItem />
            </div>
        )
    }
}

export default Postsparent;