import React from "react";

function chatlist({onSelectChat}){
    const chats=[
        {id:1,name:"Shwet Gaur",lastMessage:"Hello!",timestamp:"10:00 AM"},
        {id:2,name:"Prikshit Gaur",lastMessage:"Hey!",timestamp:"10:10 AM"},
    ];

    return(
        <div>
            <h2>Your Chats</h2>
            <ul>
                {chats.map((chat) =>
                    <li
                        key={chat.id}
                        onClick={()=>onSelectChat(chat)}
                        style={{cursor:"pointer",marginTop:"10px"}}
                    >
                        <strong>{chat.name}</strong>
                        <p>{chat.lastMessage}</p>
                        <small>{chat.timestamp}</small>
                    </li>    
                )}
            </ul>
        </div>
    );


}

export default chatlist;