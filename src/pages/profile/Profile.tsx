import React from 'react'
import "./profile.css"
import { Avatar, Button, Paper } from '@mantine/core';
 import { MantineProvider, Text } from '@mantine/core';
 import { Input } from '@mantine/core';
 
import {IconCalendarHeart, IconPhone, IconMapPin, IconAt, IconAdFilled, IconPassword, IconUser, IconLocation } from '@tabler/icons-react';
const Profile = () => {
  return (
    <MantineProvider theme={{ fontFamily: '' }} withGlobalStyles withNormalizeCSS> 
    <div className='user'>       
      <div className="userTitleContainer">
        <h1 className="userTitle">User Profile</h1>
          
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Abebe Kebde</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <IconUser className="userShowIcon" />
              <span className="userShowInfoTitle">AbeKebe</span>
            </div>
           
            <div className="userShowInfo">
              <IconCalendarHeart className="userShowIcon" />
              <span className="userShowInfoTitle">12 May 1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <IconPhone className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <IconAt className="userShowIcon" />
              <span className="userShowInfoTitle">abe@test.com</span>
            </div>
           
            <div className="userShowInfo">
              <IconLocation className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
            <span className="userShowTitle">Previous Orders</span>
            <div className="userShowInfo">
               
              <span className="userShowInfoTitle"> Nothing to show</span>
            </div>
          </div>
        </div>
        
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <Input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <Input
                  type="text"
                  placeholder=" "
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <Input
                  type="text"
                  placeholder=" "
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <Input
                  type="password"
                  placeholder=" "
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <Input
                  type="text"
                  placeholder=" "
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <Input
                  type="text"
                  placeholder=" "
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

                  alt=""
                />
                <label htmlFor="file">
                  <IconAdFilled className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Button className="userUpdateButton">Update</Button>
            </div>
          </form>
        </div>

    

      </div>
 
  </div>
    </MantineProvider>
  );
}

export default Profile
