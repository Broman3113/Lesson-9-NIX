import React from 'react';
import {CircularProgress, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const CustomList = (props) => {
    if  (props.removingItemsError[props.id]) {
        console.log("Error: ", props.removingItemsError[props.id]);
        return (
            <List dense={true}>
                <ListItem sx={{width: '300px', margin: '0 auto'}}>
                    Something went wrong check console for more information
                </ListItem>
            </List>
        )
    }
    return (
        <List dense={true}>
            <ListItem sx={{minWidth: '300px', width: '400px', margin: '0 auto'}}
                      secondaryAction={
                          props.isRemoving ?
                              <CircularProgress/>
                              :
                              <div>
                                  <IconButton sx={{marginRight: '0px'}} edge="end" aria-label="edit" onClick={() => props.onEditGood(props.id)}>
                                      <EditIcon/>
                                  </IconButton>
                                  <IconButton edge="end" aria-label="delete" onClick={() => props.deleteGood(props.id)}>
                                      <DeleteIcon/>
                                  </IconButton>
                              </div>
                      }
            >
                <ListItemAvatar>
                    <CheckIcon/>
                </ListItemAvatar>
                <ListItemText sx={{paddingRight: "25px"}}
                    primary={props.children}
                />
            </ListItem>
        </List>
    );
};

export default CustomList;
