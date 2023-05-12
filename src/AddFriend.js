import React, { useRef, useState } from "react"
import FriendDetail from "./FriendDetails"

const AddFriend = () => {
    const [friendsList, setFriendsList] =useState(['Ashraf', 'Ashu'])
    const [friendName, setFriendName] = useState("")
    const inputRef = useRef();

    const changeValue = event => {
        let name = event.target.value;
        setFriendName(name);
    }

    const add = () => {
        setFriendsList(
            friendsList => [...friendsList, friendName]
        )
        inputRef.current.value = ""
    }

    return <React.Fragment>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <label for="f" className="form-label">Friend Name</label>
                <input id="f" className="form-control" ref={inputRef} onChange={changeValue} />
                <br></br><div className="text-center"><button className="btn btn-success" onClick={add}>Add Friend</button></div>
            </div>           
        </div>

        <div>
            <h2>FriendList:</h2>
            <ul>
                {
                    friendsList.map(
                        friend =>
                            <FriendDetail key={friend} name={friend} />
                    )
                }
            </ul>
        </div>
    </React.Fragment>
}

export default AddFriend 