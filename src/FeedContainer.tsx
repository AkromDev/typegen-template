import React from 'react'
import { useFeedQuery } from './apollo/generated'
import Feed from './Feed'

export default function FeedContainer() {
    const {loading, data,error} = useFeedQuery()
    console.log('data', data)
    console.log('error', error)
    console.log('loading', loading)
    
    return (
        <Feed feed={data?.feed || []}/>
    )
}
