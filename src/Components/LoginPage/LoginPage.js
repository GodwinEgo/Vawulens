import { Grid } from "@mui/material";
import React, { Component } from "react";
import inst_image from ''
class LoginPage extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = {}
  }
  render ()
  {
    return (
      <div>
        <Grid container>
          <Grid item xs={ 3 }>
            Hello
          </Grid>
          <Grid item xs={ 6 }>
            <div >
              <div>
                <img src={ inst_image } />
              </div>
            </div>
          </Grid>
          <Grid item xs={ 3 }>
            Godwin
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LoginPage;