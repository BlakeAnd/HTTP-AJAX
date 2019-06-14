import React from "react";

const  Friends = props => {
  console.log("fr props: ", props.friends)
  return(
    <div>
      {props.friends.map (friend => {
        return(
          <div>
            <p>name - {friend.name}</p>
            <p>id - {friend.id}</p>
            <p>age - {friend.age}</p>
            <p>email - {friend.email}</p>

          </div>
          
        );
      })}
      <form>
        <input type="text" placeholder="name"></input>
        <button>submit</button>
      </form>
    </div>
  );
}

// <Friend friend={friend}/>

export default Friends;