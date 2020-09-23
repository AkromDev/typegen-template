import React from 'react'
import { PostFieldsFragment } from './apollo/generated'

type Props = {
    feed: PostFieldsFragment[]
}
function Feed({feed}: Props) {
    return (
        <div>
            <h1>Feed page</h1>
            {feed.map(f => (
                <div id={f.id}>
                    <h1>{f.title}</h1>
                    <h1>{f.content}</h1>
                </div>
            ))}
        </div>
    )
}

export default Feed
