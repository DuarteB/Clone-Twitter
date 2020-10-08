import React from 'react';

import Feed from '../Feed'

import {  
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Eduardo Duarte</h1>
        <h2>@EduardoDuarteB4</h2>

        <p>
         Web Developer 
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 3 de abril de 2002
          </li>
        </ul>

        <Followage>
          <span>
          <strong>68 </strong> Seguindo
          </span>
          <span>
            <strong>34 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;