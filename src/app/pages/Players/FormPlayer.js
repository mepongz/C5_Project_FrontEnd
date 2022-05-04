import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { playerSelector } from './selectors'
import {getTeams, playerUpdated} from './slice'

import { useSelector, useDispatch } from "react-redux";


const FormPlayer = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()


    const {teams} = useSelector(playerSelector)

    const [id, setId] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [position, setPosition] = useState('')
    const [team, setTeam] = useState(0)
    const [photo, setPhoto] = useState('https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg')

    // EFFECT TO GET SELECTED PLAYER
    useEffect(()=> {
        setId(location?.state?.player?.id)
        setFirstName(location?.state?.player?.first_name)
        setLastName(location?.state?.player?.last_name)
        setAge(location?.state?.player?.age)
        setHeight(location?.state?.player?.height)
        setPosition(location?.state?.player?.position)
        setTeam(location?.state?.player?.team_id)
        setPhoto(location?.state?.player?.photo_url ?? 'https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg' )
    },[location])
    
    // EFFECT TO GET ALL TEAMS
    useEffect(() => {
        dispatch({
            type: getTeams.type,
            payload: {}
        })
    },[])

    // HANDLERS
    const handleSubmit = () => {
        const data = []
        data['id'] = id
        data['last_name'] = lastName
        data['first_name'] = firstName
        data['age'] = age
        data['height'] = height
        data['position'] = position
        data['team_id'] = team

        dispatch(
            playerUpdated({
                data
            })
        )

    }
    
    return (
        <>
            <Grid container style={{width: 800, margin:'auto'}}>
                <Grid item xs={12} style={{padding: '20px', textAlign: 'center'}}>
                    <Typography variant="h3"> Welcome to NBA Stars </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6} style={{padding: 10}}>
                            <Box style={{width: '100%', border: '1px solid #eee', height: 400, }}>
                                <img src={photo} style={{width: '100%'}} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12} style={{padding: 10}}>
                                <TextField
                                    id="firstName"
                                    name="first_name"
                                    label="Firstname"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    value={firstName}
                                    fullWidth
                                    onChange = {(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{padding: 10}}>
                                <TextField
                                    id="lastName"
                                    name="last_name"
                                    label="Lastname"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    value={lastName}
                                    fullWidth
                                    onChange = {(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{padding: 10}}>
                                <TextField
                                    id="age"
                                    name="age"
                                    label="Age"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    value={age}
                                    fullWidth
                                    onChange = {(e) => setAge(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{padding: 10}}>
                                <TextField
                                    id="height"
                                    name="height"
                                    label="Height"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    value={height}
                                    fullWidth
                                    onChange = {(e) => setHeight(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{padding: 10}}>
                                <TextField
                                    id="position"
                                    name="position"
                                    label="Position"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    value={position}
                                    fullWidth
                                    onChange = {(e) => setPosition(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} style={{padding: 10}}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="my-input">Team</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="sort-column"
                                        style={{textAlign: 'left'}}
                                        value={team}
                                        onChange = {(e) => setTeam(e.target.value)}
                                    >
                                    {
                                        teams?.map((team) => {
                                            return (
                                                <MenuItem
                                                key={team?.id + "-nba-team"}
                                                value={team?.id}
                                                >
                                                {team?.name ?? team?.id}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} style={{padding: 10, textAlign: 'left'}}>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    { !!id ? 'Update' :'Save' }
                                </Button>
                                <Button variant="outlined" color="error" style={{marginLeft: 10}} onClick={()=> navigate('/')}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FormPlayer