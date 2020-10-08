import React from 'react';

import { 
  Container, 
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Eduardo Duarte</strong>
            <span>@EduardoDuarteB4</span>
            <Dot />
            <time>7 de set</time>
          </Header>

          <Description>
              UI-Clone Twitter &#128565;
          </Description>

          <ImageContent />

          <Icons>

            <Status>
              <CommentIcon />
              18
            </Status>
          
            <Status>
              <RetweetIcon />
              10
            </Status>
         
            <Status>
              <LikeIcon />
              25
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;