import { Grid } from "@mui/material";
import React, { Component } from "react";
import inst_image from "../../Images/9364675fb26a.svg";
import inst_logo from "../../Images/logoinsta.png";
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
            <div className="loginpage_main" >
              <div>
                <img src={ inst_image } width="450" />
              </div>
            </div>
            <div>
              <img src={ inst_logo } />
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