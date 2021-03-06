import React from 'react';
import PropTypes from 'prop-types'
import {IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import './songList.css'
import {updateSelectedSongs} from "../../actions";
import {connect} from "react-redux";

const SongList = ({selectedSongs, handleSelectedSong}) => {
    const handleRemove = (songSelected) => {
        const selectedSongsUpdate = selectedSongs.filter(s => s !== songSelected);
        handleSelectedSong(selectedSongsUpdate);
    }

    return (
        <List className="list-container max-height-list" title={"List of Songs"}>
            {
                selectedSongs.length ? selectedSongs.map((songSelected) => (
                    <ListItem display="flex" alignItems="center" key={songSelected}>
                        <ListItemText title="list-item-text" primary={songSelected}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => handleRemove(songSelected)} title={"closeButton"}>
                                <CloseIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )) : <div className="empty-state" title="noSongsSelected">No song selected</div>
            }
        </List>
    )
}

SongList.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    handleSelectedSong: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    selectedSongs: state.selectedSongs,
})
const mapDispatchToProps = dispatch => ({
    handleSelectedSong: selectedSongs => dispatch(updateSelectedSongs(selectedSongs)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
