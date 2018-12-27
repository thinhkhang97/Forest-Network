import React, { Component } from 'react';
import Post from '../post/Element';
import Line from '../line'
class History extends Component {
    getListPosts = () => {
        if (this.props.timeline.length>0) {
            
            return this.props.timeline.reverse().map(post => {
                return <div>
                    <Post
                content={post.data}
                time={post.time}
                />
                <Line/>
                </div>
            })
        }
    }
    render() {
        return (
            <div style={{overflow: 'auto'}}>
                {this.getListPosts()}
            </div>
        );
    }
}

export default History;