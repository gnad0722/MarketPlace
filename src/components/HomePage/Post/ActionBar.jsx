import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark } from 'lucide-react';

function ActionBar(props) {
    const [upVotes,setUpvote]= useState(props.upVotes);
    const [downVotes,setDownvote]= useState(props.downVotes);
    const [comments,setComment]=useState(props.comments);
    const [save,setSave]=useState(false);
    function handleSavePost(){
        setSave(!save)
    }
    return <div className='action-bar'>
        <span className='btn-action'><ThumbsUp size={25}/></span>
        <span>{upVotes}</span>
        <span className='btn-action' style={{paddingTop:"15px"}}><ThumbsDown size={25}/></span>
        <span>{downVotes}</span>
        <span className='btn-action' style={{color:"black",paddingTop:"10px"}}><MessageCircle size={20}/></span>
        <span>{comments}</span>
        <span className="btn-action" style={{marginLeft:"auto"}} onClick={handleSavePost}><Bookmark fill={save?"none":"#0d6efd"} color={save?"black":"#0d6efd"}/></span>
    </div> 
};
export default ActionBar;   