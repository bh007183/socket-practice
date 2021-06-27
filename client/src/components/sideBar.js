import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "@material-ui/core/Modal";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useSelector, useDispatch} from "react-redux"
import { io } from "socket.io-client";

export default function SideBar() {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.Store.User.Friends)
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = useState({
        username: ""
    })
    const [part, setPart] = useState([])
    
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const addPart = (event) => {
        setPart([...part, {_id: event.target.value, username: event.target.dataset.username}] )
      console.log(part)
    }
    const removePart = event => {
        let replace = [...part]
        let newArr = replace.filter(obj => obj._id !== event.currentTarget.value)
        setPart(newArr)
    }
    

  return (
    <div id="roomContain">
      <Button onClick={handleOpen} id="createRoomButton">
        <p>Create Room</p>
        <CreateIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div id="friendSearchBlock">
          <div id="friendSearchBar">
              <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
              <h6 style={{color: "white"}}>Add Participants</h6>
              </div>
            
            <div id="added">
                {part.map((obj, index) => (
                    <div key={index} style={{display: "flex", alignItems: "center", background: "blue", paddingLeft:"10px"}}>
                        <div>{obj.username}</div>
                        <IconButton onClick={removePart} value={obj._id}>
                            <HighlightOffIcon/>
                        </IconButton>
                    </div>
                ))}

            </div>
          </div>

          {friends.map((obj, index) => (
            <button
            onClick={addPart}
              type="button"
              key={index}
              value={obj._id}
              data-username={obj.username}
              
              className="friendSelectButton "
              style={{
               
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {obj.username}
            </button>
          ))}
          <button>Initiate</button>
        </div>

      </Modal>
    </div>
  );
}
