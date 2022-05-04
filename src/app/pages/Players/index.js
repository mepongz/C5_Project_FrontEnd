import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerSelector } from './selectors'
import {getPlayers} from './slice'
import { useNavigate } from "react-router-dom";

import { Grid, Button, Box, Typography, Link, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Players = () => {
    const {players} = useSelector(playerSelector)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('asc')
    const [sortColumn, setSortColumn] = useState('last_name')
    const navigate = useNavigate()

    const RenderedPlayers = () => {
        return (
            <>
                {
                    players?.map(player => (
                        <Grid container key={player?.id + `-container`} style={{borderBottom: '1px solid #eee'}}>
                            <Grid item xs={4} key={player?.id + `-photo`}>
                                <Box>
                                    <img src={player?.photo_url ?? 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' }
                                         style={{ width: 200}}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={8} style={{textAlign: 'left'}} padding={5}>
                                <Typography variant="h6">First name: {player?.first_name}</Typography>
                                <Typography variant="h6">Lastname: {player?.last_name}</Typography>
                                <Typography variant="h6">Position: {player?.position}</Typography>
                                <Typography variant="h6">Age: {player?.age}</Typography>
                                <Typography variant="h6">Height: {player?.height}</Typography>
                                <Typography variant="h6">Team: <Link>{player?.team?.name} </Link></Typography>
                                <Grid style={{padding: 10}}>
                                    <Button variant="outlined" onClick={()=>navigate(`/edit/${player?.id}`, { state: {player}})}>Edit</Button>
                                    <Button variant="contained" color="error" style={{marginLeft: 10}}>DELETE</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </>
        )
    }
    

    
    useEffect(() => {
        dispatch({
            type: getPlayers.type,
            payload: {
                search: search ?? '',
                sort_by: sortBy,
                sort_column: sortColumn,
            }
        })
    },[])


    const handleSearch = () => {
        dispatch({
            type: getPlayers.type,
            payload: {
                search: search ?? '',
                sort_by: sortBy,
                sort_column: sortColumn,
            }
        })
    }

    return(
        <>
            <Grid container>
                <Grid item xs={12} style={{padding: '20px', textAlign: 'center'}}>
                    <Typography variant="h3"> Welcome to NBA Stars <Button variant="contained" color="success" onClick={()=> navigate('/add')}>Add new star</Button></Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 0.5, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        style={{padding: 20}}
                        >
                        <TextField 
                            id="outlined-basic" 
                            label="Search Star" 
                            variant="outlined" 
                            value={search} 
                            onChange={(e) => {setSearch(e.target.value)}} 
                            size="small"
                        />
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="sort-column"
                                value={sortColumn}
                                onChange={(e)=> {setSortColumn(e.target.value)}}
                                size="small"
                               >
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='last_name'
                                    >
                                        Lastname
                                    </MenuItem>
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='first_name'
                                    >
                                        Firstname
                                    </MenuItem>
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='age'
                                    >
                                        Age
                                    </MenuItem>
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='height'
                                    >
                                        Height
                                    </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="sort-by"
                                value={sortBy}
                                onChange={(e)=> {setSortBy(e.target.value)}}
                                size="small"
                               >
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='asc'
                                    >
                                        ASC
                                    </MenuItem>
                                    <MenuItem
                                        key={`sort-by-last-name`}
                                        value='desc'
                                    >
                                        DESC
                                    </MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={handleSearch}>Filter</Button>
                    </Box>
                </Grid>
                {
                    players.length ? (
                        <RenderedPlayers />
                    ) : (
                        <>
                            <Grid xs={12} item style={{textAlign: 'center', padding: 10}}>
                                No record found
                            </Grid>
                        </>
                    )
                }
                
                
                
            </Grid>
        </>
    )
}

export default Players