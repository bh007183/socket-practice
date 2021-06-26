import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import "./style.css"
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button"
import {searchUser, connectionRequest} from "../Redux/userActions"
import {useSelector, useDispatch} from "react-redux"

export default function Bar() {
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.Store.User.searchResults)
    console.log(searchResults)

    const [search, setSearch] = useState({
        username: ""
    })
    const [request, setRequest] = useState({
        _id: ""
    })
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
        console.log(event.target.value)
        dispatch(searchUser(event.target.value || "empty"))
        setSearch({username: event.target.value})
        
    }
    

        const connectionRequest = (event) => {
            
            console.log(event.target.value)
            dispatch(connectionRequest({_id: event.target.value}))
            
            
    
        }
        
    
   


  return (
    <div id="bar">
      <button type="button" onClick={handleOpen}>
        Find Friend
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div id="searchBlock">
            <div id="searchBar">
            <input onChange={handleChange} value={search.username} placeholder="Search"></input>
            <Button color="primary" variant="contained" >
                <SearchIcon/>
            </Button>

            </div>
            {searchResults.map((obj, index) => (
                <button type="button" onClick={connectionRequest} key={index} value={obj._id} id="selectButton" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {obj.username}
            </button>

            )
                
            )}
            
           

        </div>
      </Modal>
    </div>
  );
}
