import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

// components
import Navbar from './Navbar'

export default function MainLayout() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
